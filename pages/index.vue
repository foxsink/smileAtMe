<template>
    <div class="index-page">
        <div class="index-page-content">
            <NuxtPage :cardArray="cardArray" />
        </div>
        <div class="index-page-navigation">
            <div class="index-page-navigation__up index-page-navigation-item">
                <span
                    class="index-page-navigation__text"
                    @click.prevent="handler(-1)"
                >
                    Выше
                </span>
            </div>
            <div class="index-page-navigation__down index-page-navigation-item">
                <span
                    class="index-page-navigation__text"
                    @click.prevent="handler(1)"
                >
                    Ниже
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const {data: cardArray} = useFetch('/api/cards');
    const router = useRouter();
    const path = computed(() => router.currentRoute.value.path);
    const pagesList = [
        '/welcome',
        '/image-example',
        '/text-example',
        '/audio-example',
        '/example',
    ];

    const pageScrollState = computed(() => pagesList.indexOf(path.value));
    const isWaiting = ref(false);
    const runTimer = () => {
        isWaiting.value = true;
        setTimeout(() => isWaiting.value = false, 350)
    };
    const handler = (delta: number) => {
        if (!isWaiting.value) {
            const move = ref(0);

            if ((delta > 0) && (pageScrollState.value < (pagesList.length - 1))) {
                move.value = 1;
            }
            if ((delta < 0) && (pageScrollState.value > 0)) {
                move.value = -1;
            }
            router.push(`${pagesList[pageScrollState.value + move.value]}`)
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
