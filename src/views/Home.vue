<template>
  <div class="home">
    <main-header />
    <apollo-query :query="require('@/graphql/AnimesAndLinks.graphql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" :style="{ fontSize: '5rem', textAlign: 'center' }">
          Loading...
        </div>
        <div v-else-if="error">
          Error
        </div>
        <anime-card-wrapper
          v-else-if="data"
          :animes="data.animes"
          :links="data.links"
        />
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
