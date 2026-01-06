/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"], // making sure tailwind scans all html-files 
    theme: {
        extend: {
            colors: {
                background: 'rgb(12, 12, 12)',
                primary: 'rgba(196, 156, 64, 1)',
                'primary-hover': '#edc193',
                secondary: 'rgba(255, 255, 255, 1)',
                'secondary-hover': 'rgba(255, 255, 255, 0.885)',
            },
            borderColor: theme => ({
                primary: theme('colors.primary'),
                'primary-hover': theme('colors.primary-hover'),
                secondary: theme('colors.secondary'),
                'secondary-hover': theme('colors.secondary-hover'),
            }),
            fontFamily: {
                sans: ['Hepta Slab', 'serif'],
            },
        },
    },
    plugins: [],
}
