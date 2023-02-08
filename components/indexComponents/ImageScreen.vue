<template>
    <div class="image-screen">
      <Swiper
          :modules="modules"
          :loop="false"
          :slides-per-view="2"
      >
        <SwiperSlide>
          <div class="image-screen__description image-screen-item">
            Здесь описание экрана с картинкой
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="image-screen__pictures image-screen-item">
            Здесь картинка экрана с картинкой
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
</template>

<script lang="ts">
import {Navigation, Pagination} from "swiper";
export default defineComponent({
  name: "ImageScreen",
  setup() {
    return {
      modules: [Navigation, Pagination],
    }
  }
});
</script>

<style lang="scss" scoped>
  @import "assets/styles/imageScreen/component.scss";
</style>