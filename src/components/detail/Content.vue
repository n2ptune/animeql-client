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
      <block />
    </section>
    <sidebar :anime="anime" />
  </main>
</template>

<script>
import Block from '@/components/detail/Block.vue'
import Sidebar from '@/components/detail/Sidebar.vue'

export default {
  components: {
    Block,
    Sidebar
  },
  props: ['anime']
}
</script>

<style>
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
