import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueApexCharts from "vue3-apexcharts";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

createApp(App)
    .use(VueApexCharts)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
