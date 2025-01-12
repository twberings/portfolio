<script lang="ts">
  import Grid from "$lib/Components/Demos/WFC/Grid.svelte";
  import initModule from "$lib/Demos/WFC/app";
  import { onMount } from "svelte";
  let grid = $state({});
  let finishing = $state(false);
  let Module: any;

  onMount(async () => {
    Module = await initModule();
    const map = Module.createImage(6, 6, Math.floor(Math.random() * 1000000));
    grid = JSON.parse(map);
  });

  $effect(() => {
    if (finishing) {
      while (!Module.isSolved()) {
        const map = Module.nextStep();
        grid = JSON.parse(map);
      }
    }
  });

  let collapse = (x: number, y: number, tile: string) => {
    return () => {
      const map = Module.collapseTo(x, y, tile);
      grid = JSON.parse(map);
    };
  };

  let reset = () => {
    const map = Module.reset(6, 6, Math.floor(Math.random() * 1000000));
    grid = JSON.parse(map);
    finishing = false;
  };
</script>

<div
  class="flex flex-col w-screen h-screen text-center justify-center items-center"
>
  <Grid {grid} {finishing} {collapse} />
  <div class="flex gap-5 justify-center content-center items-center mt-5">
    <button
      class="bg-gray-600 font-poppins font-bold text-2xl text-white pt-1 pb-1 pl-3 pr-3 rounded-xl hover:bg-gray-500"
      onclick={reset}>Reset</button
    >
    <button
      class="bg-gray-600 font-poppins font-bold text-2xl text-white pt-1 pb-1 pl-3 pr-3 rounded-xl hover:bg-gray-500"
      onclick={() => (finishing = true)}>Finish</button
    >
  </div>
</div>
