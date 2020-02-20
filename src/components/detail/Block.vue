<template>
  <article class="block">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.block {
  border-radius: 7px;
  border: 1px solid #ddd;
  padding: 1rem 1.5rem;
  margin: 0 1.3rem 2rem 0;
  word-wrap: break-word;
}
.title {
  font-size: 1.4rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.65);
}
.content {
  margin: 1.4rem 0 1rem 0;
}
@media screen and (max-width: 870px) {
  .block {
    margin: 0 0 2rem 0;
  }
  .title {
    font-size: 1.2rem;
  }
}
</style>
