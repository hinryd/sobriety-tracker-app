import { writable } from 'svelte/store';

function createHabits() {
  const { subscribe, update } = writable([]);
  return {
    subscribe,
    addHabit: (habit: Habit) => update((habits) => [...habits, habit])
  };
}

export const habits = createHabits();
