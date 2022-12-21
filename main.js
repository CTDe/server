import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  Axios  from 'axios'

//createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
//app.config.globalProperties.$http = axios
//app.config.globalProperties.$axios = axios
//Axios.defaults.baseURL = '/api'
app.config.globalProperties.Axios = Axios
app.config.globalProperties.$httpUrl='http://localhost:8088'
app.use(store).use(router)
.use(ElementPlus)
.mount('#app')