<script setup>
import { ref, computed } from 'vue'

const form = ref({ name: '', email: '', subject: '', message: '' })
const sent = ref(false)

const whatsappHref = computed(() => {
  const { name, subject, message } = form.value
  const lines = [`Halo AutoCraft Garage, saya ${name || '(nama)'}.`]
  if (subject) lines.push(`Perihal: ${subject}`)
  if (message) lines.push(message)
  return `https://wa.me/6281234567890?text=${encodeURIComponent(lines.join('\n'))}`
})

function handleSubmit() {
  sent.value = true
}
</script>

<template>
  <!-- Breadcrumb Begin -->
  <div class="breadcrumb-option set-bg" :style="{ backgroundImage: 'url(/vendor/img/breadcrumb-bg.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>Kontak Kami</h2>
            <div class="breadcrumb__links">
              <RouterLink to="/"><i class="fa fa-home"></i> Beranda</RouterLink>
              <span>Kontak Kami</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb End -->

  <!-- Contact Section Begin -->
  <section class="contact spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="contact__text">
            <div class="section-title">
              <h2>Mari Bekerja Sama</h2>
              <p>Untuk booking servis atau pertanyaan seputar kendaraan Anda, hubungi kami lewat form, telepon, atau
                WhatsApp.</p>
            </div>
            <ul>
              <li><span>Senin–Jumat</span> 08.00 – 18.00</li>
              <li><span>Sabtu:</span> 08.00 – 15.00</li>
              <li><span>Minggu:</span> Libur</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="contact__form">
            <form action="#" @submit.prevent="handleSubmit">
              <div class="row">
                <div class="col-lg-6">
                  <input v-model="form.name" type="text" placeholder="Nama">
                </div>
                <div class="col-lg-6">
                  <input v-model="form.email" type="email" placeholder="Email">
                </div>
              </div>
              <input v-model="form.subject" type="text" placeholder="Subjek">
              <textarea v-model="form.message" placeholder="Pertanyaan Anda"></textarea>
              <button type="submit" class="site-btn">Kirim Sekarang</button>
            </form>
            <p v-if="sent" style="margin-top:16px;">
              Terima kasih! Silakan lanjutkan pesan Anda via
              <a :href="whatsappHref" target="_blank" rel="noopener">WhatsApp</a> agar lebih cepat direspons tim kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact Section End -->

  <!-- Contact Address Begin -->
  <div class="contact-address">
    <div class="container">
      <div class="contact__address__text">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="contact__address__item">
              <h4>Cabang Bandung Kota</h4>
              <p>Jl. Raya Merdeka No. 45, Bandung, Jawa Barat halo@autocraftgarage.id</p>
              <span>0812-3456-7890</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="contact__address__item">
              <h4>Cabang Dago</h4>
              <p>Jl. Ir. H. Djuanda No. 120, Bandung, Jawa Barat dago@autocraftgarage.id</p>
              <span>0812-3456-7891</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="contact__address__item">
              <h4>Cabang Soekarno-Hatta</h4>
              <p>Jl. Soekarno-Hatta No. 88, Bandung, Jawa Barat soetta@autocraftgarage.id</p>
              <span>0812-3456-7892</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact Address End -->
</template>
