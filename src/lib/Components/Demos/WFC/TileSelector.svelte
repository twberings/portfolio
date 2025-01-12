<script lang="ts">
  let { selected = $bindable(), collapse } = $props();

  let onclick = (x: number, y: number, tile: string) => {
    return () => {
      selected = null;
      collapse(x, y, tile)();
    };
  };
</script>

{#if selected != null}
  <div
    class="absolute bg-center top-1/4 bg-gray-700 flex flex-row gap-3 p-4 rounded-xl"
  >
    {#each selected.images as image}
      <button onclick={onclick(selected.x, selected.y, image)}>
        <img
          src={"/demo/wfc/tilesets/traffic_lights/" + image + ".bmp"}
          style="image-rendering: pixelated;
                 image-rendering: -moz-crisp-edges;
                 image-rendering: crisp-edges;"
          alt="Tile"
          class="w-12 h-12"
        />
      </button>
    {/each}
  </div>
{/if}
