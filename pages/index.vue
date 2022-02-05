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

  @Component({ components: { IndexPagePreview, IndexPageSlider } })
  export default class IndexPage extends Vue {
    fetch() {
      // здесь делаем запрос к бэк-методам через стор, чтобы вытащить данные
    }
  }
</script>
