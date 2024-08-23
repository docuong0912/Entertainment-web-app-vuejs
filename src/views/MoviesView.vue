<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      router: useRoute()
    }
  },
  created() {
    console.log(this.router.name)
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
