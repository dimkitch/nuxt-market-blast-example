<template>
  <video :src="src" autoplay loop muted class="video-block"></video>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'nuxt-property-decorator';
  @Component({ components: {} })
  export default class VideoBlock extends Vue {
    @Prop({ default: '' }) src!: string;
  }
</script>

<style lang="less">
  // .video-block
  .video-block {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    pointer-events: none;
    touch-action: none;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.3);
    z-index: -1;
  }
</style>
