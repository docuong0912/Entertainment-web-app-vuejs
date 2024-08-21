<template>
  <div class="relative">
    <a-image
      :preview="false"
      alt="moive thumbnail"
      :src="
        movie?.isTrending ? movie?.thumbnail?.trending?.large : movie?.thumbnail?.regular?.large
      "
    />
    <div class="absolute left-6 bottom-6">
      <p class="text-white text-sm">
        {{ movie?.year }} . {{ movie?.category }} . {{ movie?.rating }}
      </p>
      <b class="text-white text-md">{{ movie?.title }}</b>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Movie } from '@/stores/movie'
defineProps<{
  movie: Movie
}>()
</script>
