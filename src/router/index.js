import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/tentang-kami',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/kontak',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/layanan',
    name: 'layanan',
    component: () => import('../views/Car.vue'),
  },
  {
    path: '/layanan/:slug',
    name: 'layanan-detail',
    component: () => import('../views/CarDetails.vue'),
    props: true,
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Blog.vue'),
  },
  {
    path: '/blog/:slug',
    name: 'blog-detail',
    component: () => import('../views/BlogDetails.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
