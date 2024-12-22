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
                bottom: '0 4px 4px 0 rgba(0,0,0,0.25)',
                'custom-button': 'inset 0 0 0 1px rgba(10,13,18,0.5), inset 0 -2px 0 rgba(10, 13, 18, 0.5), 0 1px 2px rgba(10, 13, 18, 0.5)'
            }
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif']
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
            'custom': "1372px"
        }
    },
    plugins: [],
}

