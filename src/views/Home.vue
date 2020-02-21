<template>
  <div class="home">
    <main-header />
    <apollo-query
      :query="require('@/graphql/AnimesAndLinks.graphql')"
      @result="test"
    >
      <template v-slot="{ result: { error, data }, isLoading }">
        <div v-if="isLoading" class="loading">
          Fetching from GraphQL Server....
        </div>
        <div v-else-if="error">
          Error
        </div>
        <transition name="scale" mode="out-in">
          <anime-card-wrapper v-if="data" :animes="data.animes" />
        </transition>
        <div class="btn-wrap" v-if="animes">
          <button class="btn-load" @click="loadMore" :disabled="moreLoading">
            Load More
          </button>
        </div>
      </template>
    </apollo-query>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import AnimeCardWrapper from '@/components/AnimeCardWrapper.vue'

export default {
  components: {
    MainHeader,
    AnimeCardWrapper
  },
  data: () => ({
    moreLoading: false,
    animes: null,
    links: null
  }),
  methods: {
    test(result) {
      this.animes = result.data.animes
      this.links = result.data.links
    },
    async loadMore() {
      this.moreLoading = true

      const t = await this.$apollo.query({
        query: require('@/graphql/AnimesByURL.graphql'),
        variables: {
          url: this.links.next
        }
      })

      const loadedAnimes = Array.from(t.data.animesByURL)

      /**
       * @feature 중복 제거 로드 된 애니메이션 배열에서 현재 애니메이션과 아이디 비교 후
       * 남은 배열만 컴포넌트 데이터에 넣음
       */
      const filterAnimes = loadedAnimes.filter(outAnime =>
        this.animes.every(inAnime => inAnime.id !== outAnime.id)
      )

      this.animes.push(...filterAnimes)
      this.links = t.data.linksByURL

      this.moreLoading = false
    }
  }
}
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transform: scale(0.5);
  opacity: 0;
  transition: transform 0.45s ease-in-out, opacity 0.45s ease-in-out;
}
.scale-enter-to,
.scale-leave {
  transform: scale(1);
  opacity: 1;
}
.loading {
  margin: 2rem auto;
  text-align: center;
  font-size: 3rem;
}
.btn-wrap {
  display: flex;
  justify-content: center;
  margin: 3rem auto;
  width: 100%;
}
.btn-load {
  padding: 1rem 2rem;
  color: crimson;
  background-color: white;
  font: inherit;
  border: 2px solid crimson;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}
.btn-load:focus {
  outline: none;
}
.btn-load:active {
  border-style: solid;
}
.btn-load:hover {
  color: white;
  background-color: crimson;
}
.btn-load:disabled {
  border: 2px solid transparent;
  background-color: black;
  color: white;
}
</style>
