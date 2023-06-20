<script setup lang="ts">
interface Props {
  width?: number
}

const props = defineProps<Props>()
</script>

<template>
  <div :style=`"width:"${width}px` class="i-skeleton" />
</template>

<style lang="scss">
  .i-skeleton {
    background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
    border-radius: 8px;
    width: 100%;
  }
</style>