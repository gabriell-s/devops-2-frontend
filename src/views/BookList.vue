<template>
  <ListBook :items="bookStore.books"></ListBook>
</template>

<script setup lang="ts">
import ListBook from '@/components/books/ListBook.vue'

import { useBookStore } from '@/stores/bookStore'
const bookStore = useBookStore()
</script>

<style></style>
