<template>
  <section class="grid" style="grid-template-columns: 1fr 6fr">
    <div class="p-6 bg-gray-800 h-full">
      <LayoutSidebar />
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>
