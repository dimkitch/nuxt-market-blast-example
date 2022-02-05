<template>
  <section class="index-page-preview">
    <div class="container">
      <h1 class="index-page-preview__title text-center text-danger title-xl">
        {{ title }}
      </h1>
      <VideoBlock :src="require('@/assets/video/fon-blast.mp4')" />
    </div>
  </section>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import VideoBlock from '@/components/block/VideoBlock.vue';

  @Component({
    components: { VideoBlock },
  })
  export default class IndexPagePreview extends Vue {
    title: string = 'Покори галактику вместе с нашим супероружием!';
  }
</script>

<style lang="less">
  body {
    background-color: @body-main;
  }

  .index-page-preview {
    margin: 40px 0;
    // .index-page-preview__title
    &__tile {
      text-align: center;
    }
  }
</style>
