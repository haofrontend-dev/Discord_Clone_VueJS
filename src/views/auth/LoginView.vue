<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

import { LoginSchema } from '@/schema'

const formInput = reactive({
    email: '',
    password: '',
})

const validateForm = () => {
    try {
        return LoginSchema.validateSync(formInput)
    } catch (error) {
        console.error(error)
    }
}

const handleSubmit = () => {
    try {
        const checkValidate = validateForm()
        console.log(checkValidate)
    } catch (error) {
        console.error(error)
    }
}
</script>

<template>
    <div class="h-screen relative">
        <div class="absolute inset-0">
            <img src="@/assets/svg/login-bg.svg" class="w-full h-full" />
        </div>
        <div class="h-full flex items-center justify-center relative z-[1]">
            <div class="bg-gray-color-main lg:w-[784px]">
                <div class="form-login flex flex-nowrap gap-24">
                    <form class="flex-1" @submit.prevent="handleSubmit">
                        <div class="form-header text-center">
                            <h1 class="text-white form-title mb-1">
                                Welcome back!
                            </h1>
                            <div class="form-description">
                                We're so excited to see you again!
                            </div>
                        </div>
                        <div class="form-content">
                            <div class="form-item mb-5">
                                <label for="" class="form-label"
                                    >Email or Phone Number
                                    <span class="text-required">*</span></label
                                >
                                <input class="form-input" placeholder="" />
                            </div>
                            <div class="form-item">
                                <label for="" class="form-label"
                                    >Password
                                    <span class="text-required">*</span></label
                                >
                                <input
                                    class="form-input"
                                    type="password"
                                    placeholder=""
                                />
                            </div>
                            <RouterLink
                                to="/forgot-password"
                                class="text-link mt-1 inline-block hover:underline"
                            >
                                Forgot your password?
                            </RouterLink>

                            <u-button
                                class="w-full mt-5 py-2.5 bg-btn-primary text-white text-center"
                                variant="primary"
                                color="white"
                                title="Login"
                                >Login</u-button
                            >
                            <div class="flex items-center mt-2">
                                <span class="text-[13px] text-[#A3A6AA] mr-1"
                                    >Need an account?</span
                                >
                                <RouterLink
                                    to="/register"
                                    class="text-link ml-1 inline-block font-semibold hover:underline"
                                >
                                    Register
                                </RouterLink>
                            </div>
                        </div>
                    </form>
                    <div class="flex-0 w-60 flex flex-col items-center">
                        <div class="w-44 h-44 rounded bg-white p-2"></div>
                        <div class="text-center mt-5">
                            <h3 class="text-white text-2xl">
                                Log in with QR Code
                            </h3>
                            <p class="text-sm text-btn-secondary mt-2">
                                Scan this with the
                                <strong>Discord mobile app</strong> to log in
                                instantly.
                            </p>
                            <button
                                class="text-xs text-btn-link mt-2 hover:underline"
                            >
                                Or, sign in with passkey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
