import { createApp } from 'vue'
import './style.css'
import Vue3Material from 'vue3-material';
import router from './controller/routes';

import App from './App.vue'


createApp(App)
	.use(router)
    .use(Vue3Material)
    .mount('#app');
