import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import vuetify from './plugin/vuetify' // <-- importa seu plugin configurado

// Components
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vuetify)

app.mount('#app')
