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
    <div
      :class="[
        'absolute rounded-full bg-[--grayish-blue] w-8 h-8 flex justify-center items-center opacity-80',
        !movie.isTrending ? ' top-2 right-3 ' : 'top-2 right-14'
      ]"
    >
      <IconBookmarkEmpty @click="setBookmarkMovie" v-if="!bookmarked?.includes(movie.title)" />
      <IconBookmarkFull @click="setBookmarkMovie" v-if="bookmarked?.includes(movie.title)" />
    </div>
  </div>
</template>
<script lang="ts">
import { getIcon } from '@/constants/icons.constant'
import IconBookmarkEmpty from './icons/IconBookmarkEmpty.vue'
import IconBookmarkFull from './icons/IconBookmarkFull.vue'

export default {
  props: ['movie', 'onSearching', 'setBookmark', 'bookmarked'],
  data() {
    return {
      displayInSmallSize: !this.movie.isTrending || this.onSearching
    }
  },
  methods: {
    setBookmarkMovie() {
      this.$emit('setBookmark', this.movie)
    }
  },
  computed: {
    icon() {
      return getIcon(this.movie.category.replace(/\s/g, '').toUpperCase())
    }
  },
  watch: {}
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
