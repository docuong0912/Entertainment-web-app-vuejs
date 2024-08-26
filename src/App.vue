<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <a-layout class="bg-transparent">
    <a-row>
      <a-col :xs="24" :lg="4" class="lg:p-5">
        <header class="w-full lg:p-5 lg:bg-[--color-menu-background] lg:!h-full lg:w-3/4">
          <a-row class="flex flex-row justify-around lg:justify-center items-center">
            <a-col :lg="24">
              <IconAppLogo />
            </a-col>
            <a-col :lg="24" class="lg:mt-10">
              <menu-header />
            </a-col>
            <a-col :lg="24">
              <a-avatar :src="'Oval.png'" alt="thumbnail" size="32" />
            </a-col>
          </a-row>
        </header>
      </a-col>
      <a-col :xs="24" :lg="20">
        <main class="w-screen">
          <RouterView name="SearchBar"></RouterView>
          <RouterView name="SearchResult" />
          <RouterView />
        </main>
      </a-col>
    </a-row>
  </a-layout>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
