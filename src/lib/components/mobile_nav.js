import { writable } from 'svelte/store';

export const showMobileNav = writable(false);
export const mobileMenuOpen = writable(false);

export function isMobile() {
   if (typeof window === 'undefined') {
      return false;
   }
   return window.innerWidth <= 786;
}