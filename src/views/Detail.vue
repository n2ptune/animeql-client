<template>
  <apollo-query
    :query="require('@/graphql/GetAnimeByID.graphql')"
    :variables="{ id: $route.params.id }"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <div v-if="loading">
        Loading...
      </div>
      <div v-else-if="error">
        Error!
      </div>
      <div v-else-if="data">
        {{ data.anime }}
      </div>
    </template>
  </apollo-query>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params)
  }
}
</script>

<style>
html,
body {
  min-height: 100%;
}
</style>
