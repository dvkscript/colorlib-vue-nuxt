<template>
    <main>
        <section class="h-[410px] relative">
            <div class="absolute inset-0 -z-10">
                <NuxtImg src="/images/hero-bg.jpg.webp" class="object-cover h-full w-full object-bottom"></NuxtImg>
            </div>
            <div class="w-full h-full bg-black/50 pt-[152px] px-[15px]">
                <Container :maxWidth="1280">
                    <div class="pb-[31px] text-white">
                        <FormSearch :isResult="true" />
                    </div>
                </Container>
            </div>
        </section>
        <SectionWrap>
            <Container class="px-[20px]">
                <div class="max-w-[540px] md:max-w-[720px] lg:max-w-full">
                    <div class="flex flex-col lg:flex-row-reverse gap-y-[40px] gap-x-[30px]">
                        <div class="flex-1">
                            <NuxtImg src="/images/about-4.webp" class="w-full h-auto" />
                        </div>
                        <div class="flex-1">
                            <SectionSubtitle>
                                A young team that is here to help you get your dream home.
                            </SectionSubtitle>
                            <div class="h-[30px]" />
                            <SectionDescription class="opacity-70">
                                Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa.
                                Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti
                                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse
                                potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare
                                non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend
                                ipsum. Sed non blandit tellus.
                            </SectionDescription>
                            <div class="h-[25px]" />
                            <NuxtLink to="#!"
                                class="text-center underline decoration-accent text-accent font-bold text-lg">
                                Find out more
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </Container>
        </SectionWrap>

        <SectionWrap class="mx-[16px] lg:mx-[54px] relative text-white">
            <div class="absolute inset-0 -z-10">
                <NuxtImg src="/images/sell-bg.webp" class="object-cover h-full w-full"></NuxtImg>
            </div>
            <Container class="px-[20px]">
                <SectionTitle>
                    Selling your place is easy
                </SectionTitle>
                <div class="flex flex-col items-center">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-12">
                        <div class="text-center">
                            <div
                                class="bg-accent rounded-full size-[71px] flex items-center justify-center mx-auto mb-6">
                                <span class="text-white font-bold text-2xl">01.</span>
                            </div>
                            <h3 class="text-3xl font-bold mb-4">Search</h3>
                            <SectionDescription class="opacity-70">Donec eget efficitur ex. Donec eget dolor vitae eros
                                feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
                                eget tempus. Class aptent taciti sociosqu.</SectionDescription>
                        </div>
                        <div class="text-center">
                            <div
                                class="bg-accent rounded-full size-[71px] flex items-center justify-center mx-auto mb-6">
                                <span class="text-white font-bold text-2xl">02.</span>
                            </div>
                            <h3 class="text-3xl font-bold mb-4">Compare</h3>
                            <SectionDescription class="opacity-70">Donec eget efficitur ex. Donec eget dolor vitae eros
                                feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
                                eget tempus. Class aptent taciti sociosqu.</SectionDescription>
                        </div>
                        <div class="text-center">
                            <div
                                class="bg-accent rounded-full size-[71px] flex items-center justify-center mx-auto mb-6">
                                <span class="text-white font-bold text-2xl">03.</span>
                            </div>
                            <h3 class="text-3xl font-bold mb-4">Connect</h3>
                            <SectionDescription class="opacity-70">Donec eget efficitur ex. Donec eget dolor vitae eros
                                feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim
                                eget tempus. Class aptent taciti sociosqu.</SectionDescription>
                        </div>
                    </div>
                    <button
                        class="bg-accent text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-accent/90 transition-colors">
                        Contact an agent now
                    </button>
                </div>
            </Container>
        </SectionWrap>

        <SectionWrap>
            <Container class="px-[20px]">
                <SectionTitle>
                    The Agents
                </SectionTitle>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-12">
                    <div class="text-center">
                        <NuxtImg src="/images/agents/1.jpg.webp" class="w-full h-auto mb-6" />
                        <h3 class="text-2xl font-bold mb-4">Christinne James</h3>
                        <p class="text-gray-600 mb-6">Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum.</p>
                        <NuxtLink to="#!" class="text-accent font-bold transition-colors underline decoration-accent">Contact the agent</NuxtLink>
                    </div>
                    <div class="text-center">
                        <NuxtImg src="/images/agents/2.jpg.webp" class="w-full h-auto mb-6" />
                        <h3 class="text-2xl font-bold mb-4">Davina Brown</h3>
                        <p class="text-gray-600 mb-6">Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum.</p>
                        <NuxtLink to="#!" class="text-accent font-bold transition-colors underline decoration-accent">Contact the agent</NuxtLink>
                    </div>
                    <div class="text-center">
                        <NuxtImg src="/images/agents/3.jpg.webp" class="w-full h-auto mb-6" />
                        <h3 class="text-2xl font-bold mb-4">Michael Smith</h3>
                        <p class="text-gray-600 mb-6">Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum.</p>
                        <NuxtLink to="#!" class="text-accent font-bold transition-colors underline decoration-accent">Contact the agent</NuxtLink>
                    </div>
                </div>
            </Container>
        </SectionWrap>
    </main>
</template>