<template>
  <div class="card">
    <div class="card-image card__item">
      <img
          class="card-image__img"
          :src="`/_nuxt/${card.image_path}`"
          alt="Я и без того знаю, какой ты Петросян"
      >
    </div>
    <span class="card__caption card__item">
      {{ card.image_title }}
    </span>
    <span class="card__text card__item">
      {{ card.article }}
    </span>
    <div class="card-audio card__item">
      <audio
          :src="`/_nuxt/${card.audio_path}`"
          class="card-audio__associated-audio"
          controls
      >
        Your browser does not support the audio element.
      </audio>
    </div>
    <div class="card__footer card-footer card__item">
      <span class="card-footer__author">Автор поста: {{card.author ?? 'anonymous'}}</span>
      <span class="card-footer__created-at">Создано: {{ card.created_at }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    name: "Card",
    props: {
      card: {
        type: Object,
        required: true,
      }
    },
    setup() {
      return {

      };
    },
  });

</script>

<style scoped lang="scss">
  @import "@/assets/styles/base/component.scss";
</style>