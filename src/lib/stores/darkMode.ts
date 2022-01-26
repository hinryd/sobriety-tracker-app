import { writable } from 'svelte/store';

const { subscribe, update } = writable(false);

function toggle(): void {
  update((v) => !v);
}

export default {
  subscribe,
  toggle
};
