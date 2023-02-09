<template>
    <div class="text-screen">
        <Swiper
            :modules="modules"
            :slidesPerView="1"
            :breakpoints="breakpoints"
            :loop="false"
            navigation
            :pagination="{clickable: true}"
        >
            <SwiperSlide>
                <div class="text-screen__description text-screen-item">
                    Здесь описание экрана с картинкой
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="text-screen__picture text-screen-item">
                    <img
                        class="text-screen-item__img"
                        src="@/src/images/text-pictures/text-example.png"
                        alt="Здесь должнен был быть пример текстов внутри карточек"
                    >
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script lang="ts">
    import { Navigation, Pagination } from 'swiper'
    export default defineComponent({
        name: 'TextScreen',
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
  @import "assets/styles/textScreen/component.scss";
</style>
