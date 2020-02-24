<template>
  <main class="container">
    <section class="wrapper">
      <block title="줄거리(Synopsis)">
        <template>
          <div class="content">
            {{ anime.attributes.synopsis }}
          </div>
        </template>
      </block>
      <block title="정보">
        <template>
          <div class="content">
            <article class="status is-end">
              <h3>완결 여부</h3>
              <div class="body" v-html="statusIsEnd" />
            </article>
            <article class="status next">
              <h3>다음 시리즈</h3>
              <div class="body" v-html="statusNextRelease" />
            </article>
            <article class="status age">
              <h3>{{ statusAge }}</h3>
            </article>
          </div>
        </template>
      </block>
      <block title="비슷한 장르의 애니메이션">
        <template>
          <div class="content">
            <relation-animes :id="anime.id" />
          </div>
        </template>
      </block>
    </section>
    <sidebar :anime="anime" />
  </main>
</template>

<script>
import Block from '@/components/detail/Block.vue'
import Sidebar from '@/components/detail/Sidebar.vue'
import RelationAnimes from '@/components/detail/RelationAnimes.vue'

export default {
  components: {
    Block,
    Sidebar,
    RelationAnimes
  },
  props: ['anime'],
  computed: {
    statusIsEnd() {
      const attr = this.anime.attributes

      return attr.status === 'finished'
        ? `<span class="emphasis">${attr.startDate}</span>에 방영 시작, <span class="emphasis">${attr.endDate}</span>에 방영 종료 하였다.`
        : `<span class="emphasis">${attr.startDate}</span>에 방영 시작, 현재까지 방영중이다.`
    },
    statusNextRelease() {
      const attr = this.anime.attributes

      const parseDate = date => {
        const d = new Date(date)

        return d.toLocaleString()
      }

      return attr.nextRelease
        ? `<span class="emphasis">${parseDate(
            attr.nextRelease
          )}</span>에 다음 시리즈가 예정되어 있다.`
        : `예정 없음.`
    },
    statusAge() {
      const age = this.anime.attributes.ageRating

      if (age === 'R') {
        return '청소년 관람불가'
      } else if (age === 'PG') {
        return '12~13세 이상 관람가능'
      } else if (age === 'G') {
        return '전체 관람가능'
      } else {
        return '관람가능 연령 정보 없음'
      }
    }
  }
}
</script>

<style scoped>
.body >>> .emphasis {
  font-weight: bold;
  text-decoration: underline;
  color: var(--gray-900);
}
.content .status h3::before {
  display: inline-block;
  vertical-align: middle;
  bottom: 1px;
  margin-right: 0.4rem;
  content: '';
  position: relative;
  width: 5px;
  height: 5px;
  background-color: var(--gray-700);
  border-radius: 50%;
}
.content .status {
  margin-top: 1rem;
}
h3 {
  margin-bottom: 0.5rem;
  color: var(--gray-700);
  font-size: 1.15rem;
}
.content {
  line-height: 1.3rem;
}
section.wrapper {
  flex: 1 1 0;
}
.container {
  justify-content: center;
  display: flex;
  height: 100%;
  margin: 3rem auto;
  width: 95%;
}
@media screen and (max-width: 870px) {
  .container {
    flex-direction: column;
  }
}
@media screen and (min-width: 768px) and (max-width: 1225px) {
  .container {
    width: 856px;
  }
}
@media screen and (min-width: 1226px) {
  .container {
    width: 1100px;
  }
}
</style>
