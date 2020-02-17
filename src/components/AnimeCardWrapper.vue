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
  props: ['animes', 'links']
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2rem;
  margin: 0 auto;
}
</style>
