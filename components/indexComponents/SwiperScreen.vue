<template>
  <div class="swiper-screen">
    <Swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="false"
        navigation
        :pagination="{clickable: true}"
    >
      <SwiperSlide
          v-for="card in cardArray"
          :key="`card-id-${card.id}`"
      >
        <Card :card="card"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import Card from "~/components/baseComponents/Card.vue";
import {Navigation, Pagination} from "swiper";
export default defineComponent({
  name: "SwiperScreen",
  components: {Card},
  props: {
    cardArray: {
      type: Array,
      required: true,
    }
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    }
  }
});
</script>

<style scoped lang="scss">
  @import "@/assets/styles/swiperScreen/component.scss";
</style>