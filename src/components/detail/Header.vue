<template>
  <div></div>
</template>

<script>
export default {
  computed: {
    bgImage() {
      return this.anime.attributes.coverImage === null
        ? 'https://via.placeholder.com/1920x500'
        : this.anime.attributes.coverImage.original
    }
  },
  props: ['anime']
}
</script>

<style scoped></style>
