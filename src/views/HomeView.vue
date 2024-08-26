<script lang="ts">
import AppMovie from '@/components/AppMovie.vue'
import useDevice, { DeviceSize } from '@/constants/media.constant'
import FakeAPI from '@/services/fake-api.service'
import { useMovieStore, type Movie } from '@/stores/movie'
import { mapActions, mapState } from 'pinia'
import { useRoute } from 'vue-router'

export default {
  data() {
    const movieStore = useMovieStore()
    const router = useRoute()
    return {
      routerName: router.name === 'home' ? '' : router.name,
      movies: movieStore,
      bookmarked: JSON.parse((localStorage.getItem('bookmarked') as string) || '[]'),
      device: useDevice()
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions(useMovieStore, ['fetchData']),
    bookmarkMovie(movie: Movie) {
      if (this.bookmarked.includes(movie.title)) {
        this.bookmarked = this.bookmarked.filter((b: string) => b !== movie.title)
      } else {
        this.bookmarked.push(movie.title)
      }
      localStorage.setItem('bookmarked', JSON.stringify(this.bookmarked))
    }
  },
  computed: {
    // Map the state to computed properties
    ...mapState(useMovieStore, ['getMovies', 'movies']),
    displayLarge() {
      return this.device.size >= DeviceSize.lg
    }
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
      <div
        :class="[
          'ml-3 overflow-x-auto w-full whitespace-nowrap *:inline-block',
          displayLarge && 'lg:*:ml-3 lg:first:!m-0'
        ]"
      >
        <div
          v-for="movie in movies.getMovies(false, routerName as string, true)"
          :key="movie.title"
          class="w-60 h-36 movie-trending"
        >
          <AppMovie :movie="movie" :displayLarge="displayLarge" />
        </div>
      </div>
    </div>
    <div class="p-4">
      <p class="text-xl text-white">Dành cho bạn</p>
      <div class="flex w-screen flex-row flex-wrap justify-start *:ml-3 lg:w-full">
        <div
          v-for="movie in movies.getMovies(false, routerName as string)"
          :key="movie.title"
          class="movie-container odd:m-0 lg:!ml-3"
        >
          <AppMovie
            :movie="movie"
            @setBookmark="bookmarkMovie"
            :bookmarked="bookmarked"
            :displayLarge="displayLarge"
          />
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
    width: 280px;
    height: 226px;
    margin-left: 40px;
  }
  .movie-trending {
    width: 470px !important;
    height: 230px !important;
  }
}
</style>
