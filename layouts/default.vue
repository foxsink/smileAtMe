<template>
  <header>
    <nav class="navigation">
      <ul class="navigation__list navigation-list">
        <nuxt-link href="/" class="navigation-list-link">
          <li class="navigation-list-link__item">
            На главную
          </li>
        </nuxt-link>
        <nuxt-link href="/card/create" class="navigation-list-link">
          <li class="navigation-list-link__item">
            Создать свою карточку
          </li>
        </nuxt-link>
        <nuxt-link href="/gallery" class="navigation-list-link">
          <li class="navigation-list-link__item">
              Карточки других пользователей
          </li>
        </nuxt-link>
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