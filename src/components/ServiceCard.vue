<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="car__item" v-tilt="8">
    <div class="car__item__pic__slider">
      <img :src="service.image" :alt="service.title">
    </div>
    <div class="car__item__text">
      <div class="car__item__text__inner">
        <div class="label-date">{{ service.badge || service.duration }}</div>
        <h5><RouterLink :to="`/layanan/${service.slug}`">{{ service.title }}</RouterLink></h5>
        <p>{{ service.summary }}</p>
      </div>
      <div class="car__item__price">
        <span class="car-option">{{ service.category.join(' & ') }}</span>
        <h6>{{ service.price }}</h6>
      </div>
    </div>
  </div>
</template>
