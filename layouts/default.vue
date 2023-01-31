<template>
  <header>
    <nav class="navigation">
      <ul class="navigation__list navigation-list">
        <li class="navigation-list__item navigation-list-item">
          <nuxt-link href="/" class="navigation-list-item__link">
            На главную
          </nuxt-link>
        </li>
        <li class="navigation-list__item navigation-list-item">
          <nuxt-link href="/card/create" class="navigation-list-item__link">
            Создать свою карточку
          </nuxt-link>
        </li>
        <li class="navigation-list__item navigation-list-item">
          <nuxt-link href="/gallery" class="navigation-list-item__link">
            Карточки других пользователей
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
  <main class="main-container">
    <slot />
  </main>
  <footer>
Ты лох
  </footer>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>