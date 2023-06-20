<script setup lang="ts">

import ISkeleton from '@/components/5shared/ISkeleton.vue';
import ICloseMark from '@/components/4entities/ICloseMark.vue';
</script>

<template>
  <div class="i-bottom-block">
    <i-skeleton
      width="100%"
      height="36px"
    />
    <i-close-mark class="i-bottom-block__close" />
  </div>
</template>

<style lang="scss">
  .i-bottom-block {
    padding: 18px 68px 18px 18px;
    box-sizing: border-box;
    position: relative;
    background: #262626;
    border: 1px solid #4D4D4D;
    border-radius: 12px;

    &__close {
      position: absolute;
      top: 14px;
      right: 30px;
    }
  }
</style>