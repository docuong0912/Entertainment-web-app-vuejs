<template>
  <div style="width: 256px">
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
      :items="items"
    ></a-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, h } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import IconNavHome from '../icons/IconNavHome.vue'
import IconNavMovies from '../icons/IconNavMovies.vue'
import IconNavTVSeries from '../icons/IconNavTVSeries.vue'
import IconNavBookmark from '../icons/IconNavBookmark.vue'
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
})
const items = reactive([
  {
    key: '1',
    icon: () => h(IconNavHome),
    label: 'Home',
    title: 'Home'
  },
  {
    key: '2',
    icon: () => h(IconNavMovies),
    label: 'Movies',
    title: 'Movies'
  },
  {
    key: '3',
    icon: () => h(IconNavTVSeries),
    label: 'TV Series',
    title: 'TV Series'
  },
  {
    key: '4',
    icon: () => h(IconNavBookmark),
    label: 'Bookmarks',
    title: 'Bookmarks'
  }
])

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed
  state.openKeys = state.collapsed ? [] : state.preOpenKeys
}
</script>
