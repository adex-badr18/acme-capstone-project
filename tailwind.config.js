/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          fontFamily: {
            inter: ["Inter", "sans-serif"]
          },
          colors: {
            'black': '#15803D',
            'purple': '#486BF2',
            'light-purple': '#84A2FA',
            'dark-purple': '#1B40B4',
            'off-white': '#F9FCFE'
          }
        },
    },
    plugins: [],
};
