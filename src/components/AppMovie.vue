<template>
  <div class="relative">
    <a-image
      :preview="false"
      alt="moive thumbnail"
      :class="'w-full lg:!hidden' + displayInSmallSize && '!h-28 rounded-lg'"
      :src="
        !displayInSmallSize ? movie?.thumbnail?.trending?.small : movie?.thumbnail?.regular?.small
      "
    />
    <!-- <a-image
      :preview="false"
      alt="moive thumbnail"
      :class="'w-full !hidden' + displayInSmallSize && '!h-28 rounded-lg'"
      :src="
        !displayInSmallSize ? movie?.thumbnail?.trending?.large : movie?.thumbnail?.regular?.large
      "
    /> -->
    <div :class="!displayInSmallSize && 'absolute left-6 bottom-6'">
      <p class="text-[--color-text-secondary] m-0 *:inline text-sm">
        {{ movie?.year }} &middot; <component :is="icon" /> {{ movie?.category }} &middot;
        {{ movie?.rating }}
      </p>
      <b class="text-white text-md">{{ movie?.title }}</b>
    </div>
  </div>
</template>
<script lang="ts">
import { getIcon } from '@/constants/icons.constant'

export default {
  props: ['movie', 'onSearching'],
  data() {
    return {
      displayInSmallSize: !this.movie.isTrending || this.onSearching
    }
  },
  computed: {
    icon() {
      return getIcon(this.movie.category.replace(/\s/g, '').toUpperCase())
    }
  }
}
</script>
<style scoped>
.desktop {
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
}
</style>
