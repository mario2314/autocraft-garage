<script setup>
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
</script>

<template>
  <!-- Footer Section Begin -->
  <footer class="footer set-bg" :style="{ backgroundImage: 'url(/vendor/img/footer-bg.jpg)' }">
    <div class="container">
      <div class="footer__contact">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="footer__contact__title">
              <h2>Hubungi Kami Sekarang!</h2>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="footer__contact__option">
              <div class="option__item"><i class="fa fa-phone"></i> 0812-3456-7890</div>
              <div class="option__item email"><i class="fa fa-envelope-o"></i> halo@autocraftgarage.id</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="footer__about">
            <div class="footer__logo">
              <RouterLink to="/" class="site-logo site-logo--light">
                <span class="site-logo__icon"><i class="fa fa-wrench"></i></span>
                <span class="site-logo__text">AutoCraft<em>Garage</em></span>
              </RouterLink>
            </div>
            <p>AutoCraft Garage — bengkel motor &amp; mobil profesional. Kunjungi kami di Jl. Raya Merdeka No. 45,
              Bandung, Jawa Barat, atau hubungi WhatsApp di 0812-3456-7890.</p>
            <div class="footer__social">
              <a href="#" class="facebook" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="twitter" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="google" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
              <a href="https://wa.me/6281234567890" class="skype" aria-label="WhatsApp"><i class="fa fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 offset-lg-1 col-md-3">
          <div class="footer__widget">
            <h5>Tautan</h5>
            <ul>
              <li><RouterLink to="/layanan"><i class="fa fa-angle-right"></i> Layanan</RouterLink></li>
              <li><RouterLink to="/blog"><i class="fa fa-angle-right"></i> Blog</RouterLink></li>
              <li><RouterLink to="/tentang-kami"><i class="fa fa-angle-right"></i> Tentang Kami</RouterLink></li>
              <li><RouterLink to="/kontak"><i class="fa fa-angle-right"></i> Kontak</RouterLink></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="footer__widget">
            <h5>Kategori Layanan</h5>
            <ul>
              <li><a href="#"><i class="fa fa-angle-right"></i> Servis Motor</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i> Servis Mobil</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i> Body Repair</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i> Cuci &amp; Detailing</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="footer__brand">
            <h5>Jam Operasional</h5>
            <ul>
              <li><a href="#"><i class="fa fa-angle-right"></i> Senin – Jumat: 08.00 – 18.00</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i> Sabtu: 08.00 – 15.00</a></li>
            </ul>
            <ul>
              <li><a href="#"><i class="fa fa-angle-right"></i> Minggu: Libur</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i> Hari besar: Libur</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      <div class="footer__copyright__text">
        <p>Copyright &copy;{{ year }} All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener">Colorlib</a></p>
      </div>
      <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
    </div>
  </footer>
  <!-- Footer Section End -->
</template>
