<template>
  <section class="index-page-slider">
    <div class="container">
      <SliderProduct />
    </div>
  </section>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import SliderProduct from '@/components/slider/SliderProduct.vue';
  @Component({
    components: { SliderProduct },
  })
  export default class IndexPageSlider extends Vue {}
</script>

<style lang="less">
  .index-page-slider {
    margin: 80px 0;
  }
</style>
