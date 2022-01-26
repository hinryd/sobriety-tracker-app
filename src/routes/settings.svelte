<script>
  import Appbar from '$lib/components/Appbar.svelte';
  import ListTile from '$lib/components/ListTile.svelte';
  import InformationCircle from '$lib/icons/InformationCircle.svelte';
  import XCircle from '$lib/icons/XCircle.svelte';
  import modal from '$lib/stores/modal';
</script>

<Appbar title="Settings" />
<main class="grid grid-cols-1 p-6 gap-6">
  <a href="/about">
    <ListTile title="About" subtitle="Know more about the app">
      <InformationCircle />
    </ListTile>
  </a>

  <button on:click={modal.toggle}>
    <ListTile title="Delete all data" subtitle="Clear all data">
      <XCircle />
    </ListTile>
  </button>
</main>
