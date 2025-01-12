<script>
  import { scale } from "svelte/transition";
  let { images, x, y, finishing, selected = $bindable() } = $props();
</script>

{#if images.length > 1}
  {#if !finishing}
    {#if selected != null && selected.images === images}
      <button
        class="w-28 h-28 font-poppins font-bold bg-gray-600 border-2 border-blue-600 text-center content-center text-white text-xl"
        aria-hidden="true"
        onclick={() => {
          selected = null;
        }}
      >
        {images.length}
      </button>
    {:else}
      <button
        class="w-28 h-28 font-poppins font-bold text-center text-xl content-center bg-gray-800 text-white hover:bg-gray-700"
        aria-hidden="true"
        onclick={() => {
          selected = { images, x, y };
        }}
      >
        {images.length}
      </button>
    {/if}
  {:else}
    <div
      class="w-12 h-12 font-poppins font-bold text-center text-xl content-center bg-gray-800 text-white"
    >
      ...
    </div>
  {/if}
{:else if images.length === 1}
  <img
    src={"/demo/wfc/tilesets/traffic_lights/" + images[0] + ".bmp"}
    alt="Tile"
    style="image-rendering: pixelated;
           image-rendering: -moz-crisp-edges;
           image-rendering: crisp-edges;"
    class="w-28 h-28"
    in:scale={{ duration: 500 }}
  />
{/if}
