<template>
    <footer class="px-6 md:px-20 bg-black text-white text-center py-14 md:py-11 mt-24">
        <div class="max-w-277.5 mx-auto w-full text-center md:grid md:grid-cols-2 md:grid-rows-[1fr, auto] md:gap-6">
            <SvgIcon name="logo" class="h-6 w-fit md:justify-self-start" />
            <ul class="flex flex-col gap-4 md:flex-row font-alata my-10 md:my-auto md:row-start-2">
                <li v-for="(menu, index) in menus" :key="index">
                    <a :href="'#' + menu.link" class="cursor-pointer pb-2.5 relative after:content-[''] after:block after:w-0 hover:after:w-5/11 after:transition-[width] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-white text-[0.9375rem] leading-[165%]">
                        {{ menu.label }}
                    </a>
                </li>
            </ul>
            <ul class="flex flex-row gap-4 justify-self-center md:justify-self-end">
                <li v-for="(social, index) in socials" :key="index">
                    <a href="#" :aria-label="social.label" class="block size-6 fill-white cursor-pointer">
                        <SvgIcon :name="social.icon" />
                    </a>
                </li>
            </ul>
            <span class="mt-4 md:mt-auto text-[0.9375rem] leading-[165%] opacity-50 md:justify-self-end block">© {{ new Date().getFullYear() }} Loopstudios. All rights reserved.</span>
        </div>

        <div class="attribution hidden">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://masrestu.vercel.app/">masrestu</a>.
        </div>
    </footer>
</template>
<script setup>
import { ref } from 'vue';
import SvgIcon from '@components/SvgIcon.vue'

const menus = ref([
    { link: "about", label: "About" },
    { link: "careers", label: "Careers" },
    { link: "events", label: "Events" },
    { link: "products", label: "Products" },
    { link: "support", label: "Support" },
])

const socials = ref([
    { label: "Facebook", icon: 'icon-facebook' },
    { label: "Twitter", icon: 'icon-twitter' },
    { label: "Pinterest", icon: 'icon-pinterest' },
    { label: "Instagram", icon: 'icon-instagram' },
])
</script>