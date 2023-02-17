<template>
    <div class="card">
        <div class="card-column">
            <!--            <ContentAdditionalButtons class="card-image card-column-item" />-->
            <ContentAdditionalButtons
                v-for="(element, index) in elements"
                :key="`card-column-element-${index}`"
                :params="element"
                class="card-column-item"
            />
            <!--            <ContentAdditionalButtons class="card__text card-column-item" />-->
            <!--            <ContentAdditionalButtons class="card-audio card-column-item" />-->
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
            const elements = ref([
                {
                    // elem: '<img class="card-image__img" alt="Я и без того знаю, какой ты Петросян">',
                    elem: 'img',
                    innerProps: {
                        src: card.value.image_path,
                        class: "card-image__img",
                        alt: 'Я и без того знаю, какой ты Петросян',
                    },
                },
                {
                    // elem: 'span class="card-image__caption">{{ imageTitle }}</span>',
                    elem: 'span',
                    text: card.value.image_title,
                    innerProps: {
                        class: "card-image__caption",
                    },
                },
                {
                    // elem: '<span>{{ article }}</span>',
                    elem: 'span',
                    text: card.value.article,
                },
                {
                    // elem: '<audio class="card-audio__associated-audio" type="audio/mpeg" controls>Куда картинку дел!?</audio>',
                    elem: 'audio',
                    innerProps: {
                        src: card.value.audio_path,
                        class: 'card-audio__associated-audio',
                        controls: true,
                        type: 'audio/mpeg',
                        'v-text': 'Куда картинку дел!?',
                    },

                },
            ]);

            return {
                elements,
            };
        },
    });

</script>

<style scoped lang="scss">
@import "@/assets/styles/base/component.scss";
</style>
