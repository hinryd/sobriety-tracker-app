<script lang="ts">
  export let title: string;
  export let activeBackButton: boolean = false;

  function goBack(): void {
    window.history.back();
  }
</script>

<header
  class="sticky top-0 h-16 w-screen flex justify-between items-center px-6 shadow-lg bg-white"
>
  {#if activeBackButton}
    <button on:click|preventDefault={goBack}
      ><svg
        class="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        /></svg
      ></button
    >
  {:else}
    <div class="h-7 w-7" />
  {/if}
  <h1
    class="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
  >
    {title}
  </h1>
  <slot><div class="h-7 w-7" /></slot>
</header>
