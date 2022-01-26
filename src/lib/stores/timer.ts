import { readable } from 'svelte/store';

export default readable(Date.now(), (set) => {
  const interval = setInterval(() => set(Date.now()), 1000);
  return () => clearInterval(interval);
});
