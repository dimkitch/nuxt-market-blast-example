<template>
  <div class="weapon-detail">
    <div
      class="weapon-detail__img"
      :style="{ backgroundImage: `url(${product.images[0]})` }"
    ></div>
    <div class="weapon-detail__wrapper">
      <div class="weapon-detail__info">
        <h2 class="weapon-detail__info-title title-lg text-danger">
          {{ product.title }}
        </h2>
        <p class="weapon-detail__info-description txt-xl">
          {{ product.description }}
        </p>
        <div class="weapon-detail__info-price">
          <p class="txt-xl">Цена:</p>
          <p class="txt-xl text-danger">
            {{ formatedPrice(product.price) }} y.e
          </p>
        </div>
      </div>
      <div class="weapon-detail__actions">
        <CustomButton @click="onSubmit()">Купить</CustomButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import { IProduct } from '@/types/features/Product';
  import { cashSpacer } from '@/helpers/cashSpacer';
  import CustomButton from '@/components/common/CustomButton.vue';
  @Component({ components: { CustomButton } })
  export default class WeaponDetailProduct extends Vue {
    product: IProduct = {
      id: 6,
      title: 'Бластер zxc',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      images: [require('@/assets/img/blaster/4.png')],
      price: 25000,
    };

    formatedPrice(value: number) {
      return cashSpacer(value, ' ');
    }

    onSubmit() {
      // вызываем экшен из стора - отправка запроса на покупку
    }
  }
</script>

<style lang="less">
  .weapon-detail {
    display: grid;
    grid-template-columns: 340px auto;
    gap: 50px;
    background-color: rgba(@body-main, 0.6);
    padding: 20px;

    // .weapon-detail__img
    &__img {
      width: 100%;
      height: 400px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    // .weapon-detail__wrapper
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    // weapon-detail__info
    .weapon-detail__info {
      margin-bottom: 50px;
      // .weapon-detail__info-title
      &-title {
        margin-bottom: 20px;
      }

      // .weapon-detail__info-description
      &-description {
        margin-bottom: 20px;
      }

      // .weapon-detail__info-price
      &-price {
        display: grid;
        grid-template-columns: auto auto;
        gap: 50px;
      }
    }

    // .weapon-detail__actions
    &__actions {
    }
  }
</style>
