<script setup lang="ts">

const properties = [
  {
    id: 1,
    image: "/images/property-1.webp",
    price: 469000,
    status: "New",
    type: "3 Bedrooms Townhouse",
    description: "Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora.",
  },
  {
    id: 2,
    image: "/images/property-2.webp",
    price: 399000,
    status: "Offer",
    type: "3 Bedrooms Townhouse",
    description: "Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora.",
  },
  {
    id: 3,
    image: "/images/property-3.webp",
    price: 599000,
    status: "New",
    type: "3 Bedrooms Townhouse",
    description: "Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora.",
  },
]
</script>

<template>
  <main>
    <section class="h-screen min-h-[824px] relative flex justify-center items-center">
      <div class="absolute inset-0 -z-10">
        <NuxtImg src="/images/hero-bg.jpg.webp" class="object-cover h-full w-full"></NuxtImg>
      </div>
      <Container class="px-[22px]">
        <div class="bg-secondary-alt pt-[27px] pb-[31px] px-[48px]">
          <FormSearch />
        </div>
      </Container>
    </section>

    <SectionWrap>
      <Container class="px-[20px]">
        <div class="max-w-[540px] md:max-w-[720px] lg:max-w-full">
          <SectionTitle> Sell Faster. Save Thousands.</SectionTitle>
          <div class="h-[65px]" />
          <div>
            <div class="flex flex-col lg:flex-row-reverse gap-y-[40px] gap-x-[30px]">
              <div class="flex-1">
                <NuxtImg src="/images/about-1.webp" class="w-full h-auto" />
              </div>
              <div class="flex-1">
                <SectionSubtitle>
                  We charge 2% total. No hidden fees or upfront costs.
                </SectionSubtitle>
                <div class="h-[30px]" />
                <SectionDescription class="opacity-70">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Suspendisse potenti. Ut gravida mattis magna, non varius lorem
                  sodales nec. In libero orci, ornare non nisl a, auctor euismod
                  purus. Morbi pretium interdum vestibulum. Fusce nec eleifend
                  ipsum. Sed non blandit tellus.
                </SectionDescription>
                <div class="h-[25px]" />
                <NuxtLink to="#!" class="text-center underline decoration-accent text-accent font-bold text-lg">
                  Find out more
                </NuxtLink>
              </div>
            </div>
            <div class="h-[98px]" />
            <div class="flex flex-col lg:flex-row gap-y-[40px] gap-x-[30px]">
              <div class="flex-1">
                <NuxtImg src="/images/about-2.webp" class="w-full h-auto" />
              </div>
              <div class="flex-1">
                <SectionSubtitle>
                  How Much Can You Save? We work for you, not commission.
                </SectionSubtitle>
                <div class="h-[30px]" />
                <SectionDescription class="opacity-70">
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Suspendisse potenti. Ut gravida mattis magna, non varius lorem
                  sodales nec. In libero orci, ornare non nisl a, auctor euismod
                  purus. Morbi pretium interdum vestibulum. Fusce nec eleifend
                  ipsum. Sed non blandit tellus.
                </SectionDescription>
                <div class="h-[25px]" />
                <NuxtLink to="#!" class="text-center underline decoration-accent text-accent font-bold text-lg">
                  Find out more
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrap>

    <SectionWrap class="mx-[15px] md:mx-[54px] bg-tertiary-alt">
      <Container class="px-[20px]">
        <div class="max-w-[540px] md:max-w-[720px] lg:max-w-full">
          <SectionTitle>
            See If You Qualify for a Mortgage
          </SectionTitle>
          <SectionDescription class="text-center mt-8 mx-auto pt-[25px] pb-[10px] px-[30px]">
            Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate
            congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem
            sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum.
            Fusce nec eleifend ipsum. Sed non blandit tellus.
          </SectionDescription>
          <div class="inline-flex flex-col lg:flex-row gap-[30px] mt-12 mx-auto text-black w-full">
            <input type="text" placeholder="Your income"
              class="w-full inline-block bg-white border outline-none px-[25px] py-[10px] h-[61px]" />
            <input type="text" placeholder="Amount needed"
              class="w-full inline-block bg-white border outline-none px-[25px] py-[10px] h-[61px]" />
            <button class="bg-accent w-fit mx-auto text-white py-[21px] px-11 h-[61px]">
              SUBMIT
            </button>
          </div>
        </div>
      </Container>
    </SectionWrap>

    <SectionWrap>
      <Container class="px-[20px]">
        <div class="max-w-[540px] md:max-w-[720px] lg:max-w-full">
          <SectionTitle>Recently Add Homes</SectionTitle>
          <div class="h-[65px]" />
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <div v-for="property in properties" :key="property.id" class="bg-white overflow-hidden">
              <div class="relative">
                <NuxtImg :src="property.image" class="w-full h-auto object-cover" />
                <div class="absolute top-0 left-0">
                  <span
                    :class="[property.status === 'New' ? 'bg-red-500' : 'bg-yellow-500', 'min-w-[87px] text-center inline-block px-[13px] py-[10px] text-white text-lg font-semibold']">
                    {{ property.status }}
                  </span>
                </div>
              </div>
              <div class="mt-[35px]">
                <div class="text-3xl font-bold mb-2.5">${{ property.price.toLocaleString() }}</div>
                <div class="font-semibold text-lg mb-[25px]">{{ property.type }}</div>
                <p class="text-gray-600 mb-6 text-base/8">{{ property.description }}</p>
                <NuxtLink to="#!" class="text-left underline decoration-accent text-accent font-bold text-lg block">
                  Find out more
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrap>

    <SectionWrap>
      <Container class="px-[20px]">
        <div class="max-w-[540px] md:max-w-[720px] lg:max-w-full">
          <div class="flex flex-col lg:flex-row-reverse gap-y-[40px] gap-x-[30px]">
            <div class="flex-1">
              <NuxtImg src="/images/about-3.webp" class="w-full h-auto" />
            </div>
            <div class="flex-1">
              <h2 class="xl:text-7xl lg:text-[65px] md:text-[55px] sm:text-[45px] text-[38px] font-bold text-left">
                Seller Success Stories
              </h2>
              <div class="h-[30px]" />
              <SectionDescription class="opacity-70">
                Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                lobortis a enim eget tempus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Suspendisse potenti. Ut gravida mattis magna, non varius lorem
                sodales nec. In libero orci, ornare non nisl a, auctor euismod
                purus. Morbi pretium interdum vestibulum. Fusce nec eleifend
                ipsum. Sed non blandit tellus.
              </SectionDescription>
              <div class="h-[25px]" />
              <NuxtLink to="#!" class="text-center underline decoration-accent text-accent font-bold text-lg">
                Find out more
              </NuxtLink>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrap>
  </main>
</template>