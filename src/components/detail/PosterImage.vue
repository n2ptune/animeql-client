<template>
  <transition name="slide" mode="out-in">
    <img
      v-show="loadTest"
      :src="coverImage"
      @load="loadImageHandler"
      class="cover-image"
    />
  </transition>
</template>

<script>
export default {
  data: () => ({
    loadTest: false
  }),
  props: ['coverImage'],
  methods: {
    loadImageHandler() {
      this.loadTest = !this.loadTest
    }
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transform: translateY(50%);
  transition: transform 0.35s ease-in-out;
}
.slide-enter-to,
.slide-leave {
  transform: translateY(0%);
}
.cover-image {
  max-width: 550px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.52);
}
</style>
