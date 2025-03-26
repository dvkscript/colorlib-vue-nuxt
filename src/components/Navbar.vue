<script setup lang="ts">
import { cn } from 'src/libs/utils';

const { ...props } = defineProps<{
    class?: string;
    rootClass?: string;
}>();

const url = useRequestURL()

const links = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/#!",
    },
    {
        label: "Services",
        href: "/#!",
    },
    {
        label: "Contact",
        href: "/#!",
    },
]
</script>
<template>
    <nav :class="props.rootClass">
        <ul :class="cn('flex gap-x-[20px] xl:gap-x-[45px]', props.class)">
            <li v-for="link in links" :key="link.label" class="border-b-1 border-b-[#111] md:border-b-0">
                <NuxtLink :to="link.href"
                    :class='cn(
                        "transition-colors inline-block no-underline",
                        "md:underline md:underline-offset-8 md:decoration-2",
                        url.pathname.startsWith(link.href) ? "md:decoration-accent" : "md:decoration-[transparent] md:hover:decoration-accent",
                        "px-5 py-2.5 md:py-1 md:px-0"
                    )'
                >
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>