<template>
  <v-container class="py-10">
    <v-overlay v-model="loading" class="d-flex justify-center align-center" absolute>
      <v-progress-circular indeterminate color="primary" size="64" />
    </v-overlay>

    <!-- Título da página -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h4 font-weight-bold page-title">📚 Acess Books</h1>
        <p class="text-body-1 subtitle">Enter or Register your Book</p>
      </v-col>
    </v-row>

    <!-- Seção de ações -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="6" class="text-center">
        <DialogBook
          v-model:visible="isDialogVisible"
          :book="selectedBook"
          @submitRegister="addBook"
        />
      </v-col>
    </v-row>

    <!-- Lista de livros -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card elevation="4" class="book-card">
          <v-card-title class="bg-primary text-white d-flex align-center">
            <v-icon class="mr-2">mdi-book-multiple</v-icon>
            <span class="text-h6">Books List</span>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-refresh" variant="text" @click="fetchBooks"> </v-btn>
            <v-btn icon="mdi-plus" variant="text" @click="openBookDialog"></v-btn>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-card-text
              ><v-card-text>
                <div v-if="bookStore.books.length">
                  <ListBook :items="bookStore.books" @editBook="openBookDialog" />
                </div>
                <div v-else class="text-center text-grey py-6">
                  <v-icon size="40" class="mb-2" color="grey">mdi-book-open-variant</v-icon>
                  <div>Nenhum livro cadastrado.</div>
                </div>
              </v-card-text>
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DialogBook from '@/components/books/DialogBook.vue'
import ListBook from '@/components/books/ListBook.vue'
import { useBookStore } from '@/stores/bookStore'
import { onMounted } from 'vue'
import type { Book } from '@/models/Book'
import { extractBackendError } from '@/utils/errorHandler'

onMounted(async () => {
  await fetchBooks()
})
const loading = ref(false)

const bookStore = useBookStore()

import { useNotificationStore } from '@/stores/notificationStore'

const notification = useNotificationStore()

const fetchBooks = async () => {
  loading.value = true
  try {
    await bookStore.fetchBooks()
  } catch (err: any) {
    notification.showError(err)
  } finally {
    setTimeout(() => {
      loading.value = false
    }, 1000)
  }
}

const addBook = async (book: Omit<Book, 'id'>) => {
  loading.value = true
  try {
    if (book.public_id) {
      await bookStore.editBook(book)
      notification.showSuccess('Livro atualizado com sucesso!')
      return
    } else {
      await bookStore.addBook(book)
      notification.showSuccess('Livro adicionado com sucesso!')
    }
  } catch (err: any) {
    const parsed = extractBackendError(err)
    notification.showError(parsed.message)
  } finally {
    loading.value = false
  }
}

const isDialogVisible = ref(false)
const selectedBook = ref<Book | null>(null)

const openBookDialog = (book?: Book) => {
  if (book) {
    selectedBook.value = book
  } else {
    selectedBook.value = {
      public_id: '',
      name: '',
      description: '',
      edition: '',
      isbn: '',
      publication_date: '',
    }
  }
  isDialogVisible.value = true
}
</script>
