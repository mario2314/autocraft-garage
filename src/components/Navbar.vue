<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const searchOpen = ref(false)
const searchTerm = ref('')

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/blog', label: 'Blog' },
  { to: '/tentang-kami', label: 'Tentang Kami' },
  { to: '/kontak', label: 'Kontak' },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <!-- Offcanvas Menu Begin -->
  <div class="offcanvas-menu-overlay" :class="{ active: menuOpen }" @click="menuOpen = false"></div>
  <div class="offcanvas-menu-wrapper" :class="{ active: menuOpen }">
    <div class="offcanvas__widget">
      <a href="#" class="search-switch" @click.prevent="searchOpen = true"><i class="fa fa-search"></i></a>
      <RouterLink to="/kontak" class="primary-btn" @click="closeMenu">Booking Sekarang</RouterLink>
    </div>
    <div class="offcanvas__logo">
      <RouterLink to="/" class="site-logo" @click="closeMenu">
        <span class="site-logo__icon"><i class="fa fa-wrench"></i></span>
        <span class="site-logo__text">AutoCraft<em>Garage</em></span>
      </RouterLink>
    </div>
    <nav class="offcanvas__menu mobile-menu">
      <ul>
        <li v-for="link in navLinks" :key="link.to" :class="{ active: isActive(link.to) }">
          <RouterLink :to="link.to" @click="closeMenu">{{ link.label }}</RouterLink>
        </li>
      </ul>
    </nav>
    <ul class="offcanvas__widget__add">
      <li><i class="fa fa-clock-o"></i> Senin–Sabtu: 08.00–18.00</li>
      <li><i class="fa fa-envelope-o"></i> halo@autocraftgarage.id</li>
    </ul>
    <div class="offcanvas__phone__num">
      <i class="fa fa-phone"></i>
      <span>0812-3456-7890</span>
    </div>
    <div class="offcanvas__social">
      <a href="#" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
      <a href="#" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
      <a href="#" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
      <a href="https://wa.me/6281234567890" aria-label="WhatsApp"><i class="fa fa-whatsapp"></i></a>
    </div>
  </div>
  <!-- Offcanvas Menu End -->

  <!-- Header Section Begin -->
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <ul class="header__top__widget">
              <li><i class="fa fa-clock-o"></i> Senin–Sabtu: 08.00–18.00</li>
              <li><i class="fa fa-envelope-o"></i> halo@autocraftgarage.id</li>
            </ul>
          </div>
          <div class="col-lg-5">
            <div class="header__top__right">
              <div class="header__top__phone">
                <i class="fa fa-phone"></i>
                <span>0812-3456-7890</span>
              </div>
              <div class="header__top__social">
                <a href="#" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
                <a href="https://wa.me/6281234567890" aria-label="WhatsApp"><i class="fa fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="header__logo">
            <RouterLink to="/" class="site-logo">
              <span class="site-logo__icon"><i class="fa fa-wrench"></i></span>
              <span class="site-logo__text">AutoCraft<em>Garage</em></span>
            </RouterLink>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="header__nav">
            <nav class="header__menu">
              <ul>
                <li v-for="link in navLinks" :key="link.to" :class="{ active: isActive(link.to) }">
                  <RouterLink :to="link.to">{{ link.label }}</RouterLink>
                </li>
              </ul>
            </nav>
            <div class="header__nav__widget">
              <div class="header__nav__widget__btn">
                <a href="#" class="search-switch" @click.prevent="searchOpen = true"><i class="fa fa-search"></i></a>
              </div>
              <RouterLink to="/kontak" class="primary-btn">Booking Sekarang</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="canvas__open" @click="menuOpen = true">
        <span class="fa fa-bars"></span>
      </div>
    </div>
  </header>
  <!-- Header Section End -->

  <!-- Search Begin -->
  <div class="search-model" :style="{ display: searchOpen ? 'block' : 'none' }">
    <div class="h-100 d-flex align-items-center justify-content-center">
      <div class="search-close-switch" @click="searchOpen = false">+</div>
      <form class="search-model-form" @submit.prevent="searchOpen = false">
        <input v-model="searchTerm" type="text" placeholder="Cari layanan atau artikel...">
      </form>
    </div>
  </div>
  <!-- Search End -->
</template>
