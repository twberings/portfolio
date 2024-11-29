<script>
  let { children } = $props();
</script>

<a href="/" class="absolute top-0 left-0 p-4 z-30" aria-label="back">
  <svg
    class="w-[30px] h-[30px] text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
    />
  </svg>
</a>

{@render children()}
