<script>
  let { project } = $props();
</script>

<div class="h-fit p-10 bg-gray-700 rounded-xl">
  <h1 class="font-poppins text-3xl font-bold text-white">{project.title}</h1>
  <div class="flex flex-row gap-2 mb-2 mt-1">
    {#each project.skills as skill}
      <p class="bg-sky-300 rounded-xl pl-2 pr-2 text-sky-800 italic">{skill}</p>
    {/each}
  </div>
  <p class="font-poppins text-gray-300">{project.description}</p>
  <div class="pt-1 flex gap-4">
    {#if project.code}
      <a href={project.code} aria-label="code">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
          />
        </svg>
      </a>
    {/if}
    {#if project.demo}
      <a href={project.demo} aria-label="demo">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    {/if}
  </div>
</div>
