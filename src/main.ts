import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './styles/index.scss'
let basicSalary:number = 0.86
basicSalary = (0.86 - 0.33 + 0.15) * 6 + 1 + 3.5
console.log(basicSalary)

createApp(App).use(router).use(store, key).mount('#app')
