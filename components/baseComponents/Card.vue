<template>
    <div class="card">
        <div class="card-column">
            <ContentAdditionalButtons
                v-for="(element, index) in cardsData.elements"
                :key="`card-column-element-${index}`"
                :tagData="element"
                :globalAttrs="cardsData.globalAttrs"
                class="card-column__item"
            />
        </div>


        <div class="card-footer card-item">
            <span class="card-footer__author">Автор поста: {{ card.author ?? 'anonymous' }}</span>
            <span class="card-footer__created-at">Создано: {{ card.created_at }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import ContentAdditionalButtons from "~/components/baseComponents/ContentAdditionalButtons.vue";

    export default defineComponent({
        name: "Card",
        components: {ContentAdditionalButtons},
        props: {
            card: {
                type: Object,
                required: true,
            },
        },
        setup(props) {
            const {card} = toRefs(props);
            const cardsData = ref({
                globalAttrs: {
                    class: 'card-column__element',
                },
                elements: [
                    {
                        elem: 'img',
                        innerProps: {
                            src: card.value.image_path,
                            alt: 'Я и без того знаю, какой ты Петросян',
                        },
                    },
                    {
                        text: card.value.image_title,
                    },
                    {
                        text: card.value.article,
                    },
                    {
                        elem: 'audio',
                        text: 'Куда картинку дел!?',
                        innerProps: {
                            src: card.value.audio_path,
                            class: 'card-audio',
                            controls: true,
                            type: 'audio/mpeg',
                        },

                    },
                ],
            });

            return {
                cardsData,
            };
        },
    });

</script>

<style scoped lang="scss">
@import "assets/styles/base/card/component.scss";
</style>
