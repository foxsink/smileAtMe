<template>
  <div class="audio-screen">
    <div class="audio-screen__description audio-screen-item">
      Здесь описание экрана с картинкой
    </div>
    <div class="audio-screen__pictures audio-screen-item">
      Здесь картинка экрана с картинкой
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "AudioScreen",
  setup() {
  }
});
</script>

<style scoped>
  @import "assets/styles/audioScreen/audioScreen.scss";
</style>