<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="flex h-16 rounded-xl shadow-md bg-gray-100 items-center">
  <div class="flex justify-center items-center w-16 h-16"><slot /></div>
  <div class="flex flex-col items-start">
    <p class="font-bold">{title}</p>
    <p class="">{subtitle}</p>
  </div>
</div>
