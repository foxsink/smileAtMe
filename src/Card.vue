<template>
  <div v-for="post in posts" class="card">
    <div class="card-image card__item">
      <img
          class="card-image__img"
          :src="`/_nuxt/${post.image_path}`"
          alt="Я и без того знаю, какой ты Петросян"
      >
    </div>
    <span class="card__caption card__item">
      {{ post.image_title }}
    </span>
    <span class="card__text card__item">
      {{ post.article }}
    </span>
    <div class="card-audio card__item">
      <audio
          :src="`/_nuxt/${post.audio_path}`"
          class="card-audio__associated-audio"
          controls
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<script setup>

const { data: posts } = await useFetch('/api/posts');

</script>

<style scoped lang="scss">
  @import "@/src/styles/component.scss";
</style>