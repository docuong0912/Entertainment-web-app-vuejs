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
        SearchBar: () => import('@/components/AppSearch.vue'),
        SearchResult: () => import('@/components/shared/AppSearchResult.vue')
      },
      props: true
    },
    {
      path: '/movies',
      name: 'movie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/HomeView.vue'),
        SearchBar: () => import('@/components/AppSearch.vue'),
        SearchResult: () => import('@/components/shared/AppSearchResult.vue')
      }
    },
    {
      path: '/tvseries',
      name: 'tvseries',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/HomeView.vue'),
        SearchBar: () => import('@/components/AppSearch.vue'),
        SearchResult: () => import('@/components/shared/AppSearchResult.vue')
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
        SearchBar: () => import('@/components/AppSearch.vue'),
        SearchResult: () => import('@/components/shared/AppSearchResult.vue')
      }
    }
  ]
})

export default router
