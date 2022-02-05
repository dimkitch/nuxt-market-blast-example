<template>
  <header class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-content__text txt-xs text-secondary">
          Данный проект несёт в себе исключительно развлекательный характер
        </p>
        <p class="footer-content__text txt-xs text-secondary">
          Все видео ресурсы были скачаны бесплатно с портала
          https://elements.envato.com/
        </p>
        <p class="footer-content__text txt-xs text-secondary">
          Все изображения были скачаны бесплатно с портала www.freepng.ru
        </p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  @Component({
    components: {},
  })
  export default class Footer extends Vue {}
</script>

<style lang="less">
  .footer {
    background-color: @body-main;
    // .footer-content
    &-content {
      padding: 30px 0;
    }
  }
</style>
