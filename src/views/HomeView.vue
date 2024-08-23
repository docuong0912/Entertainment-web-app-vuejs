<script lang="ts">
import AppMovie from '@/components/AppMovie.vue'
import FakeAPI from '@/services/fake-api.service'
import { useMovieStore } from '@/stores/movie'
import { mapActions, mapState } from 'pinia'
import { useRoute } from 'vue-router'

export default {
  data() {
    const movieStore = useMovieStore()
    const router = useRoute()
    return {
      routerName: router.name === 'home' ? '' : router.name,
      movies: movieStore
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions(useMovieStore, ['setMovie', 'fetchData'])
  },
  computed: {
    // Map the state to computed properties
    ...mapState(useMovieStore, ['getMovies', 'movies'])
  },
  watch: {
    $route(to, from) {
      this.routerName = to.name === 'home' ? '' : to.name
    }
  }
}
</script>

<template>
  <div :class="movies.keySearch !== '' && 'hidden'">
    <div>
      <p class="text-xl text-white ml-4">Trending</p>
      <div class="ml-3 overflow-x-auto w-full whitespace-nowrap *:inline-block">
        <div
          v-for="movie in movies.getMovies(false, routerName as string, true)"
          :key="movie.title"
          class="w-60 h-36"
        >
          <AppMovie :movie="movie" />
        </div>
      </div>
    </div>
    <div class="p-4">
      <p class="text-xl text-white">Dành cho bạn</p>
      <div class="flex w-screen flex-row flex-wrap justify-start *:ml-3">
        <div
          v-for="movie in movies.getMovies(false, routerName as string)"
          :key="movie.title"
          class="movie-container odd:!m-0"
        >
          <AppMovie :movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.movie-container {
  width: 164px;
  height: 154px;
}
@media only screen and (min-width: 1024px) {
  .movie-container {
    width: 470px;
    height: 230px;
    margin-left: 40px;
  }
}
</style>
