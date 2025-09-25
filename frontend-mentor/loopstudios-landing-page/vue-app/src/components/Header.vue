<template>
    <nav ref="nav" class="z-10 pt-10 w-full px-6 md:pt-16 md:px-20 lg:px-41.25 pb-2 backdrop-blur-md backdrop-brightness-35 transition-[backdrop-filter] backdrop-opacity-0 border-b-2 border-white/0">
        <div class="max-w-277.5 w-full mx-auto flex justify-between">
            <a href="/" aria-label="Homepage">
                <SvgIcon name="logo" class="h-6 md:h-8" />
            </a>
            <ul class="hidden lg:flex gap-8 text-white font-alata">
                <li v-for="(menu, index) in menus" :key="index">
                    <a :href="'#' + menu.link" class="cursor-pointer pb-2.5 relative after:content-[''] after:block after:w-0 hover:after:w-5/11 after:transition-[width] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-white">
                        {{ menu.label }}
                    </a>
                </li>
            </ul>
            <button type="button" aria-label="Menu" class="cursor-pointer lg:hidden" @click="toggleMenu">
                <SvgIcon name="icon-hamburger" class="w-6 md:w-8" />
            </button>
        </div>
    </nav>

    <div :class="{ 'inset-0 bg-black fixed z-10 lg:hidden px-6 py-10 md:px-20 md:py-16 transition-transform': true, ' translate-x-full': !menuToggled }">
        <div class="max-w-277.5 w-full mx-auto grid gap-40 md:gap-y-32">
            <div class="flex justify-between items-center">
                <SvgIcon name="logo" class="h-6 md:h-8 w-fit" />
                <button type="button" @click="toggleMenu">
                    <SvgIcon name="icon-close" class="h-4.5 md:6 w-fit" />
                </button>
            </div>
            <ul class="grid gap-6 uppercase font-josefin text-2xl/none">
                <li v-for="(menu, index) in menus" :key="index" data-aos="fade-right" @click="toggleMenu">
                    <a :href="'#' + menu.link" class="cursor-pointer text-white">
                        {{ menu.label }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SvgIcon from '@components/SvgIcon.vue';
import { naturalStickyTop } from 'natural-sticky';

let menuToggled = ref(false);
const toggleMenu = () => {
    menuToggled.value = !menuToggled.value
};

const menus = ref([
    { link: "about", label: "About" },
    { link: "careers", label: "Careers" },
    { link: "events", label: "Events" },
    { link: "products", label: "Products" },
    { link: "support", label: "Support" },
])

const nav = ref(null)
onMounted(() => {
    naturalStickyTop(nav.value, {
        reserveSpace: false
    });
    document.addEventListener("scroll", () => {
        const top = document.documentElement.scrollTop;
        console.clear();
        console.log(nav.value);
        if (top > 50) {
            nav.value.classList.add('backdrop-opacity-100', 'border-white/25');
        } else {
            nav.value.classList.remove('backdrop-opacity-100', 'border-white/25')
        }
    })
})
</script>