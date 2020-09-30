import { createApp } from 'vue'
import App from "@/App";
import router from './router'
require('./assets/css/main.css');

createApp(App).use(router).mount('#app')
