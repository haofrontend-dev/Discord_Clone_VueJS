<template>
    <nav class="header-nav">
        <ul class="header-nav-list">
            <li
                v-for="item in MenuList"
                :key="item.name"
                class="header-nav-item"
            >
                <RouterLink :to="item.path">{{ item.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { MenuList } from './menu'
</script>

<style scoped></style>
