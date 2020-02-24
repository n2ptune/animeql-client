<template>
  <transition name="appear" appear>
    <router-link :to="`/${link}`">
      <img :src="image" :alt="image" />
    </router-link>
  </transition>
</template>

<script>
export default {
  props: ['image', 'link']
}
</script>

<style scoped>
.appear-enter-active {
  transform: scale(0.2);
  opacity: 0;
  transition: transform 0.45s ease-in-out, opacity 0.45s ease-in-out;
}
.appear-enter-to {
  transform: scale(1);
  opacity: 1;
}
img {
  width: 120px;
  border-radius: 7px;
  margin: 0 1rem 1rem 0;
}
</style>
