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
          this.movies = movie
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  getters: {
    getBookmarkedMovie(state) {
      return (category: string) => {
        if (localStorage.bookmarked) {
          const bookmarked = JSON.parse(localStorage.getItem('bookmarked') as string)
          return state.movies.filter(
            (m) =>
              m.category.replace(/\s/g, '').toLowerCase() === category.toLowerCase() &&
              bookmarked.includes(m.title)
          )
        } else return []
      }
    },
    getMovies(state) {
      return (onSearch = false, category: string = '', isTrending: boolean = false) => {
        let filteredMovie = state.movies.filter((m) =>
          m.title.trim().toLowerCase().includes(state.keySearch.toString().toLowerCase())
        )
        if (category !== 'home' && category !== '') {
          filteredMovie = filteredMovie.filter((m) =>
            m.category.replace(/\s/g, '').toLowerCase().includes(category.toLowerCase())
          )
        }
        if (!onSearch) {
          return filteredMovie.filter((m) => m.isTrending === isTrending)
        }

        return filteredMovie
      }
    }
  }
})
