import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { tilt } from './directives/tilt.js'
import { countUp } from './directives/countUp.js'

const app = createApp(App)
app.directive('tilt', tilt)
app.directive('count-up', countUp)
app.use(router).mount('#app')
