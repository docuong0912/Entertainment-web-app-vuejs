<script lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'
import '../style/search-input.css'
import { useMovieStore } from '@/stores/movie'
export default {
  data() {
    return {
      keySearch: '',
      movies: useMovieStore()
    }
  },
  watch: {
    keySearch() {
      this.movies.keySearch = this.keySearch
    }
  }
}
</script>

<template>
  <a-input
    v-model:value="keySearch"
    class="bg-transparent border-none"
    placeholder="Nhập tên phim..."
    size="default"
  >
    <template #prefix>
      <IconSearch />
    </template>
  </a-input>
</template>

<style scope>
svg {
  transform: scale(0.8);
}
</style>
