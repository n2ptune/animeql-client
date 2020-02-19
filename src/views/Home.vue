<template>
  <div class="home">
    <main-header />
    <apollo-query :query="require('@/graphql/AnimesAndLinks.graphql')">
      <template v-slot="{ result: { error, data }, isLoading }">
        <div v-if="isLoading" class="loading">
          Fetching from GraphQL Server....
        </div>
        <div v-else-if="error">
          Error
        </div>
        <transition name="scale" mode="out-in">
          <anime-card-wrapper
            v-if="data"
            :animes="data.animes"
            :links="data.links"
          />
        </transition>
      </template>
    </apollo-query>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import AnimeCardWrapper from '@/components/AnimeCardWrapper.vue'

export default {
  components: {
    MainHeader,
    AnimeCardWrapper
  }
}
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transform: scale(0.5);
  opacity: 0;
  transition: transform 0.45s ease-in-out, opacity 0.45s ease-in-out;
}
.scale-enter-to,
.scale-leave {
  transform: scale(1);
  opacity: 1;
}
.loading {
  margin: 2rem auto;
  text-align: center;
  font-size: 3rem;
}
</style>
