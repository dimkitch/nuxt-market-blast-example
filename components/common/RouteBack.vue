<template>
  <router-link class="route-back" :to="{ name: routePath }">
    <BackIcon class="route-back__icon" />
    <span class="route-back__text text-main txt-lg"><slot>Назад</slot></span>
  </router-link>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import BackIcon from '@/components/icon/BackIcon.vue';
  @Component({
    components: { BackIcon },
  })
  export default class BackRoute extends Vue {
    @Prop({ default: '#fff' }) color!: string;
    @Prop({ default: 'index' }) routePath!: string;
  }
</script>

<style lang="less">
  .route-back {
    display: inline-flex;
    align-items: center;
    margin: 20px 0;
    // .route-back__icon
    &__icon {
      margin-right: 10px;
    }
    // .route-back__text
    &__text {
      margin-top: 3px;
    }
  }
</style>
