import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import '@/styles/index.scss'
import '@/assets/css/tailwind.css'
import { router } from '@/router'
import { registerComponents } from './components'

library.add(fab, fas, far)

const app = createApp(App)
app.use(router)
registerComponents(app)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
