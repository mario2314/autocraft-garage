<script setup>
import { nextTick, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { applyScrollReveal } from './composables/useScrollReveal.js'

const router = useRouter()

function revealSoon() {
  nextTick(() => {
    applyScrollReveal()
    setTimeout(() => applyScrollReveal(), 250)
  })
}

onMounted(revealSoon)
router.afterEach(revealSoon)
</script>

<template>
  <Navbar />
  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <Footer />
  <a
    href="https://wa.me/6281234567890"
    target="_blank"
    rel="noopener"
    class="whatsapp-float"
    aria-label="Chat WhatsApp AutoCraft Garage"
  ><i class="fa fa-whatsapp"></i></a>
</template>
