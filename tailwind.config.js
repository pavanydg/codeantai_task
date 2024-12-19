/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                box: '0 0 24px 0 rgba(8,23,53,0.16)',
                bottom:  '0 4px 4px 0 rgba(0,0,0,0.25)'
            }
        },
        fontFamily: {
            'inter': ['Inter','sans-serif']
        }
    },
    plugins: [],
}

