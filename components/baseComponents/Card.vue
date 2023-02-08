<template>
    <div class="card">
        <div class="card-image card-item">
            <img
                class="card-image__img"
                :src="card.image_path"
                alt="Я и без того знаю, какой ты Петросян"
            >
            <span class="card-image__caption">
                {{ card.image_title }}
            </span>
        </div>
        <span class="card__text card-item">
            {{ card.article }}
        </span>
        <div class="card-audio card-item">
            <audio
                class="card-audio__associated-audio"
                controls
            >
                <source
                    :src="card.audio_path"
                    type="audio/mpeg"
                >
                Your browser does not support the audio element.
            </audio>
        </div>
        <div class="card-footer card-item">
            <span class="card-footer__author">Автор поста: {{ card.author ?? 'anonymous' }}</span>
            <span class="card-footer__created-at">Создано: {{ card.created_at }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineComponent({
        name: "Card",
        props: {
            card: {
                type: Object,
                required: true,
            },
        },
        setup() {
            return {};
        },
    });

</script>

<style scoped lang="scss">
@import "@/assets/styles/base/component.scss";
</style>