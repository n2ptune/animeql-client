<template>
  <img :src="image" alt="poster-image" class="poster-image" />
</template>

<script>
export default {
  props: ['image']
}
</script>

<style scoped>
.poster-image {
  display: block;
  width: 225px;
  height: 390px;
  border-radius: 7px;
  box-shadow: 0 0 25px 1px rgba(0, 0, 0, 0.44);
  margin-top: 2rem;
}
</style>
