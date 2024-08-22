<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <a-layout class="bg-transparent">
    <header>
      <a-row class="flex flex-row justify-around items-center">
        <IconAppLogo />
        <menu-header />
        <a-avatar :src="'Oval.png'" alt="thumbnail" size="32" />
      </a-row>
    </header>
    <main class="w-screen">
      <RouterView name="SearchBar"></RouterView>
      <RouterView />
    </main>
  </a-layout>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
