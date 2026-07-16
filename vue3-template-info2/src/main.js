import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@fortawesome/fontawesome-free/js/all.js' //https://docs.fontawesome.com/

const app = createApp(App)
app.use(router)
app.mount('#app')
