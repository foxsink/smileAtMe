<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  name: "app",
  setup() {
    useHead({
      title: 'My awesome site',
      link: [
        {rel: "icon", type:"image/x-icon", href:'/public/favicon/favicon.ico'}
      ],
    });
    return {
    };
  },
})

</script>