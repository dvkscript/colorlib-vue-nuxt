<script setup lang="ts">
import Container from "./Container.vue";
import FooterNavbar from "./FooterNavbar.vue";
import Logo from "./Logo.vue";
</script>

<template>
  <footer class="bg-tertiary-alt pt-[100px]">
    <Container class="px-2.5">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-4/12 flex">
          <div>
            <div class="mb-10">
              <Logo :height="81" :width="252" />
            </div>
            <p class="pr-[15px] mb-[35px]">
              Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
              tristique id vitae massa. Proin vulputate cong ue rutrum. Fusce
              lobortis a enim eget tempus.
            </p>
            <NuxtLink
              to="#!"
              class="py-[21px] px-11 uppercase bg-accent inline-block"
            >
              we are hiring
            </NuxtLink>
          </div>
          <div class="px-7 xl:px-16 h-full hidden lg:block">
            <div class="bg-[#45484e] w-0.5 h-full" />
          </div>
        </div>
        <div class="pt-16 w-full sm:w-1/2 md:flex-1">
          <h2 class="text-lg font-bold mb-[33px]">Company</h2>
          <FooterNavbar
            :links="[
              { href: '#!', label: 'About us' },
              { href: '#!', label: 'Services' },
              { href: '#!', label: 'Clients' },
              { href: '#!', label: 'Testimonials' },
              { href: '#!', label: 'Carrers' },
            ]"
          />
        </div>
        <div class="pt-16 w-full sm:w-1/2 md:flex-1">
          <h2 class="text-lg font-bold mb-[33px]">For Buyers</h2>
          <FooterNavbar
            :links="[
              { href: '#!', label: 'Buy with us' },
              { href: '#!', label: 'Papers' },
              { href: '#!', label: 'Clients' },
              { href: '#!', label: 'Testimonials' },
              { href: '#!', label: 'Homes' },
            ]"
          />
        </div>
        <div class="pt-16 w-full sm:w-1/2 md:flex-1">
          <h2 class="text-lg font-bold mb-[33px]">For Sellers</h2>
          <FooterNavbar
            :links="[
              { href: '#!', label: 'Seel With us' },
              { href: '#!', label: 'What do You Need' },
              { href: '#!', label: 'Clients' },
              { href: '#!', label: 'Testimonials' },
              { href: '#!', label: 'Guideline' },
            ]"
          />
        </div>
        <div class="pt-16 w-full sm:w-1/2 md:flex-1">
          <h2 class="text-lg font-bold mb-[33px]">For Sellers</h2>
          <FooterNavbar
            :links="[
              { href: '#!', label: 'Rent with us' },
              { href: '#!', label: 'Guidelines' },
              { href: '#!', label: 'Apartments' },
              { href: '#!', label: 'Flats' },
              { href: '#!', label: 'Houses' },
            ]"
          />
        </div>
      </div>
      <div class="h-[50px] mt-[60px]"></div>
    </Container>
  </footer>
</template>
