import './assets/style/theme.css'

import CanvasJSChart from '@canvasjs/vue-charts';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(CanvasJSChart);
app.mount('#app')
