<template>
  <main class="main page-weapon-detail">
    <WeaponDetailPreview />
    <div class="container">
      <RouteBack routePath="index" />
      <h1 class="page-weapon-detail__title title-lg">
        Страница товара класса: оружие
      </h1>
      <WeaponDetailProduct />
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';

  import WeaponDetailPreview from '@/components/pages/Weapon/WeaponDetail/WeaponDetailPreview.vue';
  import WeaponDetailProduct from '@/components/pages/Weapon/WeaponDetail/WeaponDetailProduct.vue';
  import RouteBack from '@/components/common/RouteBack.vue';
  import { productStore } from '~/store';

  @Component({
    components: { WeaponDetailPreview, WeaponDetailProduct, RouteBack },
  })
  export default class PageWeaponDetail extends Vue {
    async fetch() {
      const id = this.$route.params.id;
      await productStore.GET_ONE_PRODUCT(id);
    }
  }
</script>

<style lang="less">
  .page-weapon-detail {
    // .page-weapon-detail__title
    &__title {
      margin-bottom: 30px;
    }
  }
</style>
