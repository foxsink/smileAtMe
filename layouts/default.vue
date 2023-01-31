<template>
  <header>
    <div class="navigation">
      <div class="container">
        <div class="navigation-list">
          <ul>
            <li><nuxt-link href="/" class="active">На главную</nuxt-link></li>
            <li><nuxt-link href="/card/create" class="active">Создать свою карточку</nuxt-link></li>
            <li><nuxt-link href="/gallery">Карточки других пользователей</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <main>
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

<style scoped lang="scss">
  @import "Navigation-list";
</style>