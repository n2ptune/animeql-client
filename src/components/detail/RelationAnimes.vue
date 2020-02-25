<template>
  <section class="relation-wrapper">
    <div v-if="$apollo.queries.relation.loading" class="loading">
      데이터 불러오는 중...
    </div>
    <div
      v-else-if="!$apollo.queries.relation.loading && !relation.length"
      class="loading"
    >
      데이터가 없습니다. T^T
    </div>
    <anime-card
      v-for="anime in relation"
      :key="anime.attributes.posterImage.tiny"
      :image="anime.attributes.posterImage.tiny"
      :link="anime.id"
    />
  </section>
</template>

<script>
import AnimeCard from '@/components/detail/RelationAnimeCard.vue'

export default {
  components: {
    AnimeCard
  },
  props: ['id'],
  apollo: {
    relation: {
      query: require('@/graphql/RelationAnimes.graphql'),
      variables() {
        return {
          id: this.id
        }
      }
    }
  }
}
</script>

<style scoped>
.relation-wrapper {
  display: flex;
  flex-direction: row;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: auto;
}
.loading {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--gray-700);
}
</style>
