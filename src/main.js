import { createApp } from 'vue'
import App from './App.vue'
import { fluent } from './fluent'

createApp(App)
  .use(fluent)
  .mount('#app')
