/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#746BEB',
        secondary: '#F3CEB4',
        tertiary: '#7FBC8C',
        quarterly: '#FFC700',
      },
    },
    plugins: [],
  },
};
