import './assets/main.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import MenuHeader from './components/shared/MenuHeader.vue'

const app = createApp(App)
app.component('menu-header', MenuHeader)
app.use(createPinia())
app.use(router)
app.use(Antd)
app.mount('#app')
