<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { services, getServiceBySlug } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.vue'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const route = useRoute()
const activeTab = ref('overview')

const service = computed(() => getServiceBySlug(props.slug || route.params.slug))

const otherServices = computed(() => {
  if (!service.value) return []
  return services.filter((s) => s.slug !== service.value.slug).slice(0, 4)
})

const whatsappHref = computed(() => {
  if (!service.value) return 'https://wa.me/6281234567890'
  const text = `Halo AutoCraft Garage, saya ingin booking layanan "${service.value.title}".`
  return `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`
})

watch(
  () => props.slug,
  () => {
    activeTab.value = 'overview'
  },
)
</script>

<template>
  <div v-if="!service" class="breadcrumb-option set-bg" :style="{ backgroundImage: 'url(/vendor/img/breadcrumb-bg.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>Layanan Tidak Ditemukan</h2>
            <div class="breadcrumb__links">
              <RouterLink to="/"><i class="fa fa-home"></i> Beranda</RouterLink>
              <RouterLink to="/layanan">Layanan</RouterLink>
              <span>Tidak Ditemukan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section v-if="!service" class="car-details spad">
    <div class="container text-center">
      <p>Layanan yang Anda cari tidak tersedia.</p>
      <RouterLink to="/layanan" class="primary-btn">Kembali ke Daftar Layanan</RouterLink>
    </div>
  </section>

  <template v-else>
    <!-- Breadcrumb Begin -->
    <div class="breadcrumb-option set-bg" :style="{ backgroundImage: 'url(/vendor/img/breadcrumb-bg.jpg)' }">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="breadcrumb__text">
              <h2>{{ service.title }}</h2>
              <div class="breadcrumb__links">
                <RouterLink to="/"><i class="fa fa-home"></i> Beranda</RouterLink>
                <RouterLink to="/layanan">Layanan</RouterLink>
                <span>{{ service.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Car Details Section Begin -->
    <section class="car-details spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="car__details__pic">
              <div class="car__details__pic__large">
                <img class="car-big-img" :src="service.image" :alt="service.title">
              </div>
            </div>
            <div class="car__details__tab">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: activeTab === 'overview' }" href="#" @click.prevent="activeTab = 'overview'">Ringkasan</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: activeTab === 'included' }" href="#" @click.prevent="activeTab = 'included'">Yang Termasuk</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: activeTab === 'location' }" href="#" @click.prevent="activeTab = 'location'">Lokasi &amp; Booking</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane" :class="{ active: activeTab === 'overview' }">
                  <div class="car__details__tab__info">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="car__details__tab__info__item">
                          <h5>Deskripsi Layanan</h5>
                          <p>{{ service.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="car__details__tab__feature">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="car__details__tab__feature__item">
                          <h5>Keunggulan Layanan</h5>
                          <ul>
                            <li v-for="(h, i) in service.highlights" :key="i"><i class="fa fa-check-circle"></i> {{ h }}</li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="car__details__tab__feature__item">
                          <h5>Info Singkat</h5>
                          <ul>
                            <li><i class="fa fa-check-circle"></i> Estimasi durasi: {{ service.duration }}</li>
                            <li><i class="fa fa-check-circle"></i> Harga: {{ service.price }}</li>
                            <li><i class="fa fa-check-circle"></i> Cocok untuk: {{ service.category.join(' & ') }}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" :class="{ active: activeTab === 'included' }">
                  <div class="car__details__tab__info">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="car__details__tab__info__item">
                          <h5>Sudah Termasuk Dalam Layanan Ini</h5>
                          <ul>
                            <li v-for="(inc, i) in service.included" :key="i"><i class="fa fa-check"></i> {{ inc }}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" :class="{ active: activeTab === 'location' }">
                  <div class="car__details__tab__info">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="car__details__tab__info__item">
                          <h5>Lokasi Bengkel</h5>
                          <p>Jl. Raya Merdeka No. 45, Bandung, Jawa Barat</p>
                          <p>Senin–Jumat 08.00–18.00, Sabtu 08.00–15.00</p>
                          <a :href="whatsappHref" target="_blank" rel="noopener" class="site-btn">Booking Layanan Ini via WhatsApp</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="car__sidebar">
              <div class="car__filter">
                <h5>{{ service.title }}</h5>
                <p style="padding:0 20px 10px;">{{ service.summary }}</p>
                <div class="car__filter__btn" style="padding:0 20px 20px;">
                  <p style="margin-bottom:10px;"><strong>{{ service.price }}</strong> &middot; {{ service.duration }}</p>
                  <a :href="whatsappHref" target="_blank" rel="noopener" class="site-btn">Booking Sekarang</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Car Details Section End -->

    <!-- Other Services Begin -->
    <section class="car spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <span>Lainnya</span>
              <h2>Layanan Lainnya yang Mungkin Anda Butuhkan</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="s in otherServices" :key="s.id" class="col-lg-3 col-md-6 col-sm-6">
            <ServiceCard :service="s" />
          </div>
        </div>
      </div>
    </section>
    <!-- Other Services End -->
  </template>
</template>
