<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'
import '../style/search-input.css'
</script>

<template>
  <a-input class="bg-transparent border-none" placeholder="Nhập tên phim..." size="default">
    <template #prefix>
      <IconSearch />
    </template>
  </a-input>
</template>
