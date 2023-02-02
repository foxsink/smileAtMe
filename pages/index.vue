<template>
  <NuxtLayout>

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
          v-for="post in posts"
          :key="`card-id-${post.id}`"
      >
        <Card :cardInfo="post"/>
      </SwiperSlide>
    </Swiper>

  </NuxtLayout>
</template>

<script lang="ts">
import Card from "~/src/Card.vue";
export default defineComponent({
  name: "index",
  components: {Card},
  setup() {

    const {data: posts} = useFetch('/api/posts');

    const { $pageScrollState } = useNuxtApp();
    console.log($pageScrollState);

    return {
      posts,
    };
  },
})
</script>

<style scoped>

</style>