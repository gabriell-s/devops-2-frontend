import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { components } from 'vuetify/dist/vuetify.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../templates/Full.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/book',
          name: 'book',
          component: () => import('../views/BookList.vue')
        },
        {
          path: '/book/edit',
          name: 'editbook',
          component: () => import('../views/EditBook.vue')
        },
      ]
    },
    {
      path: '/dash',
      name: 'dash',
      component: () => import('../templates/Blank.vue')
    },
  ],
})

export default router
