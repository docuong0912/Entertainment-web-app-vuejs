<template>
  <div class="p-4">
    <p class="text-xl text-white uppercase">{{ VNCategoryName }}</p>
    <div class="flex w-screen flex-row flex-wrap justify-start *:ml-3 lg:!w-full">
      <div
        v-for="movie in movies.getMovies(false, $route.name as string)"
        :key="movie.title"
        class="odd:!m-0"
      >
        <AppMovie
          :movie="movie"
          :bookmarked="bookmarked"
          @setBookmark="bookmarkMovie"
          :displayLarge="displayLarge"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { categoryType, categoryTypeInVN } from '@/constants/category.constant'
import useDevice, { DeviceSize } from '@/constants/media.constant'
import { useMovieStore, type Movie } from '@/stores/movie'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    const movieStore = useMovieStore()
    return {
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
    VNCategoryName() {
      return categoryTypeInVN[categoryType[this.$route.name as string]]
    },
    displayLarge() {
      return this.device.size >= DeviceSize.lg
    }
  }
}
</script>
