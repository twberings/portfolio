<script>
  import { fly } from "svelte/transition";
  import SkillIndicator from "./SkillIndicator.svelte";
  import HamburgerButton from "./HamburgerButton.svelte";

  let { skills } = $props();
  let visible = $state(false);
</script>

<HamburgerButton
  colorAfter="white"
  colorBefore="white"
  bind:enabled={visible}
/>

{#if visible}
  <div
    class="bg-gray-900 absolute top-0 h-screen w-96 flex flex-col justify-center text-center p-12 border-r-2"
    transition:fly={{ x: -500, duration: 600 }}
  >
    <h1 class="font-poppins text-4xl font-bold text-sky-50 underline">
      Skills
    </h1>
    {#each skills as skill}
      <SkillIndicator {...skill} />
    {/each}
  </div>
{/if}
