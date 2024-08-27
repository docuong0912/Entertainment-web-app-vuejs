<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <a-layout class="bg-transparent">
    <a-row>
      <a-col :xs="24" :lg="2" class="lg:p-5 lg:h-screen">
        <header class="w-full lg:p-5 lg:bg-[--color-menu-background] lg:!h-full lg:w-24">
          <a-row class="flex flex-row justify-around lg:justify-center items-center">
            <a-col :lg="24" class="lg:*:m-auto">
              <IconAppLogo />
            </a-col>
            <a-col :lg="24" class="lg:mt-10 lg:ml-6">
              <menu-header />
            </a-col>
            <a-col :lg="24">
              <a-avatar :src="'Oval.png'" alt="thumbnail" size="32" class="lg:mt-96 lg:ml-3" />
            </a-col>
          </a-row>
        </header>
      </a-col>
      <a-col :xs="24" :lg="22">
        <main class="w-screen lg:w-full lg:m-3">
          <RouterView class="lg:mt-4 lg:mb-5" name="SearchBar"></RouterView>
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
