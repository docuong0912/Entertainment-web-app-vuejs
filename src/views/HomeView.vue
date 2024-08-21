<script lang="ts">
import AppMovie from '@/components/AppMovie.vue'
import FakeAPI from '@/services/fake-api.service'
import { useMovieStore, type Movie } from '@/stores/movie'
import { mapActions, mapState } from 'pinia'
export default {
  data() {
    const movieStore = useMovieStore()
    return {
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
    ...mapState(useMovieStore, ['getTrendingMovies'])
  },
  watch: {
    movies(newMovie: Movie[]) {
      this.setMovie(newMovie)
    }
  }
}
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl text-white">Trending</h1>
    <div class="flex">
      <div
        v-for="movie in movies.getTrendingMovies"
        :key="movie.title"
        class="movie-container w-60 h-36 ml-10 first:!m-0"
      >
        <AppMovie :movie="movie" />
      </div>
    </div>
  </div>
  <div class="p-4">
    <h1 class="text-3xl text-white">Dành cho bạn</h1>
  </div>
</template>
<style scoped>
@media only screen and (min-width: 1024px) {
  .movie-container {
    width: 470px;
    height: 230px;
    margin-left: 40px;
  }
}
</style>
