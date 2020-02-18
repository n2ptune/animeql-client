<template>
  <div class="detail-wrapper">
    <detail-header :anime="anime" />
  </div>
</template>

<script>
import DetailHeader from '@/components/detail/Header.vue'

export default {
  components: {
    DetailHeader
  },
  props: ['anime']
}
</script>

<style scoped>
.detail-wrapper {
  display: flex;
  position: relative;
}
</style>
