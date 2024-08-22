<script lang="ts">
import AppMovie from '@/components/AppMovie.vue'
import FakeAPI from '@/services/fake-api.service'
import { useMovieStore } from '@/stores/movie'
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
    ...mapState(useMovieStore, ['getTrendingMovies', 'getAllMovieNotTrending'])
  },
  watch: {
    movies(newMovie) {
      this.setMovie(newMovie)
    }
  }
}
</script>

<template>
  <div>
    <p class="text-xl text-white ml-4">Trending</p>
    <div class="overflow-x-auto w-full whitespace-nowrap *:inline-block *:ml-5 first:!m-0">
      <div v-for="movie in movies.getTrendingMovies" :key="movie.title" class="w-60 h-36">
        <AppMovie :movie="movie" />
      </div>
    </div>
  </div>
  <div class="p-4">
    <p class="text-xl text-white">Dành cho bạn</p>
    <div class="flex w-screen flex-row flex-wrap justify-between">
      <div
        v-for="movie in movies.getAllMovieNotTrending"
        :key="movie.title"
        class="movie-container"
      >
        <AppMovie :movie="movie" />
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
