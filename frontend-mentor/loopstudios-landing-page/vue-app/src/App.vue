<template>
    <Header />
    <Hero />
    <About />
    <Products />
    <Footer />
</template>

<script setup>
import { onMounted } from 'vue';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from '@components/Header.vue';
import Hero from '@components/Hero.vue';
import About from '@components/About.vue';
import Products from '@components/Products.vue';
import Footer from '@components/Footer.vue';

onMounted(() => {
    Aos.init();
})
</script>