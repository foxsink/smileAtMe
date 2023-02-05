<template>
  <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
      :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide
        v-for="card in cardArray"
        :key="`card-id-${card.id}`"
    >
      <Card :card="card"/>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts">
import Card from "~/src/Card.vue";
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
    const arr = [
        30,36,345,23235,4665
    ];
    return {
      arr,
    }
  }
});
</script>

<style scoped>

</style>