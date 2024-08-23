import FakeAPI from '@/services/fake-api.service'
import { defineStore } from 'pinia'
export interface Movie {
  title: string
  thumbnail: Thumbnail
  year: number
  category: string
  rating: string
  isTrending: boolean
}
interface Thumbnail {
  regular: ThumbnailSize
  trending?: ThumbnailSize
}
interface ThumbnailSize {
  small: string
  medium?: string
  large: string
}

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movie[],
    keySearch: '' as string
  }),
  actions: {
    async fetchData() {
      try {
        const res = await FakeAPI.getData()
        if (res.ok) {
          const movie = await res.json()
          this.setMovie(movie)
        }
      } catch (error) {
        console.error(error)
      }
    },
    setMovie(data: Movie[]) {
      this.movies = data
    }
  },
  getters: {
    getTrendingMovies(state): Movie[] {
      return state.movies.filter((m) => m.isTrending)
    },
    getAllMovieNotTrending(state): Movie[] {
      return state.movies.filter((m) => !m.isTrending)
    },
    getMovies(state) {
      return (onSearch = false, category: string = '', isTrending: boolean = false) => {
        const filteredMovie = state.movies.filter(
          (m) =>
            m.title.trim().toLowerCase().includes(state.keySearch.toString().toLowerCase()) &&
            m.category.replace(/\s/g, '').toLowerCase().includes(category.toLowerCase())
        )
        if (!onSearch) {
          return filteredMovie.filter((m) => m.isTrending === isTrending)
        }
        console.log(filteredMovie)
        return filteredMovie
      }
    }
  }
})
