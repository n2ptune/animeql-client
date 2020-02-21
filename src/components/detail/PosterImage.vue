<template>
  <img :src="image" alt="poster-image" class="poster-image" />
</template>

<script>
export default {
  props: ['image']
}
</script>

<style scoped>
/* original width: 550px, height: 780px */
.poster-image {
  display: block;
  width: 130px;
  height: 190px;
  border-radius: 7px;
  box-shadow: 0 0 25px 1px rgba(0, 0, 0, 0.44);
  margin: 4rem 0;
}
@media screen and (min-width: 768px) {
  .poster-image {
    width: 220px;
    height: auto;
    margin: 1rem 0;
  }
}
</style>
