<template>
  <main class="main">
    <IndexPagePreview />
    <IndexPageSlider />
  </main>
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'nuxt-property-decorator';
  import IndexPagePreview from '@/components/pages/IndexPage/IndexPagePreview.vue';
  import IndexPageSlider from '@/components/pages/IndexPage/IndexPageSlider.vue';
  import { productStore } from '~/store';

  @Component({ components: { IndexPagePreview, IndexPageSlider } })
  export default class IndexPage extends Vue {
    async fetch() {
      // здесь делаем запрос к бэк-методам через стор, чтобы вытащить данные
      await productStore.GET_PRODUCT_LIST();
    }
  }
</script>
