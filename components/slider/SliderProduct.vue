<template>
  <div class="slider-product">
    <div class="swiper" ref="slider">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <router-link
          class="swiper-slide slider-product__item text-main"
          v-for="product in products"
          :key="`product-weapon-${product.id}`"
          :to="{ name: 'product-weapon-id', params: { id: product.id } }"
        >
          <span
            class="slider-product__item-hover slider-product__item-hover--left-top"
          ></span>
          <span
            class="slider-product__item-hover slider-product__item-hover--right-top"
          ></span>
          <span
            class="slider-product__item-hover slider-product__item-hover--right-bottom"
          ></span>
          <span
            class="slider-product__item-hover slider-product__item-hover--left-bottom"
          ></span>
          <div class="slider-product__item-wrapper">
            <div
              class="slider-product__item-fon"
              :style="{ backgroundImage: `url(${product.images[0]})` }"
            ></div>
            <div class="slider-product__item-info">
              <h3 class="slider-product__item-title">{{ product.title }}</h3>
              <p class="slider-product__item-description txt-md">
                {{ product.description }}
              </p>
              <div class="slider-product__item-price txt-md">
                <p>Цена:</p>
                <p class="text-danger txt-md">
                  {{ formatedPrice(product.price) }} у.е.
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="swiper-button-prev" @click="sw.slidePrev()"></div>
      <div class="swiper-button-next" @click="sw.slideNext()"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'nuxt-property-decorator';
  import Swiper from 'swiper';
  import { IProduct } from '@/types/features/Product';
  import { cashSpacer } from '@/helpers/cashSpacer';

  @Component({
    components: {},
  })
  export default class SliderProduct extends Vue {
    sw: Swiper | null = null;

    products: Array<IProduct> = [
      {
        id: 1,
        title: 'Бластер х10000',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        images: [require('@/assets/img/blaster/1.png')],
        price: 25000,
      },
      {
        id: 2,
        title: 'Бластер х20000',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        images: [require('@/assets/img/blaster/2.png')],
        price: 250000,
      },
      {
        id: 3,
        title: 'Бластер первой серии',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        images: [require('@/assets/img/blaster/3.png')],
        price: 1000000,
      },
      {
        id: 4,
        title: 'Бластер захватчик',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        images: [require('@/assets/img/blaster/4.png')],
        price: 45000,
      },
      {
        id: 5,
        title: 'Бластер воин',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        images: [require('@/assets/img/blaster/2.png')],
        price: 78500,
      },
      {
        id: 6,
        title: 'Бластер zxc',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        images: [require('@/assets/img/blaster/4.png')],
        price: 25000,
      },
      {
        id: 7,
        title: 'Бластер Гендзю',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        images: [require('@/assets/img/blaster/3.png')],
        price: 4000000,
      },
    ];

    initSwiper() {
      //@ts-ignore
      this.sw = new Swiper(this.$refs.slider, {
        spaceBetween: 0,

        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        allowTouchMove: true,
        cssMode: true,
        slidesPerView: 3,
        simulateTouch: true,
        effect: 'cube',
      });
    }

    formatedPrice(value: number) {
      return cashSpacer(value, ' ');
    }

    mounted() {
      if (process.server) return;
      this.initSwiper();
    }

    beforeDestroy() {
      if (this.sw && !this.sw.destroyed) this.sw.destroy();
    }
  }
</script>

<style lang="less">
  .slider-product {
    position: relative;
    padding: 0 80px;

    // .slider-product__item
    &__item {
      border-radius: 6px;
      padding: 20px;
      margin: 0;

      cursor: pointer;

      // .slider-product__item-hover
      &-hover {
        position: absolute;
        width: 50%;
        height: 50%;
        z-index: 1;
        &:hover {
          & ~ .slider-product__item-wrapper {
            box-shadow: 0px 0px 12px 2px rgba(@info, 0.95);
          }
        }

        // .slider-product__item-hover--left-top
        &--left-top {
          left: 0;
          top: 0;
          &:hover {
            & ~ .slider-product__item-wrapper {
              transform: skew(1deg, 0deg) rotate3d(1, 0, 0, 10deg);
            }
          }
        }
        // .slider-product__item-hover--right-top
        &--right-top {
          right: 0;
          top: 0;
          &:hover {
            & ~ .slider-product__item-wrapper {
              transform: skew(0deg, -1deg) rotate3d(1, 0, 0, 10deg);
            }
          }
        }
        // .slider-product__item-hover--right-bottom
        &--right-bottom {
          right: 0;
          bottom: 0;
          &:hover {
            & ~ .slider-product__item-wrapper {
              transform: skew(1deg, 0deg) rotate3d(1, 0, 0, -10deg);
            }
          }
        }
        // .slider-product__item-hover--left-bottom
        &--left-bottom {
          left: 0;
          bottom: 0;
          &:hover {
            & ~ .slider-product__item-wrapper {
              transform: skew(0deg, -1deg) rotate3d(1, 0, 0, -10deg);
            }
          }
        }
      }

      // .slider-product__item-wrapper
      &-wrapper {
        box-shadow: 0px 0px 12px 1px rgba(@info, 0.75);
        background-color: rgba(@body-main, 0.6);
        padding: 20px;
        transition: @transition;
      }

      // .slider-product__item-fon
      &-fon {
        height: 180px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 20px;
      }

      // .slider-product__item-info
      &-info {
      }

      // .slider-product__item-title
      &-title {
        margin-bottom: 20px;
      }

      // .slider-product__item-description
      &-description {
        margin-bottom: 16px;
      }

      // .slider-product__item-price
      &-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
