/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "media", // 시스템 설정에 따라 자동으로 다크 모드 적용
   content: [
      "./src/**/*.{html,js,svelte,ts}", // Svelte 파일까지 포함
   ],
   theme: {
      extend: {},
   },
   plugins: [],
};