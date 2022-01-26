<script>
  import Cog from '$lib/icons/Cog.svelte';
  import Home from '$lib/icons/Home.svelte';
</script>

<nav class="flex-grow-0 h-22 bg-indigo-800 w-screen flex justify-evenly items-center text-white">
  <a class="flex flex-col items-center" href="/">
    <Home />
    <p class="text-xs text-white">Home</p>
  </a>
  <a class="flex flex-col items-center" href="/settings">
    <Cog />
    <p class="text-xs text-white">Settings</p>
  </a>
</nav>
