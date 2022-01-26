<script>
  import 'virtual:windi.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Modal from '$lib/components/Modal.svelte';
  import modal from '$lib/stores/modal';
  import darkMode from '$lib/stores/darkMode';
  import Appbar from '$lib/components/Appbar.svelte';
</script>

<div class="flex flex-col h-screen w-screen {$darkMode ? 'dark' : ''}">
  <div class="h-full overflow-scroll dark:bg-dark-400">
    <slot />
  </div>

  <Navbar />

  {#if $modal}
    <Modal />
  {/if}
</div>
