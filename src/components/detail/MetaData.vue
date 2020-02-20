<template>
  <article>
    <h2>{{ title }}</h2>
    <p>{{ sliceSynopsis }}</p>
    <div class="meta">
      <div class="item" v-for="meta in arrMeta" :key="meta.name">
        <div class="name">
          {{ meta.name }}
        </div>
        <div class="value">
          {{ meta.value }}
        </div>
      </div>
    </div>
  </article>
</template>

<script>
// 300자 제한
const SLICE_LENGTH = 300

export default {
  props: ['title', 'synopsis', 'averageRating', 'episodeLength', 'totalLength'],
  computed: {
    sliceSynopsis() {
      return this.synopsis.length > SLICE_LENGTH
        ? this.synopsis.slice(0, SLICE_LENGTH) + '...'
        : this.synopsis
    },
    arrMeta() {
      return [
        {
          name: '평균 평점',
          value: `${this.averageRating}/100`
        },
        {
          name: '총 화수',
          value: this.episodeLength
        },
        {
          name: '총 길이(분)',
          value: `${
            this.totalLength < 0 ? this.totalLength * -1 : this.totalLength
          }분`
        }
      ].filter(m => m.value !== undefined)
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
h2 {
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
p {
  display: none;
  line-height: 1.25rem;
  margin-bottom: 2rem;
}
.meta .item {
  margin: 0 0 1rem 0;
}
.meta .name {
  font-size: 1.4rem;
  color: var(--gray-600);
}
.meta .value {
  font-size: 1.2rem;
}
.meta {
  display: block;
}
@media screen and (min-width: 768px) {
  article {
    max-width: 700px;
    padding: 1rem;
  }
  p {
    display: block;
  }
  .meta {
    display: flex;
  }
  .meta .item {
    margin: 0 2rem;
  }
  .meta .value {
    text-align: center;
  }
}
</style>
