import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css/normalize.css"
import "@/style/index.scss"

import mgjUI from '@/components/index.js'

createApp(App).use(mgjUI).use(store).use(router).mount('#app')