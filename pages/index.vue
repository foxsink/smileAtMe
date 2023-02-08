<template>
  <div class="index-page">
    <div class="index-page-content">
      <NuxtPage />
    </div>
    <div class="index-page-navigation">
      <div class="index-page-navigation__up index-page-navigation-item">
        Выше
      </div>
      <div class="index-page-navigation__down index-page-navigation-item">
        Ниже
      </div>
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
  @import "@/assets/styles/base/pages/index/component.scss";
</style>