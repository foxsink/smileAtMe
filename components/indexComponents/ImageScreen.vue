<template>
    <div class="image-screen">
        <Swiper
            :modules="modules"
            :loop="false"
            :slidesPerView="1"
        >
            <SwiperSlide>
                <div class="image-screen__description image-screen-item">
                    Здесь описание экрана с картинкой
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="image-screen__picture image-screen-item">
                    <img
                        class="image-screen-item__img"
                        src="@/src/images/screen-pictures/image-example.png"
                        alt="Здесь должнен был быть пример картинок внутри карточек"
                    >
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script lang="ts">
    import { Navigation, Pagination } from 'swiper'
    export default defineComponent({
        name: 'ImageScreen',
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
@import "assets/styles/imageScreen/component.scss";
</style>
