<template>
  <NuxtLayout>
    <div class="main-screens">
      <FirstScreen />
      <ImageScreen />
      <TextScreen />

      <SwiperScreen :cardArray="cardArray" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
import FirstScreen from "~/components/FirstScreen.vue";
import SwiperScreen from "~/components/SwiperScreen.vue";
import ImageScreen from "~/components/ImageScreen.vue";
import TextScreen from "~/components/TextScreen.vue";

export default defineComponent({
  name: "index",
  components: {TextScreen, ImageScreen, SwiperScreen, FirstScreen},
  setup() {

    const {data: cardArray} = useFetch('/api/posts');

    const { $pageScrollState } = useNuxtApp();
    console.log($pageScrollState);

    return {
      cardArray,
    };
  },
})
</script>

<style scoped lang="scss">
  @import "@/assets/pageStyles/index.scss";
</style>