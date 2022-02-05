<template>
  <div class="weapon-detail-preview">
    <VideoBlock :src="require('@/assets/video/fon-weapon-detail.mp4')" />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import VideoBlock from '@/components/block/VideoBlock.vue';
  @Component({ components: { VideoBlock } })
  export default class WeaponDetailPreview extends Vue {}
</script>
