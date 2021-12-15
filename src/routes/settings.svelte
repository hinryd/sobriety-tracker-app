<script>
  import Appbar from '$lib/Appbar.svelte';
  import ListTile from '$lib/ListTile.svelte';
</script>

<Appbar title="Settings" />
<main class="grid grid-cols-1 p-6 gap-6">
  <a href="/about"
    ><ListTile title="About" subtitle="Know more about the app"
      ><svg
        class="h-8 w-8"
        data-darkreader-inline-stroke=""
        fill="none"
        stroke="currentColor"
        style="--darkreader-inline-stroke: currentColor;"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      ></ListTile
    ></a
  >
</main>
