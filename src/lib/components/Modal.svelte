<script>
  import modal from '$lib/stores/modal';
</script>

<div class="absolute bg-black h-screen w-screen bg-opacity-80">
  <div class="p-8 bg-white rounded-lg shadow-2xl m-auto">
    <h2 class="text-lg font-bold">Are you sure you want to do that?</h2>

    <p class="mt-2 text-sm text-gray-500">
      Doing that could have cause some issues elsewhere, are you 100% sure it's OK?
    </p>

    <div class="flex items-center justify-end mt-8 text-xs">
      <button
        type="button"
        class="px-4 py-2 font-medium text-green-600 rounded bg-green-50"
        on:click={modal.toggle}>Yes, I'm sure</button
      >
      <button
        type="button"
        class="px-4 py-2 ml-2 font-medium text-gray-600 rounded bg-gray-50"
        on:click={modal.toggle}>No, go back</button
      >
    </div>
  </div>
</div>
