<template>
  <div class="card">
    <div class="card-image card__item">
      <img
          class="card-image__img"
          :src="`/_nuxt/${cardInfo.image_path}`"
          alt="Я и без того знаю, какой ты Петросян"
      >
    </div>
    <span class="card__caption card__item">
      {{ cardInfo.image_title }}
    </span>
    <span class="card__text card__item">
      {{ cardInfo.article }}
    </span>
    <div class="card-audio card__item">
      <audio
          :src="`/_nuxt/${cardInfo.audio_path}`"
          class="card-audio__associated-audio"
          controls
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<script lang="ts">
  export default defineComponent({
    name: "Card",
    props: {
      cardInfo: {
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
  @import "@/src/styles/component.scss";
</style>