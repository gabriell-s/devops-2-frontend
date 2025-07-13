<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card>
      <v-card-title class="text-h5"
        >{{ formBook.public_id ? 'Edit' : 'Register' }} a book</v-card-title
      >
      <v-card-subtitle class="text-caption text-grey">
        {{ formBook.public_id || 'New Book' }}
      </v-card-subtitle>
      <v-card-text>
        <Register v-model="formBook" />
      </v-card-text>

      <v-card-actions>
        <v-btn @click="handleSubmit" color="primary">Register</v-btn>
        <v-btn @click="dialog = false" color="error">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Register from '@/components/books/RegisterBook.vue'
import type { Book } from '@/models/Book'

const props = defineProps<{
  visible: boolean
  book?: Book
}>()

const emit = defineEmits(['update:visible', 'submitRegister'])

const dialog = ref(props.visible)

watch(
  () => props.visible,
  (val) => {
    dialog.value = val
  },
)

watch(dialog, (val) => {
  emit('update:visible', val)
})

const formBook = ref({
  public_id: '',
  name: '',
  description: '',
  edition: '',
  isbn: 0,
  publication_date: '',
})

watch(
  () => props.book,
  (newBook) => {
    if (newBook) {
      formBook.value = {
        public_id: newBook.public_id ?? '',
        name: newBook.name ?? '',
        description: newBook.description ?? '',
        edition: newBook.edition ?? '',
        isbn: newBook.isbn ?? 0,
        publication_date: newBook.publication_date ?? '',
      }
    }
  },
  { immediate: true },
)

function handleSubmit() {
  emit('submitRegister', { ...formBook.value })
  dialog.value = false
}
</script>
