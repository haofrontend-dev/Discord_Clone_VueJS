import pluginVue from 'eslint-plugin-vue'

export default [
    ...pluginVue.configs['flat/recommended'],
    {
        rules: {
            // allow async-await
            'generator-star-spacing': 'off',
            // allow debugger during development
            'no-debugger':
                process.env.NODE_ENV === 'production' ? 'error' : 'off',
            indent: ['error', 4],
            'vue/html-indent': ['error', 4],
            'vue/script-indent': ['error', 4],
        },
        parser: 'babel-eslint',
        parserOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
                modules: true,
                experimentalObjectRestSpread: true,
            },
        },
    },
]
