<template>
    <header class="container app-header">
        <div class="header-logo">
            <RouterLink to="/">
                <img src="@/assets/svg/logo.svg" />
            </RouterLink>
        </div>
        <NavigationMenu />
        <u-button class="header-login" loading variant="primary" color="white"
            >Login</u-button
        >
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import NavigationMenu from './navigate/NavigationMenu.vue'
</script>

<style scoped></style>
