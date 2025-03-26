<script setup lang="ts">
import { cn } from 'src/libs/utils';
    const { ...props } = defineProps<{
        class?: string
    }>()
</script>

<template>
    <section
        :class="cn('py-[110px]', props.class)"
    >
        <slot></slot>
    </section>
</template>