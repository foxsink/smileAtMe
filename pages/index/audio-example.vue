<template>
    <AudioScreen :audioPathArray="cardArray.map((card) => card.audio_path)" />
</template>

<script>
    import AudioScreen from "~/components/indexComponents/AudioScreen.vue";

    export default defineComponent({
        name: "AudioExample",
        components: {AudioScreen},
        props: {
            cardArray: {
                type: Array,
                required: true,
            },
        },
    });
</script>

<style scoped>

</style>
