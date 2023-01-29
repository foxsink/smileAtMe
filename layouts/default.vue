<template>
  <div>
    <div class="navigation">
      <div class="container">
        <div class="navigation-list">
          <ul>
            <li><a href="#" class="active">На главную</a></li>
            <li><a href="#">Создать свою карточку</a></li>
            <li><a href="#">Карточки других пользователей</a></li>
          </ul>
        </div>
      </div>
    </div>
  <slot />
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped lang="scss">
  @import "Navigation-list";
</style>