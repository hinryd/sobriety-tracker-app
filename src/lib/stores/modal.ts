import { writable } from 'svelte/store';

const { subscribe, update } = writable(false);

function toggle() {
  update((value) => !value);
}

export default {
  subscribe,
  toggle
};
