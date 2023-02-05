<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
  const router = useRouter();
  onBeforeUpdate(() => {
    if (router.currentRoute.value.path === '/') {
      navigateTo('/welcome');
    }
  });
  if (process.client) {
    const pagesList = [
        '/welcome',
        '/image-example',
        '/text-example',
        '/example',
    ];
    const pageScrollState = ref(pagesList.indexOf(router.currentRoute.value.path) ?? 0);
    const isWaiting = ref(false);

    const runTimer = () => {
      isWaiting.value = true;
      setTimeout(() => isWaiting.value = false, 500)
    };
    const handler = (e: WheelEvent) => {
      if (!isWaiting.value) {
        if (e.deltaY > 0 && (pageScrollState.value < (pagesList.length - 1))) {
          pageScrollState.value += 1;
        }
        if (e.deltaY < 0 && (pageScrollState.value > 0)) {
          pageScrollState.value -= 1;
        }
        router.push(`${pagesList[pageScrollState.value]}`)
        runTimer();
      }
    };

    window.addEventListener('wheel', handler);
  }
</script>

<style scoped lang="scss">
</style>