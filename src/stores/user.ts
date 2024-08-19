/* eslint-disable no-unused-labels */
import { defineStore } from 'pinia'
interface UserInfo {
  name: string
  email: string
  thumbnail?: string
}
export const useUserStore = defineStore('user', {
  state: (): UserInfo => ({
    name: '',
    email: '',
    thumbnail: ''
  }),
  getters: {
    getUserInfo(state): UserInfo {
      return {
        name: state.name,
        email: state.email,
        thumbnail: state.thumbnail
      }
    }
  }
})
