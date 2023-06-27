import './assets/style/theme.css'

import CanvasJSChart from '@canvasjs/vue-charts';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies';

const app = createApp(App)

app.use(router)
app.use(CanvasJSChart);
app.use(VueCookies)
app.mount('#app')
