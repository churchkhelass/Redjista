import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import components from '@/components/UI';

import './assets/scss/main.scss'
const app = createApp(App)

window.$ =window.jQuery = require('jquery');

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app');