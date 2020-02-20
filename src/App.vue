<template>
  <div id="app">
    <Header :site-name="meta.siteName" />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  data: () => ({
    meta: {
      siteName: 'AnimeQL'
    }
  }),
  components: {
    Header
  }
}
</script>

<style>
html,
body {
  background-color: whitesmoke;
}
</style>
