<template>
  <aside>
    <block title="제목">
      <template>
        일본식 영어 표기법으로는
        <span class="strong">{{ enjp }}</span
        >이고, 영어 로는 <span class="strong">{{ enus }}</span
        >로 쓴다. 일본어로는 <span class="strong">{{ jajp }}</span
        >로 쓴다. 정식 명칭은
        <span class="strong">{{ anime.attributes.canonicalTitle }}</span>
      </template>
    </block>
    <block title="평점 & 점수">
      <template>
        <span class="ratings">
          최저 점수가 준 유저가
          <span class="strong">{{ getRatings[0] }}</span
          >명, 최고 점수를 준 유저가
          <span class="strong">{{ getRatings[1] }}</span
          >명, 투표에 참여한 유저는
          <span class="strong">{{ getRatings[2] }}</span
          >명. 평균 점수는
          <span class="strong">{{ anime.attributes.averageRating }}</span
          >점이다.
        </span>
      </template>
    </block>
  </aside>
</template>

<script>
import Block from '@/components/detail/Block.vue'
import gql from 'graphql-tag'

export default {
  apollo: {
    ratings: {
      query: gql`
        query Ratings($id: String!) {
          ratings(id: $id) {
            min
            max
            count
          }
        }
      `,
      variables() {
        return {
          id: this.anime.id
        }
      }
    }
  },
  components: {
    Block
  },
  props: ['anime'],
  computed: {
    enjp() {
      return this.anime.attributes.titles.en_jp || '존재하지 않음(으)'
    },
    enus() {
      return this.anime.attributes.titles.en_us || '존재하지 않음(으)'
    },
    jajp() {
      return this.anime.attributes.titles.ja_jp || '존재하지 않음(으)'
    },
    getRatings() {
      return this.ratings
        ? [this.ratings.min, this.ratings.max, this.ratings.count]
        : [null, null, null]
    }
  }
}
</script>

<style scoped>
.strong {
  font-size: 1.15rem;
  font-weight: bold;
  font-style: italic;
}
.ratings .strong {
  font-style: normal;
  color: tomato;
}
aside {
  width: 20rem;
  height: auto;
}
@media screen and (max-width: 870px) {
  aside {
    width: 100%;
  }
}
</style>
