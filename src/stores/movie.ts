import { defineStore } from 'pinia'
export interface Movie {
  title: string
  thumbnail: string
  year: string
  category: string
  rating: string
  isTrending: boolean
}

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [
      {
        title: '112',
        thumbnail: 'https://i.ibb.co/w6hWG5W/large.jpg',
        year: '2013',
        category: 'TV Series',
        rating: 'PG',
        isTrending: false
      }
    ] as Movie[]
  })
})
