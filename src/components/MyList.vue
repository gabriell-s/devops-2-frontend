<template>
    <div>
        <ul>
        <li v-for="item in items" :key="item.id">
          Book: {{ item.book }} isnb: {{ item.isnb }} publisherDate: {{ item.publisherDate }}
        </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
defineProps<{
  items: Array<{
    id: number;
    book: string;
    isnb: string;
    publisherDate: number;
  }>;
}>()
</script>

