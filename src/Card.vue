<template>
  <main class="main-container">
    <div class="card">
      <div class="card-image">
        <figure class="card-image__figure">
          <img
              class="card-image__img"
              src="@/assets/images/sad-winter.png"
              alt="Я и без того знаю, какой ты Петросян"
          >
          <figcaption class="card-figcaption">
            Обстановка в России
          </figcaption>
        </figure>
      </div>
      <div class="card-text">
        <p class="card-text__p">
          В новом 2023 году ты очевидно думал, что холодно будет в Европе
        </p>
      </div>
      <div class="card-audio">
        <audio
            class="card-audio__associated-audio"
            src="assets/audio/directed_by-theme_meme.mp3"
            controls
        ></audio>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped lang="scss">
  @import "@/src/styles/component.scss";
</style>