<template>
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
          평점 순위 <strong>{{ anime.attributes.ratingRank }}</strong
          >위
        </div>
      </div>
    </div>
  </div>
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
  margin: 1rem;
  width: 284px;
  height: auto;
}
.card-header {
  padding: 14px 8px;
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
</style>
