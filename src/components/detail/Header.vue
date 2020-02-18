<template>
  <div
    class="detail-header"
    :style="{
      backgroundImage: `url(${bgImage})`
    }"
  >
    <div class="metadata">
      <div class="title">
        {{ anime.attributes.canonicalTitle }}
      </div>
      <div class="synopsis">
        {{ sliceSynopsis }}
      </div>
      <div class="rank">
        <font-awesome-icon icon="heart" :style="{ color: 'red' }" size="lg" />
        <span class="favorite">
          {{ anime.attributes.favoritesCount }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bgImage() {
      return this.anime.attributes.coverImage === null
        ? 'https://via.placeholder.com/1920x500'
        : this.anime.attributes.coverImage.original
    },
    sliceSynopsis() {
      const syn = this.anime.attributes.synopsis

      return syn.length > 80 ? `${syn.slice(0, 80)}...` : syn
    }
  },
  props: ['anime']
}
</script>

<style scoped>
.detail-header {
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0 4.5rem;
}
.detail-header::after {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.title {
  font-size: 2.5rem;
  color: white;
  text-shadow: 0 0 1rem rgba(0, 0, 0, 0.88);
  margin-bottom: 0.75rem;
}
.synopsis {
  font-size: 1.4rem;
  color: white;
  text-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.65);
  margin-bottom: 1.2rem;
}
.rank .favorite {
  font-size: 1.2rem;
  margin-left: 5px;
  color: white;
}
/* Responsive style */
@media screen and (max-width: 768px) {
  /* sm */
  .detail-header {
    padding: 0 1.5rem;
  }
}
</style>
