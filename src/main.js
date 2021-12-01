import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import VueEcharts from 'vue-echarts'

const app = createApp(App)
app.component('v-chart', VueEcharts)
installElementPlus(app)
app.use(store).use(router).mount('#app')