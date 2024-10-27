import type { App } from 'vue'

import UButton from './UButton.vue'

function registerComponents(app: App) {
    app.component('u-button', UButton)
}

export { UButton, registerComponents }
