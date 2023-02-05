<template>
  <SwiperScreen :card-array="cardArray" />
</template>

<script>
import SwiperScreen from "~/components/indexComponents/SwiperScreen.vue";

export default defineComponent({
  name: "example",
  components: {SwiperScreen},
  setup() {

    const {data: cardArray} = useFetch('/api/posts');

    return {
      cardArray,
    };
  },
});
</script>

<style scoped>

</style>