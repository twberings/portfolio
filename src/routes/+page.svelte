<script>
  import MainPanel from "$lib/Components/MainPanel.svelte";
  import ProjectCard from "$lib/Components/ProjectCard.svelte";
  import ProjectList from "$lib/Components/ProjectList.svelte";
  import InfoPanel from "$lib/Components/InfoPanel.svelte";

  const skills = {
    languages: [
      {
        progress: 0.9,
        text: "C++",
        color: "#0984CF",
      },
      {
        progress: 0.9,
        text: "C",
        color: "#080808",
      },
      {
        progress: 0.5,
        text: "Rust",
        color: "#DEA584",
      },
      {
        progress: 0.15,
        text: "Svelte",
        color: "#FF3E00",
      },
      {
        progress: 0.15,
        text: "JavaScript/TypeScript",
        color: "#F7E025",
      },
    ],
    others: [
      {
        progress: 0.65,
        text: "Object Oriented Programming",
        color: "#9057FF",
      },
      {
        progress: 0.8,
        text: "Embedded Programming",
        color: "#209BA1",
      },
      {
        progress: 0.5,
        text: "Test Driven Development",
        color: "#AB5F02",
      },
    ],
  };
  const experiences = [
    {
      title: "Fontys University of Applied Sciences",
      description:
        "I am currently studying Computer Science at Fontys University of Applied Sciences.",
      image: "/images/fontys.png",
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
    },
  ];
  let project = $state({});
</script>

<InfoPanel {skills} {experiences} />
<div class="flex">
  <MainPanel>
    {#snippet projectHighlight()}
      {#if Object.keys(project).length > 0}
        <ProjectCard {project} />
      {/if}
    {/snippet}
  </MainPanel>
  <ProjectList {projects} bind:currentProject={project} />
</div>
