<script lang="ts">
  import Appbar from '$lib/components/Appbar.svelte';
  import Sun from '$lib/icons/Sun.svelte';
  import Moon from '$lib/icons/Moon.svelte';
  import PlusCircle from '$lib/icons/PlusCircle.svelte';
  import timer from '$lib/stores/timer';
  import { onMount } from 'svelte';
  import { Storage } from '@capacitor/storage';
  import darkMode from '$lib/stores/darkMode';
  import Card from '$lib/components/Card.svelte';

  let habits: Habit[] = [];
  onMount(async () => {
    habits = await Storage.get({ key: 'habits' }).then((res) => JSON.parse(res.value) ?? []);
  });
</script>

<Appbar title="Sobriety Tracker">
  <button class="h-7 w-7" on:click={darkMode.toggle}>
    {#if $darkMode}
      <Sun />
    {:else}
      <Moon />
    {/if}
  </button>
</Appbar>

<main class="grid grid-cols-1 gap-6 p-6 z-0">
  {#each habits as habit, id}
    {@const diff = $timer - habit.history[habit.history.length - 1]}
    <Card name={habit.name} {diff} {id} />
  {/each}

  <a
    class="flex justify-center items-center gap-1 rounded-md bg-gray-200 h-36 w-full text-gray-500 transition"
    w-hover="border-gray-300 scale-105 "
    w-active="border-gray-300 scale-105"
    href="/habit/new"
  >
    <PlusCircle />
    <p>Tap here to add new habit</p>
  </a>
</main>
