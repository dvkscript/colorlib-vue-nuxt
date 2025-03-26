<script setup lang="ts">
const { links } = defineProps<{
  links: {
    href: string;
    label: string;
  }[];
}>();
</script>
<template>
  <nav>
    <ul class="flex flex-col gap-y-[13px]">
      <li v-for="link in links" :key="link.label">
        <NuxtLink
            :to="link.href"
            class="opacity-70"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
