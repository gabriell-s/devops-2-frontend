<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <!-- Menu hambúrguer à esquerda -->
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>

      <!-- Título da aplicação -->
      <v-app-bar-title>Meu App</v-app-bar-title>

      <!-- Botões de navegação à direita -->
      <template v-slot:append>
        <v-btn icon @click="goTo('/')">
          <v-icon>mdi-book</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <!-- Drawer lateral (opcional) -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item @click="goTo('/')">
          <v-list-item-title>Books</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Snackbar global -->
    <v-snackbar
      v-model="notification.visible"
      :color="notification.color"
      timeout="4000"
      location="top"
    >
      {{ notification.message }}
      <template #actions>
        <v-btn icon @click="notification.hide()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <v-main>
      <div id="container">
        <book-view></book-view>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import BookView from '@/views/IndexView.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notificationStore'

const drawer = ref(false)
const router = useRouter()
const notification = useNotificationStore()

function goTo(to: string) {
  router.push({ path: to })
}
</script>
<style>
.container {
  background-color: black;
}
</style>
