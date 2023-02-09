<template>
    <div class="audio-screen">
        <Swiper
            :modules="modules"
            :slidesPerView="1"
            :breakpoints="breakpoints"
            :loop="false"
            navigation
            :pagination="{clickable: true}"
        >
            <SwiperSlide>
                <div class="audio-screen__description">
                    Здесь описание экрана с картинкой
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="audio-screen-container">
                    <div
                        v-for="(audioPath, index) in audioPathArray"
                        :key="`path-id-${index}`"
                        class="audio-screen__example audio-screen-item"
                    >
                        <audio
                            class="card-audio__associated-audio"
                            controls
                        >
                            <source
                                :src="audioPath"
                                type="audio/mpeg"
                            >
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script lang="ts">
    import {Navigation, Pagination} from 'swiper'
    import {PropType} from 'vue';
    export default defineComponent({
        name: 'AudioScreen',
        props: {
            audioPathArray: {
                type: Array as PropType<Array<string>>,
                required: true,
            },
        },
        setup () {
            const breakpoints = {
                810: {
                    slidesPerView: 2,
                },
            }

            return {
                breakpoints,
                modules: [Navigation, Pagination],
            }
        },
    })
</script>

<style lang="scss" scoped>
  @import "assets/styles/audioScreen/component.scss";
</style>
