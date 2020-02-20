<template>
  <div class="detail-wrapper">
    <detail-header :anime="anime" />
    <detail-content :anime="anime" />
  </div>
</template>

<script>
import DetailHeader from '@/components/detail/Header.vue'
import DetailContent from '@/components/detail/Content.vue'

export default {
  components: {
    DetailHeader,
    DetailContent
  },
  props: ['anime']
}
</script>

<style scoped></style>
