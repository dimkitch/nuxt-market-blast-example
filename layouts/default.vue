<template>
  <div id="app" class="default-layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';

  @Component({ components: { Header, Footer } })
  export default class Default extends Vue {}
</script>

<style lang="less">
  .default-layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
</style>
