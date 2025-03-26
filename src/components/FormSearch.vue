<script setup lang="ts">
const { isResult } = defineProps<{
    isResult?: boolean;
}>();
</script>
<template>
    <div>
        <div class="flex gap-x-[5px] lg:gap-x-[15px] flex-wrap">
            <div class="pb-[15px] overflow-hidden relative">
                <input type="radio" hidden id="buy" class="peer" name="search" checked />
                <label for="buy"
                    class="py-[11px] px-[10px] peer-checked:px-[15px] lg:peer-checked:px-[30px] peer-checked:bg-accent transition-[padding] font-bold block">
                    Buy
                </label>
                <div
                    class="hidden sm:peer-checked:block absolute top-full -m-1 size-3 bg-white rotate-45 left-1/2 transform-x-1/2" />
            </div>
            <div class="pb-[15px] overflow-hidden relative">
                <input type="radio" hidden id="rent" class="peer" name="search" />
                <label for="rent"
                    class="py-[11px] px-[10px] peer-checked:px-[15px] lg:peer-checked:px-[30px] peer-checked:bg-accent transition-[padding] font-bold block">
                    Rent
                </label>
                <div
                    class="hidden sm:peer-checked:block absolute top-full -m-1 size-3 bg-white rotate-45 left-1/2 transform-x-1/2" />
            </div>
            <div class="pb-[15px] overflow-hidden relative">
                <input type="radio" hidden id="shell" class="peer" name="search" />
                <label for="shell"
                    class="py-[11px] px-[10px] peer-checked:px-[15px] lg:peer-checked:px-[30px] peer-checked:bg-accent transition-[padding] font-bold block">
                    Shell
                </label>
                <div
                    class="hidden sm:peer-checked:block absolute top-full -m-1 size-3 bg-white rotate-45 left-1/2 transform-x-1/2" />
            </div>
            <div class="pb-[15px] overflow-hidden relative">
                <input type="radio" hidden id="property-value" class="peer" name="search" />
                <label for="property-value"
                    class="py-[11px] px-[10px] peer-checked:px-[15px] lg:peer-checked:px-[30px] peer-checked:bg-accent transition-[padding] font-bold block">
                    Property Value
                </label>
                <div
                    class="hidden sm:peer-checked:block absolute top-full -m-1 size-3 bg-white rotate-45 left-1/2 transform-x-1/2" />
            </div>
            <div class="pb-[15px] overflow-hidden relative">
                <input type="radio" hidden id="agents" class="peer" name="search" />
                <label for="agents"
                    class="py-[11px] px-[10px] peer-checked:px-[15px] lg:peer-checked:px-[30px] peer-checked:bg-accent transition-[padding] font-bold block">
                    Agents
                </label>
                <div
                    class="hidden sm:peer-checked:block absolute top-full -m-1 size-3 bg-white rotate-45 left-1/2 transform-x-1/2" />
            </div>
        </div>
        <div class="pb-[23px] inline-flex w-full flex-col md:flex-row gap-y-[20px]">
            <input
                class="py-[1px] md:pr-0.5 px-5 md:pl-[47px] w-full bg-white text-black inline-block outline-none h-[71px]"
                placeholder="Search by state, postcode or suburb" />
            <div class="flex gap-[25px] flex-wrap">
                <ToolbarButton class="bg-accent py-[21px] px-11 uppercase h-[61px] md:h-[71px] w-fit">
                    search
                </ToolbarButton>
                <ToolbarButton v-if="isResult"
                    class="bg-white text-black py-[21px] px-11 uppercase h-[61px] md:h-[71px] w-fit text-nowrap">
                    Show Filters
                </ToolbarButton>
            </div>
        </div>
        <p class="text-xs opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida.
        </p>
    </div>
</template>