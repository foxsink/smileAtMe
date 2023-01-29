<template>
  <NuxtLayout>
    <default></default>
  </NuxtLayout>
  <Card />
</template>

<script>
import Card from "~/src/Card.vue";
import Default from "~/layouts/default.vue";

export default {
  name: "index",
  components: {Default, Card}
}
</script>

<style scoped>

</style>