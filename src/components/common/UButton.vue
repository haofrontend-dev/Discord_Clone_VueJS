<template>
    <button
        :class="[
            'u-button',
            { loading },
            `u-button__${variant}`,
            `u-button__${color}`,
            `u-button__${size}`,
            props.class,
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
import { type ButtonHTMLAttributes } from 'vue'

type Variants = 'primary' | 'secondary'
type Size = 'xs' | 'sm' | 'md' | 'lg'
type Color = 'white' | 'black' | 'gray' | 'primary' | 'secondary'

/* @vue-ignore */
interface Props extends ButtonHTMLAttributes {
    disabled?: boolean
    loading?: boolean
    variant?: Variants
    size?: Size
    color?: Color
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    color: 'white',
})

console.log(props)
</script>

<style scoped></style>
