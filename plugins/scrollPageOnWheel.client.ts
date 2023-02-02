export default defineNuxtPlugin((NuxtApp) => {
    const pageScrollState = ref(0);
    const handler = (e: WheelEvent) => {
        if (e.deltaY > 0 && pageScrollState.value < 5) {
            pageScrollState.value += 1
        }
        if (e.deltaY < 0 && pageScrollState.value > 0) {
            pageScrollState.value -= 1
        }
        console.log(pageScrollState);
    };

    window.addEventListener('wheel', handler);

    return {
        provide: {
            pageScrollState,
        }
    }
})

