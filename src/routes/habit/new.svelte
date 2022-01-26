<script lang="ts">
  import Appbar from '$lib/components/Appbar.svelte';
  import Check from '$lib/icons/Check.svelte';
  import { Storage } from '@capacitor/storage';

  let habit: Habit = {
    name: '',
    type: 'money',
    averageLoss: null,
    createdAt: Date.now(),
    history: [Date.now()]
  };

  async function addHabit() {
    const habits = await Storage.get({ key: 'habits' }).then(
      (habits) => JSON.parse(habits.value) ?? []
    );
    await Storage.set({ key: 'habits', value: JSON.stringify([...habits, habit]) });
    window.history.back();
  }
</script>

<Appbar title="New habit" activeBackButton={true}>
  <button type="submit" form="new_habit_form">
    <Check />
  </button>
</Appbar>

<form
  id="new_habit_form"
  class="grid grid-cols-1 gap-3 p-6 mb-20"
  on:submit|preventDefault={addHabit}
>
  <p class="text-2xl">What addiction or bad habit do you want to track?</p>
  <input
    class="border border-gray-400 rounded p-4 h-16"
    placeholder="Habit name"
    bind:value={habit.name}
    required
  />

  <p class="text-2xl">What type of habit is it?</p>
  <label class="flex items-center">
    <input class="h-7 w-7 mr-2" type="radio" value="money" bind:group={habit.type} />
    <span class="font-bold text-xl">Money</span>
  </label>
  <p class="text-sm">This habit costs you money. For example: smoking, drinking alcohol.</p>
  <input
    class="border border-gray-400 rounded p-4 h-16 {habit.type === 'money' ? 'block' : 'hidden'}"
    type="number"
    placeholder="Average weekly expenses"
    bind:value={habit.averageLoss}
    required
  />
  <label class="flex items-center">
    <input class="h-7 w-7 mr-2" type="radio" value="time" bind:group={habit.type} />
    <span class="font-bold text-xl">Time</span>
  </label>
  <p class="text-sm">
    This habit is a waste of precious time. For example: video games, procrastination.
  </p>
  <input
    class="border border-gray-400 rounded p-4 h-16 {habit.type === 'time' ? 'block' : 'hidden'}"
    type="number"
    placeholder="Average weekly minutes loss"
    bind:value={habit.averageLoss}
    required
  />
</form>
