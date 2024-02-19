<script setup lang="ts">
import { MENU } from "./menu.data";
</script>

<template>
  <div>
    <NuxtLink
      v-for="item in MENU"
      :key="item.name"
      class="flex items-center py-1 px-3 rounded-lg w-full hover: shadow hover:bg-gray-700 transition-all mb-2"
      :to="item.url"
    >
      <Icon :name="item.icon" class="mr-3" />
      <span>{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>
