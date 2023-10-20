// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      spacing:{
        'main-span':'72px'
      },
      colors: {
        "fb-bg": "#18191a",
        "fb-header": "#242526",
        "fb-input": "#3a3b3c",
        "fb-popover": "#3e4042",
        "fb-active": "#323436",
        "fb-card": "#242526",
        'fb': "#2e89ff"
      },
    },
  },
  plugins: [],
};
