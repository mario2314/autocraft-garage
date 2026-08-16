<script setup></script>

<template>
  <div class="breadcrumb-option set-bg" :style="{ backgroundImage: 'url(/vendor/img/breadcrumb-bg.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>404</h2>
            <div class="breadcrumb__links">
              <RouterLink to="/"><i class="fa fa-home"></i> Beranda</RouterLink>
              <span>Halaman Tidak Ditemukan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="about spad">
    <div class="container text-center">
      <p>Halaman yang Anda cari tidak ditemukan.</p>
      <RouterLink to="/" class="primary-btn">Kembali ke Beranda</RouterLink>
    </div>
  </section>
</template>
