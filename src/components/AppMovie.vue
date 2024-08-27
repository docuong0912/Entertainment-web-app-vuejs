<template>
  <div class="group">
    <div
      :class="[
        'relative mt-3 after:content-[\'\'] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black after:opacity-40 after:hidden after:lg:group-hover:block',
        !onHomePage && 'after:!h-[calc(75%+3px)]'
      ]"
    >
      <div
        class="transition duration-1000 absolute z-40 w-full h-full top-0 left-0 justify-center items-center hidden lg:group-hover:flex"
      >
        <div
          class="*:inline-block bg-slate-300/20 w-28 h-12 p-1 *:ml-3 *:m-auto rounded-3xl opacity-90 cursor-pointer"
        >
          <IconPlay />
          <p class="text-white text-xl">Play</p>
        </div>
      </div>
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
        :class="[
          !displayInSmallSize && 'absolute left-6 bottom-6',
          onHomePage && movie.isTrending && 'lg:group-hover:hidden'
        ]"
      >
        <p class="text-slate-300 m-0 *:inline text-sm lg:text-lg">
          {{ movie?.year }} &middot; <component :is="icon" /> {{ movie?.category }} &middot;
          {{ movie?.rating }}
        </p>
        <b class="text-white text-md lg:text-xl">{{ movie?.title }}</b>
      </div>
      <div
        @click="setBookmarkMovie"
        :class="[
          'absolute z-50 rounded-full bg-[--grayish-blue] w-8 h-8 flex justify-center items-center opacity-80',
          !movie.isTrending ? ' top-2 right-3 lg:right-22' : 'top-2 right-14 lg:right-4'
        ]"
      >
        <IconBookmarkEmpty v-if="!bookmarked?.includes(movie.title)" />
        <IconBookmarkFull v-if="bookmarked?.includes(movie.title)" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { getIcon } from '@/constants/icons.constant'
import IconBookmarkEmpty from './icons/IconBookmarkEmpty.vue'
import IconBookmarkFull from './icons/IconBookmarkFull.vue'
import useDevice, { DeviceSize } from '@/constants/media.constant'
import IconPlay from './icons/IconPlay.vue'

export default {
  props: ['movie', 'onSearching', 'setBookmark', 'bookmarked', 'displayLarge', 'onHomePage'],
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
