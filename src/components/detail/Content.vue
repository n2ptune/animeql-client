<template>
  <div class="container">
    asdf
  </div>
</template>

<script>
export default {
  props: ['anime']
}
</script>

<style scoped>
.container {
  height: 100%;
  background-color: red;
  margin: 8rem auto;
  width: 95%;
}
@media screen and (min-width: 768px) and (max-width: 1225px) {
  .container {
    width: 856px;
  }
}
@media screen and (min-width: 1226px) {
  .container {
    width: 1100px;
  }
}
</style>
