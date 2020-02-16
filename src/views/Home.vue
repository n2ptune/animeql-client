<template>
  <div class="home">
    <div v-for="movie in movies" :key="movie.title">
      {{ movie }}
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    movies: gql`
      query {
        movies {
          id
          title
        }
      }
    `
  }
}
</script>
