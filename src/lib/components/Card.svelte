<script lang="ts">
  export let name: string;
  export let diff: number;
  export let id: number;

  import DotsVertical from '$lib/icons/DotsVertical.svelte';
  import SelectMenu from './SelectMenu.svelte';

  const diffInSec = Math.floor((diff / 1000) % 60);
  const diffInMin = Math.floor((diff / 1000 / 60) % 60);
  const diffInHour = Math.floor((diff / 1000 / 60 / 60) % 24);
  const diffInDay = Math.floor(diff / 1000 / 60 / 60 / 24);
</script>

<div
  id={id.toString()}
  class="relative rounded-md shadow-sm border border-gray-100 h-36 w-full p-4 flex flex-col justify-between"
>
  <button
    class="absolute right-0 top-0 transition rounded-full p-4 group"
    w-hover="bg-gray-200"
    w-active="bg-gray-200"
    on:click|preventDefault={() => {}}
  >
    <DotsVertical />
    <SelectMenu />
  </button>

  <h2 class="font-extrabold text-4xl">{name}</h2>
  <div>
    <p class="font-thin">Abstinence Time</p>
    <p class="font-bold">{diffInDay}d {diffInHour}h {diffInMin}m {diffInSec}s</p>
  </div>
</div>
