<script setup>
import { ref, computed } from 'vue'
import { services } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.vue'

const searchTerm = ref('')
const activeCategory = ref('semua')
const sortBy = ref('default')

const categories = [
  { key: 'semua', label: 'Semua Kendaraan' },
  { key: 'motor', label: 'Motor' },
  { key: 'mobil', label: 'Mobil' },
]

const filteredServices = computed(() => {
  let list = services

  if (activeCategory.value !== 'semua') {
    list = list.filter((s) => s.category.includes(activeCategory.value))
  }

  if (searchTerm.value.trim()) {
    const q = searchTerm.value.trim().toLowerCase()
    list = list.filter((s) => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q))
  }

  if (sortBy.value === 'az') {
    list = [...list].sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortBy.value === 'za') {
    list = [...list].sort((a, b) => b.title.localeCompare(a.title))
  }

  return list
})

function resetFilter() {
  searchTerm.value = ''
  activeCategory.value = 'semua'
  sortBy.value = 'default'
}
</script>

<template>
  <!-- Breadcrumb Begin -->
  <div class="breadcrumb-option set-bg" :style="{ backgroundImage: 'url(/vendor/img/breadcrumb-bg.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>Daftar Layanan</h2>
            <div class="breadcrumb__links">
              <RouterLink to="/"><i class="fa fa-home"></i> Beranda</RouterLink>
              <span>Layanan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb End -->

  <!-- Car Section Begin -->
  <section class="car spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="car__sidebar">
            <div class="car__search">
              <h5>Cari Layanan</h5>
              <form @submit.prevent>
                <input v-model="searchTerm" type="text" placeholder="Cari...">
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <div class="car__filter">
              <h5>Filter Kendaraan</h5>
              <form @submit.prevent>
                <select v-model="activeCategory">
                  <option v-for="c in categories" :key="c.key" :value="c.key">{{ c.label }}</option>
                </select>
                <select v-model="sortBy">
                  <option value="default">Urutkan: Default</option>
                  <option value="az">Nama: A - Z</option>
                  <option value="za">Nama: Z - A</option>
                </select>
                <div class="car__filter__btn">
                  <button type="button" class="site-btn" @click="resetFilter">Reset Filter</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="car__filter__option">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="car__filter__option__item">
                  <h6>{{ filteredServices.length }} layanan ditemukan</h6>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="car__filter__option__item car__filter__option__item--right">
                  <h6>Kategori: {{ categories.find((c) => c.key === activeCategory)?.label }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div v-for="s in filteredServices" :key="s.id" class="col-lg-4 col-md-4">
              <ServiceCard :service="s" />
            </div>
            <div v-if="filteredServices.length === 0" class="col-lg-12">
              <p>Tidak ada layanan yang cocok dengan pencarian Anda.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Car Section End -->
</template>
