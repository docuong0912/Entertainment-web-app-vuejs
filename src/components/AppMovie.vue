<template>
  <div class="relative">
    <a-image
      :preview="false"
      alt="moive thumbnail"
      :class="'w-full' + !movie.isTrending && '!h-28 rounded-lg'"
      :src="
        movie?.isTrending ? movie?.thumbnail?.trending?.large : movie?.thumbnail?.regular?.large
      "
    />
    <div :class="movie.isTrending ? 'absolute left-6 bottom-6' : ''">
      <p class="text-white text-xs m-0">
        {{ movie?.year }} . {{ movie?.category }} . {{ movie?.rating }}
      </p>
      <b class="text-white text-md">{{ movie?.title }}</b>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ['movie']
}
</script>
