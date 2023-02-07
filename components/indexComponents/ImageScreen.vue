<template>
  <div class="image-screen">
    <div class="image-screen__description image-screen-item">
      Здесь описание экрана с картинкой
    </div>
    <div class="image-screen__pictures image-screen-item">
      Здесь картинка экрана с картинкой
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "ImageScreen",
  setup() {
  }
});
</script>

<style scoped>
  @import "assets/styles/imageScreen/imageScreen.scss";
</style>