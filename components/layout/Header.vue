<template>
  <header class="header">
    <div class="container">
      <router-link :to="{ name: 'index' }" class="txt-xl text-danger logo">
        <img src="@/assets/img/atomic-bomb.png" alt="Atom" class="logo__img" />
        <span class="logo__text">Blaster</span>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  @Component({
    components: {},
  })
  export default class Header extends Vue {}
</script>

<style lang="less">
  .header {
    width: 100%;
    height: 80px;
    background-color: @body-main;
    display: flex;
    align-items: center;
  }
  .logo {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    &:hover {
      .logo__text {
        color: @danger-dark;
        &::after {
          bottom: -2px;
          opacity: 1;
          transform: scale(1);
        }
      }
    }
    // .logo__img
    &__img {
      height: 50px;
    }
    // .logo__text
    &__text {
      transition: @transition;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: @danger;
        opacity: 0;
        transform: scale(0);
        transition: @transition;
      }
    }
  }
</style>
