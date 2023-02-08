<template>
  <div class="text-screen">
    <div class="text-screen__pictures text-screen-item">
      Здесь картинка экрана с текстом
    </div>
    <div class="text-screen__description text-screen-item">
      Здесь описание экрана с текстом
    </div>

  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "TextScreen",
  setup() {
  }
});
</script>

<style lang="scss" scoped>
  @import "assets/styles/textScreen/component.scss";
</style>