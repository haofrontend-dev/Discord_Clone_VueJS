import type { RouteRecordRaw } from 'vue-router'

import { ROUTE_NAMES } from '@/enums'

export interface RouteList {
    name: string
    url: { name: ROUTE_NAMES }
}

export const GetRoutePath = (routeName: ROUTE_NAMES): string | null => {
    const route = routes.find((route) => route.name === routeName)

    return route?.path || null
}

export const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        name: ROUTE_NAMES.HOME,
        component: () => import('@/views/home/HomeView.vue'),
        meta: {
            title: 'Discord - Group Chat That’s All Fun & Games',
            description: 'Discord - Group Chat That’s All Fun & Games',
        },
    },
    {
        path: '/auth',
        name: ROUTE_NAMES.LOGIN,
        component: () => import('@/views/auth/LoginView.vue'),
        meta: {
            layout: 'empty',
            title: 'Login',
            description: 'Login page',
        },
    },
]
