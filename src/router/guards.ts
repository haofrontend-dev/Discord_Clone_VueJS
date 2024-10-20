import { type Router } from 'vue-router'

export const authGuard = (router: Router) => {
    router.beforeEach(async (to, __, next) => {
        if (typeof to.name !== 'string') return
        next()
    })
}
