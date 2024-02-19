<template>
  <section class="grid" style="grid-template-columns: 1fr 6fr; min-height: 100vh;">
    <div class="px-5 py-8 bg-gray-700 h-full">
      <LayoutSidebar />
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>
