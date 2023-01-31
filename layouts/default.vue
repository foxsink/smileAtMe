<template>
  <div class="body-container">
    <header class="main-container">
      <nav class="navigation">
        <div class="navigation-background"></div>
        <div class="navigation-border"></div>
        <ul class="navigation__list navigation-list">
          <nuxt-link href="/" class="navigation-list-link">
            <li class="navigation-list-link__item">
              На главную
            </li>
          </nuxt-link>
          <nuxt-link href="/card/create" class="navigation-list-link">
            <li class="navigation-list-link__item">
              Создать карточку
            </li>
          </nuxt-link>
          <nuxt-link href="/gallery" class="navigation-list-link">
            <li class="navigation-list-link__item">
                Карточки пользователей
            </li>
          </nuxt-link>
        </ul>
      </nav>
    </header>
    <main class="main-container">
      <slot />
    </main>
    <footer class="main-container">
  Ты лох
    </footer>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>