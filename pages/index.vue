<template>
  <NuxtPage />
  <div class="screen-navigation">
    <div class="screen-navigation__up screen-navigation__item">
      Выше
    </div>
    <div class="screen-navigation__down screen-navigation__item">
      Ниже
    </div>
  </div>
</template>

<script lang="ts" setup>
  const router = useRouter();
  const path = computed(() => router.currentRoute.value.path);
  if (path.value === '/') {
    navigateTo('/welcome');
  }
  const pagesList = [
    '/welcome',
    '/image-example',
    '/text-example',
    '/audio-example',
    '/example',
  ];

  const pageScrollState = ref(pagesList.indexOf(path.value) < 0 ? 0 : pagesList.indexOf(path.value));
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
  onMounted(() => {
    if (process.client) {
      window.addEventListener('wheel', handler);
    }
  })
  onBeforeUnmount(() => {
    window.removeEventListener('wheel', handler);
  })
</script>

<style scoped lang="scss">
  @import "@/assets/styles/base/pages/index/index.scss";
</style>