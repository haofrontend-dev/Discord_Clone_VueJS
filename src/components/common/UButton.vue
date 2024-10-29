<template>
    <button
        :class="[
            'u-button',
            { loading },
            `u-button__${variant}`,
            `u-button__${color}`,
            `u-button__${size}`,
        ]"
        :disabled="disabled || loading"
    >
        <font-awesome-icon
            v-if="loading"
            class="animate-spin text-white"
            icon="fa-solid fa-circle-notch"
        />
        <slot v-else />
    </button>
</template>

<script setup lang="ts">
type Variants = 'primary' | 'secondary'
type Size = 'xs' | 'sm' | 'md' | 'lg'
type Color = 'white' | 'black' | 'gray' | 'primary' | 'secondary'

/* @vue-ignore */
type Props = {
    disabled?: boolean
    loading?: boolean
    variant?: Variants
    size?: Size
    color?: Color
}

withDefaults(defineProps<Props>(), {
    disabled: false,
    loading: false,
    variant: 'primary',
    size: 'md',
    color: 'primary',
})
</script>

<style scoped></style>
