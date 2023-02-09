<template>
    <SwiperScreen :cardArray="cardArray" />
</template>

<script>
    import SwiperScreen from "~/components/indexComponents/SwiperScreen.vue";

    export default defineComponent({
        name: "Example",
        components: {SwiperScreen},
        props: {
            cardArray: {
                type: Array,
                required: true,
            },
        },
        setup() {
        },
    });
</script>

<style scoped>

</style>
