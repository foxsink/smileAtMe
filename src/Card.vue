<template>
  <div v-for="post in posts" class="card">
    <div class="card-image">
      <img
          class="card-image__img"
          :src="`/_nuxt/${post.image_path}`"
          alt="Я и без того знаю, какой ты Петросян"
      >
    </div>
    <div class="card-caption">
      Обстановка в России
    </div>
    <div class="card-text">
      <p class="card-text__p">
        {{ post.article }}
      </p>
    </div>
    <div class="card-audio">
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
console.log(posts);

</script>

<style scoped lang="scss">
  @import "@/src/styles/component.scss";
</style>