<script>
  import SkillIndicator from "./SkillIndicator.svelte";

  let { skills, experiences } = $props();
  let expanded = $state(false);
</script>

{#if expanded}
  <div
    class="absolute w-screen h-screen z-20 backdrop-blur"
    onclick={() => (expanded = false)}
    aria-hidden="true"
  >
    <div
      class="absolute flex justify-around gap-5 bottom-12 left-12 bg-slate-600 rounded-3xl p-12"
    >
      <div class="overflow-y-auto flex-col h-fit bg-gray-700 p-5 rounded-3xl">
        <h1 class="font-poppins text-5xl text-white font-bold mb-4">Skills:</h1>
        <h2 class="font-poppins text-3xl text-white font-bold mb-4">
          Languages:
        </h2>
        {#each skills.languages as language}
          <SkillIndicator {...language} />
        {/each}
        <h2 class="font-poppins text-3xl text-white font-bold mb-4 mt-4">
          Other:
        </h2>
        {#each skills.others as other}
          <SkillIndicator {...other} />
        {/each}
      </div>
      <div class="overflow-y-auto flex-col h-fit bg-gray-700 p-5 rounded-3xl">
        <h1 class="font-poppins text-5xl text-white font-bold mb-4">
          Experience:
        </h1>
        {#each experiences as experience}
          <div class="flex flex-row gap-5">
            {#if experience.image}
              <img
                src={experience.image}
                alt={experience.title}
                class="w-20 h-20 rounded-full"
              />
            {/if}
            <div class="flex flex-col mb-4">
              <h2 class="font-poppins text-3xl text-white font-bold">
                {experience.title}
              </h2>
              <p class="font-poppins text-white">{experience.description}</p>
            </div>
          </div>
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
