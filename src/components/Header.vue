<template>
  <header>
    <div class="font-header">
      <router-link to="/">
        {{ siteName }}
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  props: ['siteName']
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
a:focus {
  outline: none;
}
header {
  padding: 1rem;
}
.font-header {
  font-size: 1.7rem;
  color: darkslategrey;
}
@media screen and (min-width: 480px) {
  header {
    padding: 1.3rem 2rem;
  }
  .font-header {
    font-size: 2.4rem;
  }
}
</style>
