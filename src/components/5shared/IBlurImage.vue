<script setup lang="ts"></script>

<template>
  <div class="i-blur-image">
    <img
      src="@/assets/images/blurImage.png"
      alt="blurImage"
    >
  </div>
</template>

<style lang="scss">
  .i-blur-image {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    border-radius: 8px;
  }
</style>