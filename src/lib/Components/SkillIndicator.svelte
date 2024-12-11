<script>
  import { fly } from "svelte/transition";
  import { load } from "../Utils/LoadTransition";
  let { progress, text, color } = $props();
  let radius = $state(10);
  let circumference = $derived(2 * Math.PI * radius);
</script>

<div class="flex items-center gap-2">
  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="15"
      cy="15"
      r={radius}
      fill="none"
      stroke="#ffffff"
      stroke-width="5"
    />
    <circle
      cx="15"
      cy="15"
      r={radius}
      fill="none"
      stroke={color}
      stroke-width="7"
      stroke-dasharray={circumference}
      stroke-dashoffset={circumference * (1 - progress)}
      transform="rotate(-90 15 15)"
      in:load|global={{ delay: 600 }}
    />
  </svg>
  <p class="font-poppins text-2xl text-sky-50 font-semibold overflow-hidden" in:fly|global={{ x: -15 }}>{text}</p>
</div>

<style>
</style>
