<template>
  <div class="body-container">
    <header class="main-container main-navigation">
      <nav class="navigation">
        <div class="navigation-background"></div>
        <div class="navigation-border"></div>
        <Swiper
            :modules="modules"
            :slides-per-view="1"
            :loop="false"
            navigation
            :pagination="{clickable: true}"
            class="navigation-list"
        >
          <SwiperSlide>
            <nuxt-link href="/" class="navigation-list-item">
              <span class="navigation-list-item__text">
                На главную
              </span>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link href="/card/create" class="navigation-list-item">
              <span class="navigation-list-item__text">
                Создать карточку
              </span>
            </nuxt-link>
          </SwiperSlide>
          <SwiperSlide>
            <nuxt-link href="/gallery" class="navigation-list-item">
              <span class="navigation-list-item__text">
                Карточки пользователей
              </span>
            </nuxt-link>
          </SwiperSlide>
        </Swiper>
      </nav>
    </header>
    <main class="main-container">
      <slot />
    </main>
  </div>
</template>

<script>
import {Navigation} from "swiper";

export default {
  name: "default",
  setup() {
    return {
      modules: [Navigation],
    }
  }
}
</script>

<style scoped>

</style>