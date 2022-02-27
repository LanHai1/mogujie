import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css/normalize.css"
import "@/style/index.scss"
import 'lib-flexible/flexible.js'

import mgjUI from '@/components/index.js'
import '@/mock'; // mock数据

createApp(App).use(mgjUI).use(store).use(router).mount('#app')