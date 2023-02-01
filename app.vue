<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script lang="ts">
export default defineComponent({


  name: "app",
  setup() {
    useHead({
      title: 'My awesome site',
      link: [
        {rel: "icon", type:"image/x-icon", href:'/_nuxt/assets/favicon/favicon.ico'}
      ],
    });
    return {
    };
  },
})

</script>