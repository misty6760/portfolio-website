import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const toastMessage = writable('');
export const showToast = writable(false);

// 다크 모드 상태 관리 (localStorage와 연동)
function createDarkModeStore() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		toggle: () => update((n) => !n),
		set: (value) => {
			set(value);
			if (browser) {
				localStorage.setItem('darkMode', value.toString());
				if (value) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
		},
		init: () => {
			if (browser) {
				const saved = localStorage.getItem('darkMode');
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const isDark = saved !== null ? saved === 'true' : prefersDark;
				set(isDark);
				if (isDark) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
			}
		}
	};
}

export const darkMode = createDarkModeStore();