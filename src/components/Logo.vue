<script setup lang="ts">
const { width, height, ...props } = defineProps<{
  width?: number;
  height?: number;
}>();
</script>
<template>
  <NuxtImg
     src="/images/logo.webp" 
     alt="Logo" 
     class="object-cover"
     :height="height || '43'"
     :width="width || '137'"
  />
</template>
