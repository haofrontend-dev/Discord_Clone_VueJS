import { createRouter, createWebHistory } from 'vue-router'

import { routes, authGuard } from '.'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

authGuard(router)
