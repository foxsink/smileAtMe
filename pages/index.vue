<template>
  <div class="index-page">
    <div class="index-page-content">
      <NuxtPage />
    </div>
    <div class="index-page-navigation">
      <div class="index-page-navigation__up index-page-navigation-item">
        <span
            @click.prevent="handler(-1)"
            class="index-page-navigation__text"
        >
          Выше
        </span>
      </div>
      <div class="index-page-navigation__down index-page-navigation-item">
                <span
                    @click.prevent="handler(1)"
                    class="index-page-navigation__text"
                >
          Ниже
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const router = useRouter();
  const path = computed(() => router.currentRoute.value.path);
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
  const handler = (delta: number) => {
    if (!isWaiting.value) {
      if (delta > 0 && (pageScrollState.value < (pagesList.length - 1))) {
        pageScrollState.value += 1;
      }
      if (delta < 0 && (pageScrollState.value > 0)) {
        pageScrollState.value -= 1;
      }console.log(`${pagesList[pageScrollState.value]}`)
      router.push(`${pagesList[pageScrollState.value]}`)
      runTimer();
    }
  };
  const wrapper = (e: WheelEvent) => handler(e.deltaY);

  onBeforeMount(() => {
    if (path.value === '/') {
      navigateTo('/welcome');
    }
    watch(path, (newVal) => {
      if (newVal === '/') {
        navigateTo('/welcome');
      }
    })
  })
  onMounted(() => {
    if (process.client) {
      window.addEventListener('wheel', wrapper);
    }
  })
  onBeforeUnmount(() => {
    window.removeEventListener('wheel', wrapper);
  })
</script>

<style scoped lang="scss">
  @import "@/assets/styles/base/pages/index/component.scss";
</style>