<script setup lang="ts">
    const props = defineProps<{
        class?: string;
    }>();
</script>
<template>
     <p :class="['text-base/8 text-[15px]', props.class]">
          <slot></slot>
     </p>
</template>