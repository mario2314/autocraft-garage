<script setup>
import { testimonials } from '../data/testimonials.js'

const team = [
  { name: 'Agus Salim', role: 'Kepala Mekanik', image: '/vendor/img/about/team-1.jpg' },
  { name: 'Dewi Anggraini', role: 'Pemilik & Manajer', image: '/vendor/img/about/team-2.jpg' },
  { name: 'Rian Hidayat', role: 'Teknisi Mesin', image: '/vendor/img/about/team-3.jpg' },
  { name: 'Yusuf Maulana', role: 'Teknisi Body & Cat', image: '/vendor/img/about/team-4.jpg' },
]

const clients = [
  '/vendor/img/clients/client-1.png',
  '/vendor/img/clients/client-2.png',
  '/vendor/img/clients/client-3.png',
  '/vendor/img/clients/client-4.png',
  '/vendor/img/clients/client-5.png',
  '/vendor/img/clients/client-6.png',
  '/vendor/img/clients/client-7.png',
  '/vendor/img/clients/client-2.png',
]
</script>

<template>
  <!-- Breadcrumb Begin -->
  <div class="breadcrumb-option set-bg" :style="{ backgroundImage: 'url(/vendor/img/breadcrumb-bg.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>Tentang Kami</h2>
            <div class="breadcrumb__links">
              <RouterLink to="/"><i class="fa fa-home"></i> Beranda</RouterLink>
              <span>Tentang Kami</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb End -->

  <!-- About Us Section Begin -->
  <section class="about spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title about-title">
            <h2>Selamat Datang di AutoCraft Garage <br />Solusi Perawatan Motor &amp; Mobil Anda</h2>
            <p>AutoCraft Garage adalah bengkel motor dan mobil profesional yang berdiri sejak 2016 di Bandung. Kami
              melayani perawatan rutin hingga perbaikan menyeluruh dengan teknisi berpengalaman<br /> dan peralatan
              yang selalu diperbarui mengikuti perkembangan teknologi kendaraan.</p>
        </div>
        </div>
      </div>
      <div class="about__feature">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="about__feature__item">
              <img src="/vendor/img/about/af-1.png" alt="">
              <h5>Sistem Jaminan Kualitas</h5>
              <p>Setiap pekerjaan melalui pengecekan akhir sebelum kendaraan dikembalikan ke pelanggan.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="about__feature__item">
              <img src="/vendor/img/about/af-2.png" alt="">
              <h5>Proses Diagnosa Akurat</h5>
              <p>Menggunakan alat scan diagnosa untuk memastikan sumber masalah ditemukan dengan tepat.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="about__feature__item">
              <img src="/vendor/img/about/af-3.png" alt="">
              <h5>Fasilitas &amp; Peralatan Lengkap</h5>
              <p>Bilik cat tertutup, alat spooring digital, dan peralatan servis standar bengkel resmi.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="about__pic">
            <img src="/vendor/img/about/about-pic.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="about__item">
            <h5>Misi Kami</h5>
            <p>Memberikan layanan servis motor dan mobil yang jujur, transparan, dan berkualitas, sehingga
              pelanggan merasa aman dan nyaman mempercayakan kendaraannya kepada kami.</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="about__item">
            <h5>Visi Kami</h5>
            <p>Menjadi bengkel pilihan utama masyarakat Bandung yang dikenal karena kualitas pengerjaan, kejujuran
              harga, dan pelayanan pelanggan yang ramah.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Us Section End -->

  <!-- Call Section Begin -->
  <section class="call spad set-bg" :style="{ backgroundImage: 'url(/vendor/img/about/call-bg.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6">
          <div class="call__text">
            <div class="section-title">
              <h2>Minta Kami Hubungi Anda</h2>
              <p>Isi form di samping dan tim kami akan menghubungi Anda untuk menjadwalkan servis.</p>
            </div>
            <RouterLink to="/kontak">Hubungi Kami</RouterLink>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 col-md-6">
          <form action="#" class="call__form" @submit.prevent>
            <div class="row">
              <div class="col-lg-6">
                <input type="text" placeholder="Nama">
              </div>
              <div class="col-lg-6">
                <input type="text" placeholder="Email">
              </div>
              <div class="col-lg-6">
                <input type="text" placeholder="No. HP">
              </div>
              <div class="col-lg-6">
                <select>
                  <option value="">Pilih Layanan</option>
                  <option value="">Servis Motor</option>
                  <option value="">Servis Mobil</option>
                  <option value="">Body Repair</option>
                </select>
              </div>
            </div>
            <button type="submit" class="site-btn">Kirim Sekarang</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- Call Section End -->

  <!-- Team Section Begin -->
  <section class="team spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title team-title">
            <span>Tim Kami</span>
            <h2>Kenal Lebih Dekat Teknisi Kami</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="member in team" :key="member.name" class="col-lg-3 col-sm-6">
          <div class="team__item" v-tilt="10">
            <div class="team__item__pic">
              <img :src="member.image" :alt="member.name">
            </div>
            <div class="team__item__text">
              <h5>{{ member.name }}</h5>
              <span>{{ member.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Team Section End -->

  <!-- Testimonial Section Begin -->
  <section class="testimonial spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title testimonial-title">
            <span>Testimoni</span>
            <h2>Apa Kata Pelanggan Kami</h2>
            <p>Kepuasan pelanggan adalah bukti terbaik kualitas layanan kami.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="testimonial__slider">
          <div v-for="t in testimonials" :key="t.id" class="col-lg-6">
            <div class="testimonial__item" v-tilt="6">
              <div class="testimonial__item__author">
                <div class="testimonial__item__author__pic">
                  <img :src="t.image" :alt="t.name">
                </div>
                <div class="testimonial__item__author__text">
                  <div class="rating">
                    <i v-for="n in t.rating" :key="n" class="fa fa-star"></i>
                  </div>
                  <h5>{{ t.name }} /<span> {{ t.role }}</span></h5>
                </div>
              </div>
              <p>{{ t.quote }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Testimonial Section End -->

  <!-- Counter Begin -->
  <div class="counter spad set-bg" :style="{ backgroundImage: 'url(/vendor/img/counter-bg.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="counter__item">
            <h2 class="counter-num" v-count-up>2500</h2>
            <p>Kendaraan Ditangani</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="counter__item">
            <h2 class="counter-num" v-count-up>9</h2>
            <strong>+</strong>
            <p>Tahun Pengalaman</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="counter__item">
            <h2 class="counter-num" v-count-up>12</h2>
            <p>Teknisi Bersertifikat</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="counter__item">
            <h2 class="counter-num" v-count-up>1800</h2>
            <p>Pelanggan Puas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Counter End -->

  <!-- Clients Begin -->
  <div class="clients spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title client-title">
            <span>Rekanan</span>
            <h2>Mitra Sparepart &amp; Bengkel Kami</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(logo, i) in clients" :key="i" class="col-lg-3 col-md-4 col-sm-6">
          <a href="#" class="client__item">
            <img :src="logo" alt="Mitra AutoCraft Garage">
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Clients End -->
</template>
