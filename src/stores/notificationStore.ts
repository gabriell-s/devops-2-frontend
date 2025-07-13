// stores/notificationStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const message = ref('')
  const color = ref('error') // pode ser 'error', 'success', 'info', etc
  const visible = ref(false)

  function showError(msg: string) {
    message.value = msg
    color.value = 'error'
    visible.value = true
  }

  function showSuccess(msg: string) {
    message.value = msg
    color.value = 'success'
    visible.value = true
  }

  function hide() {
    visible.value = false
  }

  return {
    message,
    color,
    visible,
    showError,
    showSuccess,
    hide,
  }
})
