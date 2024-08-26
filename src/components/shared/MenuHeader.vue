<template>
  <a-menu
    @click="(item: any) => navigateTo(item.key)"
    mode="horizontal"
    theme="dark"
    class="rounded-3xl"
    :items="items"
  />
</template>
<script lang="ts">
import { h } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import IconNavHome from '../icons/IconNavHome.vue'
import IconNavMovies from '../icons/IconNavMovies.vue'
import IconNavTVSeries from '../icons/IconNavTVSeries.vue'
import IconNavBookmark from '../icons/IconNavBookmark.vue'
import IconAppLogo from '../icons/IconAppLogo.vue'
import './menu-header.css'
import type { ItemType } from 'ant-design-vue'
// import { useUserStore } from '@/stores/user'
// const userStore = useUserStore()
export default {
  data() {
    const router = useRouter()
    const activeKey: string = 'home'
    const items = [
      {
        key: 'home',
        icon: () => h(IconNavHome),
        label: '',
        title: 'Trang chủ',
        class: this.$route.name === 'home' && 'active-nav'
      },
      {
        key: 'movie',
        icon: () => h(IconNavMovies),
        label: '',
        title: 'Phim',
        class: this.$route.name === 'movie' && 'active-nav'
      },
      {
        key: 'tvseries',
        icon: () => h(IconNavTVSeries),
        label: '',
        title: 'Chương trình TV',
        class: ''
      },
      {
        key: 'bookmarked',
        icon: () => h(IconNavBookmark),
        label: '',
        title: 'Đánh dấu',
        class: ''
      }
    ]
    return { items, router, activeKey }
  },
  watch: {
    $route(val) {
      const newItems = this.items.map((item) => {
        // If this item is the one we want to activate, update its class
        if (item?.key === val.name) {
          return { ...item, class: 'active-nav' }
        }
        // Otherwise, reset its class
        return { ...item, class: '' }
      })

      // Update items to trigger reactivity
      this.items = [...newItems]
    }
  },
  computed: {},
  methods: {
    navigateTo(key: string) {
      this.activeKey = key
      if (key === 'home') this.router?.push('/')
      else this.router?.push(key)
    }
  }
}
</script>
