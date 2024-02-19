<script setup lang="ts">
const title = ref('CRM systems')

useSeoMeta({
  title,
  description: () => `description: ${title.value}`
})
</script>

<template>
  <div>
    Home page
  </div>
</template>
