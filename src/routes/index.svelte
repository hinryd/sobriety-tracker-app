<script>
  import Appbar from '$lib/Appbar.svelte';
  import { habits } from '../stores';
</script>

<Appbar title="Sobriety Tracker" />
<main class="grid grid-cols-1 gap-6 p-6 z-0">
  {#each $habits as habit, id}
    <a
      class="relative rounded-xl shadow-md border border-gray-200 h-36 w-full p-4"
      href={'/habit/' + id}
    >
      <button class="absolute right-4 top-4">X</button>
      <h2 class="font-bold text-2xl">{habit.name}</h2>
    </a>
  {/each}
  <a
    class="flex justify-center items-center rounded-xl bg-gray-200 h-36 w-full text-gray-700 transition hover:shadow-md hover:border-gray-300 hover:scale-[1.02] active:shadow-md active:border-gray-300 active:scale-[1.02]"
    href="/habit/new"
  >
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >Add new habit
  </a>
</main>
