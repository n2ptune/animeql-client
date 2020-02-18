<template>
  <transition name="slide" mode="out-in">
    <div
      v-show="loadTest"
      :style="{ backgroundImage: `url(${coverImage})` }"
      class="cover-image"
    ></div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loadTest: false
  }),
  props: ['coverImage'],
  created() {
    setTimeout(
      function() {
        this.loadTest = !this.loadTest
      }.bind(this),
      1400
    )
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
  width: 550px;
  height: 780px;
  position: absolute;
  right: 3.5%;
  top: 2rem;
  border-radius: 45px;
  box-shadow: 0 0 35px 5px rgba(0, 0, 0, 0.45);
}
@media screen and (max-width: 1300px) {
  .cover-image {
    max-width: 450px;
    position: relative;
    top: -5rem;
    right: auto;
    margin: 0 auto;
  }
}
</style>
