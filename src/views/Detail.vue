<template>
  <apollo-query
    :query="require('@/graphql/GetAnimeByID.graphql')"
    :variables="{ id: $route.params.id }"
    class="query"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <div v-if="loading">
        Loading...
      </div>
      <div v-else-if="error">
        Error!
      </div>
      <div v-else-if="data">
        <detail-wrapper :anime="data.anime" />
      </div>
    </template>
  </apollo-query>
</template>

<script>
import DetailWrapper from '@/components/detail/DetailWrapper.vue'

export default {
  components: {
    DetailWrapper
  }
}
</script>

<style>
html,
body {
  min-height: 100%;
}
</style>
