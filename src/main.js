import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { state } from './state.js' 

createApp(App)
  .use(router)
  .mount('#app')