import { defineStore } from 'pinia'
import { ref } from 'vue'
import { bookService } from '@/services/bookService'
import type { Book } from '../models/Book.ts'
import axios from 'axios'

import { extractBackendError } from '@/utils/errorHandler'

export const useBookStore = defineStore('bookStore', () => {
  const books = ref<Book[]>([])

  async function fetchBooks() {
    try {
      books.value = await bookService.getBooks()
    } catch (err) {
      console.error(err)
      throw extractBackendError(err, 'Erro ao buscar livros.')
    }
  }

  async function addBook(book: Omit<Book, 'id'>) {
    try {
      const newBook = await bookService.addBook(book)
      books.value.push(newBook)
    } catch (err) {
      console.error(err)
      throw extractBackendError(err, 'Erro ao adicionar livro.')
    }
  }

  async function editBook(book: Omit<Book, 'id'>) {
    try {
      const newBook = await bookService.editBook(book)
      const index = books.value.findIndex((b) => b.public_id === newBook.public_id)
      if (index !== -1) {
        books.value[index] = newBook
      }
    } catch (err) {
      console.error(err)
      throw extractBackendError(err, 'Erro ao adicionar livro.')
    }
  }

  async function deleteBook(book: Book) {
    try {
      await bookService.deleteBook(book)
      books.value = books.value.filter((b) => b.public_id !== book.public_id)
    } catch (err) {
      console.error(err)
      throw extractBackendError(err, 'Erro ao deletar livro.')
    }
  }

  return {
    books,
    fetchBooks,
    addBook,
    editBook,
    deleteBook,
  }
})
