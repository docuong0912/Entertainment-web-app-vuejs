<script setup lang="ts">
import AppMovie from '@/components/AppMovie.vue'
import { useMovieStore } from '@/stores/movie'
const movie = useMovieStore()
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl text-white">Trending</h1>
    <AppMovie :movie="movie.movies[0]" />
  </div>
  <div class="p-4">
    <h1 class="text-3xl text-white">Dành cho bạn</h1>
  </div>
</template>
