<script setup>
import { ref, computed } from 'vue'
import { services } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.vue'
import { posts } from '../data/blog.js'

const activeFilter = ref('*')
const filters = [
  { key: '*', label: 'Semua Layanan' },
  { key: 'motor', label: 'Untuk Motor' },
  { key: 'mobil', label: 'Untuk Mobil' },
]

const filteredServices = computed(() => {
  if (activeFilter.value === '*') return services
  return services.filter((s) => s.category.includes(activeFilter.value))
})

const latestPosts = posts.slice(0, 3)

const bookingForm = ref({
  jenis: '',
  layanan: '',
  jadwal: '',
})

const whatsappHref = computed(() => {
  const { jenis, layanan, jadwal } = bookingForm.value
  const lines = ['Halo AutoCraft Garage, saya ingin booking servis.']
  if (jenis) lines.push(`Jenis kendaraan: ${jenis}`)
  if (layanan) lines.push(`Layanan: ${layanan}`)
  if (jadwal) lines.push(`Jadwal yang diinginkan: ${jadwal}`)
  return `https://wa.me/6281234567890?text=${encodeURIComponent(lines.join('\n'))}`
})
</script>

<template>
  <!-- Hero Section Begin -->
  <section class="hero spad set-bg" :style="{ backgroundImage: 'url(/vendor/img/hero-bg.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="hero__text">
            <div class="hero__text__title">
              <span>BENGKEL MOTOR &amp; MOBIL TERPERCAYA</span>
              <h2>AutoCraft Garage</h2>
            </div>
            <div class="hero__text__price">
              <div class="car-model">Booking Servis Mulai Dari</div>
              <h2>Rp 75rb<span>/layanan</span></h2>
            </div>
            <a href="https://wa.me/6281234567890" class="primary-btn" target="_blank" rel="noopener"><img src="/vendor/img/wheel.png" alt=""> Booking via WhatsApp</a>
            <RouterLink to="/layanan" class="primary-btn more-btn">Lihat Layanan</RouterLink>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="hero__tab">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <span class="nav-link active">Booking Servis Cepat</span>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active">
                <div class="hero__tab__form">
                  <h2>Booking Servis Kendaraan Anda</h2>
                  <form @submit.prevent>
                    <div class="select-list">
                      <div class="select-list-item">
                        <p>Jenis Kendaraan</p>
                        <select v-model="bookingForm.jenis">
                          <option value="">Pilih Jenis Kendaraan</option>
                          <option value="Motor">Motor</option>
                          <option value="Mobil">Mobil</option>
                        </select>
                      </div>
                      <div class="select-list-item">
                        <p>Pilih Layanan</p>
                        <select v-model="bookingForm.layanan">
                          <option value="">Pilih Layanan</option>
                          <option v-for="s in services" :key="s.id" :value="s.title">{{ s.title }}</option>
                        </select>
                      </div>
                      <div class="select-list-item">
                        <p>Jadwal Diinginkan</p>
                        <input v-model="bookingForm.jadwal" type="text" placeholder="Contoh: Sabtu pagi">
                      </div>
                    </div>
                    <a :href="whatsappHref" target="_blank" rel="noopener" class="site-btn">Kirim via WhatsApp</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Section End -->

  <!-- Services Section Begin -->
  <section class="services spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <span>Kenapa AutoCraft Garage</span>
            <h2>Layanan Andalan Kami</h2>
            <p>Bengkel motor &amp; mobil dengan teknisi berpengalaman dan harga transparan sejak awal.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="services__item">
            <img src="/vendor/img/services/services-1.png" alt="">
            <h5>Ganti Oli &amp; Pelumas</h5>
            <p>Oli berkualitas sesuai rekomendasi pabrikan untuk motor maupun mobil.</p>
            <RouterLink to="/layanan/ganti-oli-pelumas"><i class="fa fa-long-arrow-right"></i></RouterLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="services__item">
            <img src="/vendor/img/services/services-2.png" alt="">
            <h5>Tune-Up Mesin</h5>
            <p>Penyetelan ulang mesin agar tarikan responsif dan bahan bakar lebih hemat.</p>
            <RouterLink to="/layanan/tune-up-mesin"><i class="fa fa-long-arrow-right"></i></RouterLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="services__item">
            <img src="/vendor/img/services/services-3.png" alt="">
            <h5>Servis Berkala</h5>
            <p>Checklist pemeriksaan menyeluruh sesuai buku panduan pabrikan.</p>
            <RouterLink to="/layanan/servis-berkala"><i class="fa fa-long-arrow-right"></i></RouterLink>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="services__item">
            <img src="/vendor/img/services/services-4.png" alt="">
            <h5>Body Repair &amp; Cat</h5>
            <p>Perbaikan penyok, baret, hingga pengecatan ulang dengan hasil presisi.</p>
            <RouterLink to="/layanan/body-repair-cat"><i class="fa fa-long-arrow-right"></i></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Services Section End -->

  <!-- Feature Section Begin -->
  <section class="feature spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="feature__text">
            <div class="section-title">
              <span>Keunggulan Kami</span>
              <h2>Bengkel Terpercaya untuk Motor &amp; Mobil Anda</h2>
            </div>
            <div class="feature__text__desc">
              <p>AutoCraft Garage berdiri sejak 2016 dan telah melayani ribuan kendaraan pelanggan di Bandung dan
                sekitarnya.</p>
              <p>Kami mengedepankan transparansi harga, pengerjaan oleh teknisi berpengalaman, dan penggunaan
                spare part berkualitas untuk menjaga performa kendaraan Anda tetap prima.</p>
            </div>
            <div class="feature__text__btn">
              <RouterLink to="/tentang-kami" class="primary-btn">Tentang Kami</RouterLink>
              <RouterLink to="/kontak" class="primary-btn partner-btn">Hubungi Kami</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-4">
          <div class="row">
            <div class="col-lg-6 col-md-4 col-6">
              <div class="feature__item">
                <div class="feature__item__icon">
                  <img src="/vendor/img/feature/feature-1.png" alt="">
                </div>
                <h6>Mesin</h6>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-6">
              <div class="feature__item">
                <div class="feature__item__icon">
                  <img src="/vendor/img/feature/feature-2.png" alt="">
                </div>
                <h6>Turbo &amp; Injeksi</h6>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-6">
              <div class="feature__item">
                <div class="feature__item__icon">
                  <img src="/vendor/img/feature/feature-3.png" alt="">
                </div>
                <h6>Pendingin &amp; AC</h6>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-6">
              <div class="feature__item">
                <div class="feature__item__icon">
                  <img src="/vendor/img/feature/feature-4.png" alt="">
                </div>
                <h6>Kaki-Kaki</h6>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-6">
              <div class="feature__item">
                <div class="feature__item__icon">
                  <img src="/vendor/img/feature/feature-5.png" alt="">
                </div>
                <h6>Kelistrikan</h6>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-6">
              <div class="feature__item">
                <div class="feature__item__icon">
                  <img src="/vendor/img/feature/feature-6.png" alt="">
                </div>
                <h6>Rem</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Feature Section End -->

  <!-- Layanan Unggulan Section Begin -->
  <section class="car spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <span>Layanan Kami</span>
            <h2>Layanan Servis Unggulan</h2>
          </div>
          <ul class="filter__controls">
            <li
              v-for="f in filters"
              :key="f.key"
              :class="{ active: activeFilter === f.key }"
              @click="activeFilter = f.key"
            >{{ f.label }}</li>
          </ul>
        </div>
      </div>
      <div class="row car-filter">
        <div v-for="s in filteredServices" :key="s.id" class="col-lg-3 col-md-4 col-sm-6 mix">
          <ServiceCard :service="s" />
        </div>
      </div>
    </div>
  </section>
  <!-- Layanan Unggulan Section End -->

  <!-- Chooseus Section Begin -->
  <section class="chooseus spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="chooseus__text">
            <div class="section-title">
              <h2>Kenapa Pelanggan Memilih Kami</h2>
              <p>Kepuasan dan keamanan berkendara Anda adalah prioritas utama tim kami.</p>
            </div>
            <ul>
              <li><i class="fa fa-check-circle"></i> Teknisi berpengalaman &amp; bersertifikat</li>
              <li><i class="fa fa-check-circle"></i> Harga transparan tanpa biaya tersembunyi</li>
              <li><i class="fa fa-check-circle"></i> Spare part berkualitas &amp; bergaransi</li>
              <li><i class="fa fa-check-circle"></i> Estimasi pengerjaan jelas di awal</li>
            </ul>
            <RouterLink to="/tentang-kami" class="primary-btn">Tentang Kami</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="chooseus__video set-bg" :style="{ backgroundImage: 'url(/vendor/img/chooseus-video.png)' }">
      <img src="/vendor/img/chooseus-video.png" alt="" style="visibility:hidden">
      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" class="play-btn video-popup"><i class="fa fa-play"></i></a>
    </div>
  </section>
  <!-- Chooseus Section End -->

  <!-- Latest Blog Section Begin -->
  <section class="latest spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <span>Blog Kami</span>
            <h2>Tips &amp; Update Terbaru</h2>
            <p>Kumpulan tips perawatan motor dan mobil dari tim teknisi AutoCraft Garage.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="post in latestPosts" :key="post.id" class="col-lg-4 col-md-6">
          <div class="latest__blog__item">
            <div class="latest__blog__item__pic set-bg" :style="{ backgroundImage: `url(${post.image})` }"></div>
            <div class="latest__blog__item__text">
              <h5><RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink></h5>
              <p>{{ post.excerpt }}</p>
              <RouterLink :to="`/blog/${post.slug}`">Baca Selengkapnya <i class="fa fa-long-arrow-right"></i></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Latest Blog Section End -->

  <!-- Cta Begin -->
  <div class="cta">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" class="cta__item set-bg" :style="{ backgroundImage: 'url(/vendor/img/cta/cta-1.jpg)' }">
            <h4>Mau Booking Servis?</h4>
            <p>Chat WhatsApp kami untuk jadwalkan servis motor atau mobil Anda</p>
          </a>
        </div>
        <div class="col-lg-6 col-md-6">
          <RouterLink to="/kontak" class="cta__item set-bg" :style="{ backgroundImage: 'url(/vendor/img/cta/cta-2.jpg)' }">
            <h4>Butuh Konsultasi?</h4>
            <p>Hubungi tim kami untuk konsultasi kondisi kendaraan Anda gratis</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- Cta End -->
</template>
