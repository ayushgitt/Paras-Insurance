/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        screens: {
          'custom-sm': '400px',
        },
      },
    },
    plugins: [],
  };