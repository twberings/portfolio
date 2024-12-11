<script>
  let { projects, currentProject = $bindable() } = $props();
  function resetCurrentProject() {
    currentProject = {};
  }
</script>

<div class="w-1/2 relative">
  <div
    class="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none"
  ></div>
  <div
    class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none"
  ></div>
  <div class="h-screen overflow-y-auto flex flex-col gap-5 p-10">
    <h1 class="mt-16 font-poppins text-4xl font-bold text-sky-50 underline">
      My Work:
    </h1>
    {#each projects as project}
      {#if project.title === currentProject?.title}
        <button
          class="h-fit p-10 bg-gray-600 rounded-xl border-2 border-blue-600"
          onclick={resetCurrentProject}
        >
          <h1 class="font-poppins text-white font-semibold text-2xl">
            {project.title}
          </h1>
          <p class="font-poppins italic text-gray-200">
            {project.skills.join(" · ")}
          </p>
        </button>
      {:else}
        <button
          class="h-fit p-10 bg-gray-800 rounded-xl"
          onclick={(currentProject = project)}
        >
          <h1 class="font-poppins text-white font-semibold text-2xl">
            {project.title}
          </h1>
          <p class="font-poppins italic text-gray-200">
            {project.skills.join(" · ")}
          </p>
        </button>
      {/if}
    {/each}
  </div>
</div>
