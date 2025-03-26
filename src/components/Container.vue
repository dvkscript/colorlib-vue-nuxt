<script setup lang="ts">
import { cn } from 'src/libs/utils';

const { maxWidth,...props } = defineProps<{
  maxWidth?: number;
  class?: string;
}>();
</script>

<template>
  <div
    :class="['container w-full mx-auto', props.class, maxWidth && `max-w-[${maxWidth.toString()}px]`]"
  >
    <slot></slot>
  </div>
</template>
