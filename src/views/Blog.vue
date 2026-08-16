<script setup>
import { ref, computed } from 'vue'
import { posts } from '../data/blog.js'

const searchTerm = ref('')
const email = ref('')
const subscribed = ref(false)

const categories = computed(() => [...new Set(posts.map((p) => p.category))])
const allTags = computed(() => [...new Set(posts.flatMap((p) => p.tags))])
const featured = computed(() => [...posts].slice(-3).reverse())

const filteredPosts = computed(() => {
  if (!searchTerm.value.trim()) return posts
  const q = searchTerm.value.trim().toLowerCase()
  return posts.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function subscribe() {
  if (email.value.trim()) subscribed.value = true
}
</script>

<template>
  <!-- Breadcrumb Begin -->
  <div class="breadcrumb-option set-bg" :style="{ backgroundImage: 'url(/vendor/img/breadcrumb-bg.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>Blog Kami</h2>
            <div class="breadcrumb__links">
              <RouterLink to="/"><i class="fa fa-home"></i> Beranda</RouterLink>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb End -->

  <!-- Blog Section Begin -->
  <section class="blog spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="row">
            <div v-for="post in filteredPosts" :key="post.id" class="col-lg-6 col-md-6 col-sm-6">
              <div class="blog__item">
                <RouterLink :to="`/blog/${post.slug}`" class="blog__item__pic set-bg" :style="{ backgroundImage: `url(${post.image})` }">
                  <ul>
                    <li>Oleh {{ post.author }}</li>
                    <li>{{ formatDate(post.date) }}</li>
                    <li>{{ post.comments }} Komentar</li>
                  </ul>
                </RouterLink>
                <div class="blog__item__text">
                  <h5><RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink></h5>
                  <p>{{ post.excerpt }}</p>
                </div>
              </div>
            </div>
            <div v-if="filteredPosts.length === 0" class="col-lg-12">
              <p>Tidak ada artikel yang cocok dengan pencarian Anda.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-9">
          <div class="blog__sidebar">
            <form class="blog__sidebar__search" @submit.prevent>
              <input v-model="searchTerm" type="text" placeholder="Cari...">
              <button type="submit"><i class="fa fa-search"></i></button>
            </form>
            <div class="blog__sidebar__feature">
              <h4>Artikel Pilihan</h4>
              <div v-for="post in featured" :key="post.id" class="blog__sidebar__feature__item">
                <h6><RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink></h6>
                <ul>
                  <li>Oleh {{ post.author }}</li>
                  <li>{{ formatDate(post.date) }}</li>
                </ul>
              </div>
            </div>
            <div class="blog__sidebar__categories">
              <h4>Kategori</h4>
              <ul>
                <li v-for="cat in categories" :key="cat"><a href="#">{{ cat }}</a></li>
              </ul>
            </div>
            <div class="blog__sidebar__tag">
              <h4>Tag</h4>
              <a v-for="tag in allTags" :key="tag" href="#">{{ tag }}</a>
            </div>
            <div class="blog__sidebar__newslatter">
              <h4>Newsletter</h4>
              <p>Dapatkan tips perawatan kendaraan langsung ke email Anda</p>
              <form @submit.prevent="subscribe">
                <input v-model="email" type="email" placeholder="Email Anda">
                <button type="submit">Subscribe</button>
              </form>
              <p v-if="subscribed" style="margin-top:8px;font-size:13px;">Terima kasih sudah subscribe!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Blog Section End -->
</template>
