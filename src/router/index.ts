import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        SearchBar: () => import('@/components/AppSearch.vue')
      }
    },
    {
      path: '/movies',
      name: 'movies',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/MoviesView.vue'),
        SearchBar: () => import('@/components/AppSearch.vue')
      }
    },
    {
      path: '/TV-series',
      name: 'TVSeries',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/TVView.vue'),
        SearchBar: () => import('@/components/AppSearch.vue')
      }
    },
    {
      path: '/bookmarked',
      name: 'bookmarked',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/BookmarkView.vue'),
        SearchBar: () => import('@/components/AppSearch.vue')
      }
    }
  ]
})

export default router
