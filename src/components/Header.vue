<template>
  <header>
    <div class="font-header">
      {{ siteName }}
    </div>
  </header>
</template>

<script>
export default {
  props: ['siteName']
}
</script>

<style scoped>
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
