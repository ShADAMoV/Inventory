<script setup lang="ts"></script>

<template>
  <div class="i-close-mark">
    <div class="i-close-mark__line-one" />
    <div class="i-close-mark__line-two" />
  </div>
</template>

<style lang="scss">
  .i-close-mark {
    position: relative;

    &__line-one, &__line-two {
      position: absolute;
      width: 16px;
      height: 2px;
      background: #FFFFFF;
    }

    &__line-one {
      transform: rotate(45deg);
    }

    &__line-two {
      transform: rotate(-45deg);
    }
  }
</style>