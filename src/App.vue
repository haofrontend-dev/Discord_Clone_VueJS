<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import layouts from '@/layouts'
import type { Layouts } from '@/types'

const route = useRoute()
const layout = computed(
    () => (layouts as Layouts)[(route.meta.layout as string) || 'main']
)
</script>

<template>
    <component :is="layout" />
</template>

<style scoped>
div {
    display: block;
}
</style>
