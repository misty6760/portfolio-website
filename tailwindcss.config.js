/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class", // 다크모드 전역 제어용
   content: [
      "./src/**/*.{html,js,svelte,ts}", // Svelte 파일까지 포함
   ],
   theme: {
      extend: {},
   },
   plugins: [],
};