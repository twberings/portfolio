<script>
  let { projectHighlight } = $props();
</script>

<div class="h-screen bg-slate-800 w-1/2 flex flex-col justify-center p-12">
  <h1 class="font-poppins text-5xl text-white font-bold mb-4">Thijs Berings</h1>
  <h2 class="font-poppins text-2xl text-gray-500 mb-6">Software developer</h2>
  <p class="font-poppins text-gray-300 mb-8">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit modi neque
    porro quas, fuga in expedita consequuntur dolorem voluptatem similique, nemo
    inventore facere! Ducimus molestias unde impedit eveniet modi. Perspiciatis.
  </p>
  {@render projectHighlight?.()}
</div>
