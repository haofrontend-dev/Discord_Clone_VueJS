/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'btn-primary': '#5865f2',
                'btn-secondary': '#b9bbbe',
                'btn-link': '#00aff4',
            },
        },
    },
    plugins: [],
}
