<script>
  let { colorBefore, colorAfter, enabled = $bindable() } = $props();
  function onclick() {
    enabled = !enabled;
  }
</script>

<button
  {onclick}
  class="absolute top-0 p-4 z-30"
  aria-label={enabled ? "open" : "close"}
>
  <svg width="40" height="40" role="button" xmlns="http://www.w3.org/2000/svg">
    <line
      x1={enabled ? 5 : 0}
      y1={enabled ? 35 : 5}
      x2={enabled ? 35 : 40}
      y2="5"
      stroke={enabled ? colorAfter : colorBefore}
      stroke-width="5"
    />
    <line
      x1="5"
      y1="20"
      x2="35"
      y2="20"
      stroke={colorBefore}
      stroke-width="4"
      opacity={enabled ? 0 : 1}
    />
    <line
      x1={enabled ? 5 : 0}
      y1={enabled ? 5 : 35}
      x2={enabled ? 35 : 40}
      y2="35"
      stroke={enabled ? colorAfter : colorBefore}
      stroke-width="5"
    />
  </svg>
</button>
