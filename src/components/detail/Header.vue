<template>
  <header>
    <section>
      <poster-image :image="anime.attributes.posterImage.large" />
      <meta-data
        :title="anime.attributes.canonicalTitle"
        :synopsis="anime.attributes.synopsis"
        :average-rating="anime.attributes.averageRating"
        :episode-length="anime.attributes.episodeLength"
        :total-length="anime.attributes.totalLength"
      />
    </section>
  </header>
</template>

<script>
import PosterImage from '@/components/detail/PosterImage.vue'
import MetaData from '@/components/detail/MetaData.vue'

export default {
  components: {
    PosterImage,
    MetaData
  },
  props: ['anime']
}
</script>

<style scoped>
header {
  position: relative;
  width: 100%;
  height: 340px;
  background-color: var(--gray-900);
}
section {
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  color: var(--gray-300);
  height: 100%;
}
section * {
  margin: 0 1rem;
}
</style>
