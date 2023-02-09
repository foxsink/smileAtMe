<template>
    <div class="first-screen">
        <div class="first-screen__text first-screen__text_upper first-screen-item">
            Привет! Ты зашел на наш замечательный проект,
            цель которого в создании интересных и смешных карточек,
            которые состоят из картинки,
            подписи к ней, основного текста и аудио-контента,
            в сумме они должны создавать композицию, которой можно поделиться с друзьями.
        </div>
        <div class="first-screen__text first-screen__text_center first-screen-item">
            Для своей карточки ты можешь использовать любые источники, но имей ввиду,
            что мы проводим модерацию созданных карточек, так как контент в них может
            носить оскорбительный или любой другой неподобающий характер.
        </div>
        <div class="first-screen__text first-screen__text_bottom first-screen-item">
            Ниже будет подробная инструкция о том, как ты можешь создать свою карточку.
            На последней странице ты можешь найти примеры наших карточек, а в разделе "карточки пользователей"
            можешь ознакомиться с примерами, созданными другими людьми (<del>или роботами?</del>)
        </div>
    </div>
</template>

<script lang="ts">
    export default defineComponent({
        name: "FirstScreen",
        setup() {
        },
    });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/firstScreen/component.scss";
</style>
