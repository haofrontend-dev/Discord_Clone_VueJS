<template>
    <AppHeader />
    <main>
        <RouterView />
    </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppHeader from '@/components/header/AppHeader.vue'
</script>

<style scoped></style>
