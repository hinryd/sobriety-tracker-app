import { writable } from 'svelte/store';
import { Storage } from '@capacitor/storage';
import { browser } from '$app/env';

let habits = [];

if (browser) habits = await init();

const { subscribe, set } = writable<Habit[]>(habits);

async function init(): Promise<Habit[]> {
  const storage = await Storage.get({ key: 'habits' });
  const habits = JSON.parse(storage.value) as Habit[];
  set(habits ?? []);
  return habits;
}

async function upsert(habit: Habit): Promise<void> {
  const habits = await Storage.get({ key: 'habits' }).then(
    (habits) => JSON.parse(habits.value) as Habit[]
  );
  await Storage.set({ key: 'habits', value: JSON.stringify([...habits, habit]) }).then(() => {
    set([...habits, habit]);
  });
}

export default {
  subscribe,
  upsert
};
