<script context="module">
  export const load = async ({ page }) => {
    return {
      props: {
        id: page.params.id
      }
    };
  };
</script>

<script lang="ts">
  export let id: number;

  import Appbar from '$lib/Appbar.svelte';
  import { habits } from '../../stores';

  let habit = $habits[id];
</script>

<Appbar title={habit.name} activeBackButton={true}>
  <button type="submit" form="new_habit_form">
    <svg
      class="h-7 w-7"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      /></svg
    >
  </button>
</Appbar>

<!--
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
</form> -->
