<template>
  <div>
    <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="state.collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      class="rounded-3xl"
    >
      <IconAppLogo class="m-8" />
      <div class="relative top-16">
        <a-menu-item key="1" @click="navigateTo('/')">
          <template #icon>
            <IconNavHome />
          </template>
          <span>Trang chủ</span>
        </a-menu-item>
        <a-menu-item key="2" @click="navigateTo('/movies')">
          <template #icon>
            <IconNavMovies />
          </template>
          <span>Phim</span>
        </a-menu-item>
        <a-menu-item key="3" @click="navigateTo('/TV-series')">
          <template #icon>
            <IconNavTVSeries />
          </template>
          <span>Chương trình TV</span>
        </a-menu-item>
        <a-menu-item key="4" @click="navigateTo('/bookmarked')">
          <template #icon>
            <IconNavBookmark />
          </template>
          <span>Đánh dấu</span>
        </a-menu-item>
      </div>
    </a-menu>
    <a-avatar
      :class="state.collapsed ? 'left-8 absolute bottom-1' : 'left-20 absolute bottom-1'"
      :src="userStore.thumbnail || 'Oval.png'"
      alt="thumbnail"
      :size="state.collapsed ? 32 : 64"
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import IconNavHome from '../icons/IconNavHome.vue'
import IconNavMovies from '../icons/IconNavMovies.vue'
import IconNavTVSeries from '../icons/IconNavTVSeries.vue'
import IconNavBookmark from '../icons/IconNavBookmark.vue'
import IconAppLogo from '../icons/IconAppLogo.vue'
import './menu-header.css'
import { useUserStore } from '@/stores/user'
import router from '@/router'
const userStore = useUserStore()
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
})
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed
  state.openKeys = state.collapsed ? [] : state.preOpenKeys
}
const navigateTo = (nav: string) => {
  router.push(nav)
}
</script>
