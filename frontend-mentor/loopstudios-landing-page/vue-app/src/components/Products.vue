<template>
    <section id="products" class="pt-24 px-6 md:px-20 lg:pt-46">
        <div class="max-w-277.5 mx-auto w-full text-center lg:grid lg:grid-cols-2 lg:grid-rows-[auto, 1fr]">
            <h2 class="text-[2rem]/none md:text-5xl/none font-josefin text-center mb-12 lg:justify-self-start" data-aos="fade-bottom">
                OUR CREATIONS
            </h2>
            <div class="grid gap-y-6 lg:gap-y-8 lg:gap-x-8 lg:grid-cols-4 mb-8 lg:mb-auto lg:row-start-2 lg:col-span-full">
                <div v-for="(creation, index) in Products" :key="index" class="h-30 lg:h-112.5 w-full relative group overflow-hidden hover:cursor-pointer" data-aos="fade-right" :data-aos-delay="(index % 4) * 150">
                    <picture class="cursor-pointer">
                        <!-- {{ creation.image.mobile }} -->
                        <source :srcset="creation.image.desktop" media="(min-width:64rem)">
                        <img :src="creation.image.mobile" alt="" class="object-top object-cover size-full">
                    </picture>
                    <div class="absolute inset-0 size-full bg-gradient-to-l lg:bg-gradient-to-b from-black/0 to-black/60 flex items-end p-5 lg:px-10 lg:py-8 lg:group-hover:from-white/75 lg:group-hover:to-white/75 transition-colors text-white lg:group-hover:text-black">
                        <div data-aos="fade-right" data-aos-offset="150" data-aos-delay="(index % 4) * 150">
                            <span v-for="(label, labelIndex) in creation.label" :key="labelIndex + '' + index" class="uppercase w-32 lg:w-42 text-2xl/none lg:text-[2rem]/none font-josefin block text-start">{{ label }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-fit justify-self-center lg:justify-self-end" data-aos="fade-bottom">
                <button type="button" class="text-sm/none tracking-[4px] uppercase border h-10 px-9 hover:bg-black hover:border-black cursor-pointer hover:text-white transition-all duration-300">See all</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

import mobileDeepEarth from '@assets/images/mobile/image-deep-earth.jpg'
import mobileNightArcade from '@assets/images/mobile/image-night-arcade.jpg'
import mobileSoccerTeam from '@assets/images/mobile/image-soccer-team.jpg'
import mobileGrid from '@assets/images/mobile/image-grid.jpg'
import mobileFromAbove from '@assets/images/mobile/image-from-above.jpg'
import mobilePocketBorealis from '@assets/images/mobile/image-pocket-borealis.jpg'
import mobileCuriosity from '@assets/images/mobile/image-curiosity.jpg'
import mobileFisheye from '@assets/images/mobile/image-fisheye.jpg'
import desktopDeepEarth from '@assets/images/desktop/image-deep-earth.jpg'
import desktopNightArcade from '@assets/images/desktop/image-night-arcade.jpg'
import desktopSoccerTeam from '@assets/images/desktop/image-soccer-team.jpg'
import desktopGrid from '@assets/images/desktop/image-grid.jpg'
import desktopFromAbove from '@assets/images/desktop/image-from-above.jpg'
import desktopPocketBorealis from '@assets/images/desktop/image-pocket-borealis.jpg'
import desktopCuriosity from '@assets/images/desktop/image-curiosity.jpg'
import desktopFisheye from '@assets/images/desktop/image-fisheye.jpg'

const Products = ref([
    {
        image: {
            mobile: mobileDeepEarth,
            desktop: desktopDeepEarth,
        }, label: ["Deep", "earth"]
    },
    {
        image: {
            mobile: mobileNightArcade,
            desktop: desktopNightArcade,
        }, label: ["Night", "arcade"]
    },
    {
        image: {
            mobile: mobileSoccerTeam,
            desktop: desktopSoccerTeam,
        }, label: ["Soccer", "team VR"]
    },
    {
        image: {
            mobile: mobileGrid,
            desktop: desktopGrid,
        }, label: ["The", "grid"]
    },
    {
        image: {
            mobile: mobileFromAbove,
            desktop: desktopFromAbove,
        }, label: ["From up", "above VR"]
    },
    {
        image: {
            mobile: mobilePocketBorealis,
            desktop: desktopPocketBorealis,
        }, label: ["Pocket", "borealis"]
    },
    {
        image: {
            mobile: mobileCuriosity,
            desktop: desktopCuriosity,
        }, label: ["The", "curiosity"]
    },
    {
        image: {
            mobile: mobileFisheye,
            desktop: desktopFisheye,
        }, label: ["Make it", "fisheye"]
    },
])
</script>