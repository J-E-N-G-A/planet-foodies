import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3Material from 'vue3-material';

createApp(App)
    .use(Vue3Material)
    .mount('#app');
