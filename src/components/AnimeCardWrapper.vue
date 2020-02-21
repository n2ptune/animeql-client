<template>
  <div class="wrapper">
    <anime-card v-for="anime in animes" :key="anime.id" :anime="anime" />
  </div>
</template>

<script>
import AnimeCard from '@/components/AnimeCard.vue'

export default {
  components: {
    AnimeCard
  },
  props: ['animes']
}
</script>

<style scoped>
.wrapper {
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2rem;
  margin: -4rem auto 3rem auto;
}
</style>
