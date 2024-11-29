<script>
  import SidePanel from "$lib/SidePanel.svelte";
  import MainPanel from "$lib/MainPanel.svelte";
  import ProjectCard from "$lib/ProjectCard.svelte";
  import ProjectList from "$lib/ProjectList.svelte";

  const skills = [
    {
      progress: 0.9,
      text: "C++",
      color: "#0984CF",
    },

    {
      progress: 0.5,
      text: "Rust",
      color: "#DEA584",
    },
    {
      progress: 0.8,
      text: "Arduino framework",
      color: "#209BA1",
    },
    {
      progress: 0.15,
      text: "Svelte",
      color: "#FF3E00",
    },
  ];
  const projects = [
    {
      title: "Wave function collapse",
      description:
        "This is a my implementation of the wave function collapse algorithm. It is an adaptable random generation algorithm written in C++, that can be compiled to WebAssemble to run in a browser.",
      skills: ["C++", "OOP", "WebAssembly"],
      code: "https://www.github.com/twberings/wfc",
      demo: "/demo/wfc",
    },
    {
      title: "Portfolio website",
      description:
        "The website you are currently viewing. It is a static site generated with SvelteKit and TailwindCSS.",
      skills: ["Svelte", "TailwindCSS", "SvelteKit"],
      code: "https://www.github.com/twberings/portfolio",
    }
  ];
  let project = $state({});
</script>

<div class="flex">
  <MainPanel>
    {#snippet projectHighlight()}
      {#if Object.keys(project).length > 0}
        <ProjectCard {project} />
      {/if}
    {/snippet}
  </MainPanel>
  <SidePanel {skills} />
  <ProjectList {projects} bind:currentProject={project} />
</div>
