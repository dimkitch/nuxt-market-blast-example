<template>
  <button
    @click="$emit('click')"
    class="btn text-md"
    :class="{
      'btn-md': size === 'md',
      'btn-lg': size === 'lg',
      'btn-sm': size === 'sm',
      'btn-danger': theme === 'danger',
      'btn-danger-outher': theme === 'danger-outher',
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  @Component({
    components: {},
  })
  export default class CustomButton extends Vue {
    @Prop({ default: 'md' }) size!: string;
    @Prop({ default: 'danger' }) theme!: string;
  }
</script>

<style lang="less">
  .btn {
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    outline: unset;
    border: 2px solid;
    padding: 15px;
    height: 50px;
    // .btn-danger
    &-danger {
      color: @light;
      background-color: @danger;
      border-color: @danger;
      &:hover {
        color: @danger;
        background-color: transparent;
        border-color: @danger;
      }
    }
    // .btn-danger-outher
    &-danger-outher {
      color: @danger;
      background-color: @light;
      border-color: @danger;
      &:hover {
        color: @light;
        background-color: @danger;
        border-color: @danger;
      }
    }

    // .btn-lg
    &-lg {
      width: 100%;
      border-radius: 50px;
    }

    // .btn-md
    &-md {
      min-width: 230px;
      border-radius: 40px;
    }
  }

  .btn--disabled {
    opacity: 0.24;
    cursor: wait !important;
  }
</style>
