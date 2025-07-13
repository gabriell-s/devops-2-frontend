<template>
  <v-row dense>
    <v-col v-for="item in items" :key="item.public_id" cols="12" sm="6" md="4" lg="3">
      <v-card color="surface" class="elevation-3 rounded-xl d-flex flex-column h-100">
        <!-- Imagem ou skeleton -->
        <v-skeleton-loader type="image" height="160px" class="rounded-t-xl" />

        <!-- Título -->
        <v-card-title class="py-2 d-flex align-center">
          <v-icon class="mr-2" size="x-small"> mdi-book-open-variant </v-icon>
          <span class="text-subtitle-1 font-weight-medium">
            {{ item.name }}
          </span>
          <v-spacer />
          <v-btn
            icon="mdi-pencil"
            variant="text"
            class="ml-2"
            size="x-small"
            @click="editBook(item)"
          >
          </v-btn>
        </v-card-title>

        <!-- Informações -->
        <v-card-subtitle class="py-1 text-body-2 text-grey-darken-1">
          <v-icon icon="mdi-book-open-outline" class="mr-1" size="18" color="indigo" />
          Edition: {{ item.edition }}<br />
          <v-icon icon="mdi-barcode" class="mr-1" size="18" color="teal" />
          ISBN: {{ item.isbn }}
        </v-card-subtitle>

        <!-- Publicação -->
        <v-card-text class="pt-0 text-body-2 text-grey-darken-1">
          <v-icon icon="mdi-calendar" class="mr-1" size="18" color="deep-orange" />
          Published: {{ item.publication_date }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import type { Book } from '@/models/Book'
defineProps<{
  items: Array<Book>
}>()
const emit = defineEmits(['editBook'])

const editBook = (book: Book) => {
  console.log('Editing book:', book)
  emit('editBook', book)
  // Add your logic to handle book editing here
}
</script>
