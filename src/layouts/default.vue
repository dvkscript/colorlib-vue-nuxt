<script setup>
import Logo from "src/components/Logo.vue";
import Navbar from "../components/Navbar.vue";
import { ToolbarRoot } from "reka-ui";
import { AlignJustify } from "lucide-vue-next";
import { cn } from "src/libs/utils";
import Footer from "src/components/Footer.vue";

const isOpen = ref(false);
</script>

<template>
  <ToolbarRoot>
    <header class="bg-secondary absolute top-0 px-[15px] lg:px-[53px] w-full z-50" data-theme="dark">
      <div class="absolute px-[inherit] inset-0 -z-10 md:hidden">
        <div class="bg-[#4c4c4c] h-full w-full" />
      </div>

      <div class="max-w-[1880px] mx-auto w-full h-full py-[25px] md:py-[35px]">
        <div class="flex items-center justify-start w-full gap-x-2">
          <Logo class="mr-auto" />
          <Navbar root-class="hidden md:block" />
          <div>
            <div class="hidden md:block">
              <button class="px-[15px] py-2 w-[130px]">Sign in</button>
              <button class="px-[15px] py-2 border-2 w-[130px]">Join us</button>
            </div>
            <ToolbarButton class="inline-block md:hidden uppercase font-bold bg-tertiary px-[10px] py-[7px] rounded-sm"
              @click="isOpen = !isOpen">
              <span class="inline-block align-middle"> menu </span>
              <span class="inline-block align-middle">
                <AlignJustify size="18" />
              </span>
            </ToolbarButton>
          </div>
        </div>
      </div>
      <div :class="cn(
                'overflow-hidden transition-[height] md:h-0',
                !isOpen ? 'h-0' : 'h-[300px]'
              )
                ">
        <div class="bg-[#22242b]">
          <ul class="flex flex-col">
            <li class="border-b-1 border-b-[#111]">
              <button class="px-5 py-2.5">Sign in</button>
            </li>
            <li class="border-b-1 border-b-[#111]">
              <button class="px-5 py-2.5">Join us</button>
            </li>
          </ul>
          <Navbar class="flex-col" />
        </div>
      </div>
    </header>
    <NuxtPage />
    <Footer />
  </ToolbarRoot>
</template>
