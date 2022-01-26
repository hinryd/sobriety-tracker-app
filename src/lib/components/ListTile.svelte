<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="flex h-20 rounded-md shadow-md bg-gray-50 items-center">
  <div class="flex justify-center items-center w-18 h-18"><slot /></div>
  <div class="flex flex-col items-start">
    <p class="font-bold">{title}</p>
    <p>{subtitle}</p>
  </div>
</div>
