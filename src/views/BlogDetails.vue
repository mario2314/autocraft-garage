<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug } from '../data/blog.js'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const route = useRoute()
const post = computed(() => getPostBySlug(props.slug || route.params.slug))
const prevPost = computed(() => (post.value ? getPostBySlug(post.value.prev) : null))
const nextPost = computed(() => (post.value ? getPostBySlug(post.value.next) : null))

const commentForm = ref({ name: '', email: '', website: '', comment: '' })
const commentSent = ref(false)

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function submitComment() {
  commentSent.value = true
}
</script>

<template>
  <section v-if="!post" class="blog-details spad">
    <div class="container text-center">
      <p>Artikel yang Anda cari tidak ditemukan.</p>
      <RouterLink to="/blog" class="primary-btn">Kembali ke Blog</RouterLink>
    </div>
  </section>

  <template v-else>
    <!-- Blog Details Hero Begin -->
    <section class="blog-details-hero spad set-bg" :style="{ backgroundImage: `url(${post.heroImage})` }">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-10">
            <div class="blog__details__hero__text">
              <span class="label">{{ post.category }}</span>
              <h2>{{ post.title }}</h2>
              <ul>
                <li><span>Oleh {{ post.author }}</span></li>
                <li><i class="fa fa-calendar-o"></i> <span>{{ formatDate(post.date) }}</span></li>
                <li><i class="fa fa-edit"></i> <span>{{ post.comments }} Komentar</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog Details Hero End -->

    <!-- Blog Details Section Begin -->
    <section class="blog-details spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="blog__details__pic">
              <img :src="post.detailImage" :alt="post.title">
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <div class="blog__details__text">
              <p v-for="(para, i) in post.content" :key="i">{{ para }}</p>
            </div>
            <div class="blog__details__quote">
              <p>{{ post.quote }}</p>
            </div>
            <div class="blog__details__share">
              <a href="#" class="blog__details__share__item">
                <i class="fa fa-facebook"></i>
                <span>Bagikan</span>
              </a>
              <a href="#" class="blog__details__share__item twitter">
                <i class="fa fa-twitter"></i>
                <span>Bagikan</span>
              </a>
              <a :href="`https://wa.me/?text=${encodeURIComponent(post.title)}`" target="_blank" rel="noopener" class="blog__details__share__item google">
                <i class="fa fa-whatsapp"></i>
                <span>Bagikan</span>
              </a>
            </div>
            <div class="blog__details__author">
              <div class="blog__details__author__pic">
                <img src="/vendor/img/blog/details/author.png" alt="">
              </div>
              <div class="blog__details__author__text">
                <h5>{{ post.author }}</h5>
                <p>Tim teknisi AutoCraft Garage berbagi tips seputar perawatan motor dan mobil berdasarkan
                  pengalaman menangani ribuan kendaraan pelanggan.</p>
              </div>
            </div>
            <div class="blog__details__btns">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-lg-6" v-if="prevPost">
                      <RouterLink :to="`/blog/${prevPost.slug}`" class="blog__details__btns__item set-bg" :style="{ backgroundImage: `url(${prevPost.image})` }">
                        <h6>{{ prevPost.title }}</h6>
                        <ul>
                          <li>Oleh {{ prevPost.author }}</li>
                          <li>{{ formatDate(prevPost.date) }}</li>
                        </ul>
                      </RouterLink>
                    </div>
                    <div class="col-lg-6" v-if="nextPost">
                      <RouterLink :to="`/blog/${nextPost.slug}`" class="blog__details__btns__item set-bg" :style="{ backgroundImage: `url(${nextPost.image})` }">
                        <h6>{{ nextPost.title }}</h6>
                        <ul>
                          <li>Oleh {{ nextPost.author }}</li>
                          <li>{{ formatDate(nextPost.date) }}</li>
                        </ul>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog__details__comment__form">
              <h4>Tinggalkan Komentar</h4>
              <form @submit.prevent="submitComment">
                <div class="input-list">
                  <div class="input-list-item">
                    <p>Nama</p>
                    <input v-model="commentForm.name" type="text">
                  </div>
                  <div class="input-list-item">
                    <p>Email</p>
                    <input v-model="commentForm.email" type="text">
                  </div>
                  <div class="input-list-item">
                    <p>Website</p>
                    <input v-model="commentForm.website" type="text">
                  </div>
                </div>
                <div class="input-desc">
                  <p>Komentar</p>
                  <textarea v-model="commentForm.comment"></textarea>
                </div>
                <button type="submit" class="site-btn">Kirim Sekarang</button>
              </form>
              <p v-if="commentSent" style="margin-top:12px;">Terima kasih atas komentarnya!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog Details Section End -->
  </template>
</template>
