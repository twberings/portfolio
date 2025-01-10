<script lang="ts">
  import Tile from "./Tile.svelte";
  import TileSelector from "./TileSelector.svelte";

  let { grid, finishing, collapse } = $props();
  let selected: any = $state(null);

  $effect(() => {
    if (finishing) {
      selected = null;
    }
  });

  $effect(() => {
    if (selected != null && selected.images.length == 1) {
      $inspect(selected);
    }
  });
</script>

<div class="p-5 rounded-xl bg-gray-700">
  {#each grid as row, y}
    <div class="grid grid-cols-4">
      {#each row as cell, x}
        <Tile images={cell} {x} {y} {finishing} bind:selected />
      {/each}
    </div>
  {/each}
</div>
<TileSelector {collapse} bind:selected />
