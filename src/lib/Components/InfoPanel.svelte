<script>
  import SkillIndicator from "./SkillIndicator.svelte";

  let { skills } = $props();
  let expanded = $state(false);
</script>

{#if expanded}
  <div
    class="absolute w-screen h-screen z-20 backdrop-blur"
    onclick={() => (expanded = false)}
    aria-hidden="true"
  >
    <div
      class="absolute flex left-32 right-32 top-32 bottom-32 bg-slate-600 rounded-3xl p-12"
    >
      <div class="overflow-y-auto flex-col">
        <h1 class="font-poppins text-5xl text-white font-bold mb-4">Skills:</h1>
        {#each skills as skill}
          <SkillIndicator {...skill} />
        {/each}
      </div>
    </div>
  </div>
{:else}
  <button
    class="absolute bg-slate-600 rounded-full text-4xl text-white font-poppins font-bold underline border-white border-2 w-20 h-20 bottom-10 left-10"
    onclick={() => (expanded = true)}>?</button
  >
{/if}
