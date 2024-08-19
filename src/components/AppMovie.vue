<template>
  <div class="relative">
    <a-image :preview="false" :width="470" :height="230" :src="movie?.thumbnail" />
    <div class="absolute left-6 bottom-6">
      <p class="text-white text-xl">
        {{ movie?.year }} . {{ movie?.category }} . {{ movie?.rating }}
      </p>
      <b class="text-white text-4xl">{{ movie?.title }}</b>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Movie } from '@/stores/movie'
defineProps<{
  movie: Movie
}>()
</script>
