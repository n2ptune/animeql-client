<template>
  <router-link :to="anime.id" tag="div" class="link">
    <div class="card">
      <div class="card-image">
        <img :src="anime.attributes.posterImage.small" alt="" />
      </div>
      <div class="card-header">
        <div class="card-title">
          {{ anime.attributes.canonicalTitle }}
        </div>
        <div class="card-meta">
          <div class="date">
            {{ startEndDate }}
          </div>
          <div class="rank">
            <span v-if="anime.attributes.ratingRank">
              평점 순위 <strong>{{ ratingRank }}</strong
              >위
            </span>
            <span v-else>
              순위 정보 없음
            </span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      required: true
    }
  },
  computed: {
    startEndDate() {
      return `${this.anime.attributes.startDate} ~ ${this.anime.attributes
        .endDate || 'ing'}`
    },
    ratingRank() {
      return this.anime.attributes.ratingRank
    }
  }
}
</script>

<style scoped>
.card-image img {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}
.card {
  background-color: white;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.11);
  border-radius: 7px;
  width: 284px;
  height: 100%;
}
.card-header {
  padding: 14px 1.2rem;
}
.card-header * {
  text-align: center;
  margin: 10px 0;
}
.card-header .card-title {
  font-size: 1.23rem;
  font-weight: bold;
}
strong {
  font-weight: bold;
}
.link {
  margin: 1rem;
}
.link:hover {
  height: auto;
  cursor: pointer;
}
</style>
