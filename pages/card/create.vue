<template>
  <NuxtLayout>
    <div class="card-create">
      <div class="card-create-picture">
        <div class="card-create-picture-image">
          <div class="card-create-picture-image__remove-btn"></div>
          <div class="card-create-picture-image__upload-btn"></div>
          <div class="card-create-picture-image__img"></div>
        </div>
        <div class="card-create-picture-caption">
          <div class="card-create-picture-caption__remove-btn"></div>
          <div class="card-create-picture-caption__text-field"></div>
        </div>
      </div>
      <div class="card-create-text">
        <div class="card-create-text__remove-btn"></div>
        <div class="card-create-text__text-field"></div>
      </div>
      <div class="card-create-audio">
        <div class="card-create-audio__remove-btn"></div>
        <div class="card-create-audio__upload-btn"></div>
        <div class="card-create-audio__audio"></div>
      </div>
      <div class="card-create-save">
        <div class="card-create-save__btn"></div>
      </div>
    </div>



  </NuxtLayout>
</template>

<script>
export default {
  name: "create.vue"
}
</script>

<style scoped lang="scss">

</style>