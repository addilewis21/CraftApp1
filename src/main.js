import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { state } from './state.js' 

const app = createApp(App)
app.provide('state', state)
  .mount('#app')