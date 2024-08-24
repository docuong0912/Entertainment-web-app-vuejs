<template>
  <div :class="movies.keySearch === '' && 'hidden'">
    <p class="text-xl text-white ml-4">
      Tìm thấy {{ movies.getMovies(true, $route.name as string).length }} kết quả cho '{{
        movies.keySearch
      }}'
    </p>
    <div class="flex w-screen flex-row flex-wrap justify-start *:ml-2">
      <div
        v-for="movie in movies.getMovies(true, $route.name as string)"
        :key="movie.title"
        class="movie-container"
      >
        <AppMovie :movie="movie" :onSearching="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppMovie from '@/components/AppMovie.vue'
import { useMovieStore } from '@/stores/movie'
import { mapActions, mapState } from 'pinia'
export default {
  data() {
    const movieStore = useMovieStore()
    return {
      movies: movieStore
    }
  },
  methods: {
    ...mapActions(useMovieStore, ['fetchData'])
  },
  computed: {
    // Map the state to computed properties
    ...mapState(useMovieStore, ['getMovies', 'keySearch'])
  }
}
</script>
