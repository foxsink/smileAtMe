<template>
  <main class="main-container">
    <div v-for="post in posts" class="card">
      <div class="card-image">
        <figure class="card-image__figure">
          <img
              class="card-image__img"
              :src="`/_nuxt/${post.image_path}`"
              alt="Я и без того знаю, какой ты Петросян"
          >
          <figcaption class="card-figcaption">
            Обстановка в России
          </figcaption>
        </figure>
      </div>
      <div class="card-text">
        <p class="card-text__p">
          {{ post.article }}
        </p>
      </div>
      <div class="card-audio">
        <audio
            class="card-audio__associated-audio"
            :src="`/_nuxt/${post.audio_path}`"
            controls
        ></audio>
      </div>
    </div>
  </main>
</template>

<script setup>

    const { data: posts } = await useFetch('/api/posts');
    console.log(posts);

</script>

<style scoped lang="scss">
  @import "@/src/styles/component.scss";
</style>