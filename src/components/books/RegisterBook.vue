<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="book.name"
            :counter="255"
            :error-messages="errors.name"
            label="Name"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="book.edition"
            :counter="100"
            :error-messages="errors.edition"
            label="Edition"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="book.isbn"
            :error-messages="errors.isbn"
            :counter="13"
            label="Serial Number"
          />
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="book.publication_date"
            :error-messages="errors.publication_date"
            label="Publisher Date"
          />
        </v-col>
        <v-col cols="12" md="12">
          <v-textarea
            label="Description"
            v-model="book.description"
            :error-messages="errors.description"
            auto-grow
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { watch, reactive, toRefs } from 'vue'

const props = defineProps<{
  modelValue: {
    name: string
    description: string
    edition: string
    isbn: number
    publication_date: string
  }
}>()

const emit = defineEmits(['update:modelValue'])

// Criamos uma cópia reativa local para editar
const book = reactive({ ...props.modelValue })

// Emitir sempre que algo mudar
watch(
  () => ({ ...book }),
  (val) => {
    emit('update:modelValue', val)
  },
  { deep: true },
)

const errors = reactive({
  name: '',
  description: '',
  edition: '',
  isbn: '',
  publication_date: '',
})
</script>
