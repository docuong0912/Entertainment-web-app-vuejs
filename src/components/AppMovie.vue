<template>
  <div class="relative mt-3 group">
    <a-image
      :preview="false"
      alt="moive thumbnail"
      :class="'w-full ' + displayInSmallSize && '!h-28 rounded-lg'"
      :src="
        !displayInSmallSize ? movie?.thumbnail?.trending?.small : movie?.thumbnail?.regular?.small
      "
      v-if="!displayLarge"
    />
    <a-image
      :preview="false"
      alt="moive thumbnail"
      :class="'!w-full' + displayInSmallSize && '!h-auto rounded-lg '"
      :src="
        !displayInSmallSize ? movie?.thumbnail?.trending?.large : movie?.thumbnail?.regular?.large
      "
      v-else
    />
    <div
      :class="[!displayInSmallSize && 'absolute left-6 bottom-6', 'group-hover:hidden']"
      v-show="!isHover"
    >
      <p class="text-slate-300 m-0 *:inline text-sm">
        {{ movie?.year }} &middot; <component :is="icon" /> {{ movie?.category }} &middot;
        {{ movie?.rating }}
      </p>
      <b class="text-white text-md">{{ movie?.title }}</b>
    </div>
    <div
      v-show="!isHover"
      :class="[
        'group-hover:hidden absolute rounded-full bg-[--grayish-blue] w-8 h-8 flex justify-center items-center opacity-80',
        !movie.isTrending ? ' top-2 right-3 lg:right-22' : 'top-2 right-14 lg:right-4'
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
import useDevice, { DeviceSize } from '@/constants/media.constant'

export default {
  props: ['movie', 'onSearching', 'setBookmark', 'bookmarked', 'displayLarge'],
  data() {
    return {
      displayInSmallSize: !this.movie.isTrending || this.onSearching,
      isHover: false
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
