<template>
  <div :class="movies.keySearch !== '' && 'hidden'">
    <div class="p-4">
      <p class="text-xl text-white">Phim đã đánh dấu</p>
      <div class="flex w-screen flex-row flex-wrap justify-start *:ml-3">
        <div
          v-for="movie in movies.getBookmarkedMovie('movie')"
          :key="movie.title"
          class="movie-container odd:!m-0"
        >
          <AppMovie :movie="movie" :bookmarked="bookmarked" @setBookmark="bookmarkMovie" />
        </div>
      </div>
    </div>
    <div class="p-4">
      <p class="text-xl text-white">Chương trình truyền hình đã đánh dấu</p>
      <div class="flex w-screen flex-row flex-wrap justify-start *:ml-3">
        <div
          v-for="movie in movies.getBookmarkedMovie('tvseries')"
          :key="movie.title"
          class="movie-container odd:!m-0"
        >
          <AppMovie :movie="movie" :bookmarked="bookmarked" @setBookmark="bookmarkMovie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AppMovie from '@/components/AppMovie.vue'
import { useMovieStore, type Movie } from '@/stores/movie'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    const movieStore = useMovieStore()
    return {
      movies: movieStore,
      bookmarked: JSON.parse((localStorage.getItem('bookmarked') as string) || '[]')
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
    ...mapState(useMovieStore, ['getBookmarkedMovie', 'movies'])
  }
}
</script>
