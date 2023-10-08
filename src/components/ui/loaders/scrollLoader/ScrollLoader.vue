<script setup>
import "./style.css";

const props = defineProps(["isLoading"]);
</script>

<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    "
  >
    <div v-show="props.isLoading" class="animation-logo logo-animation"></div>
  </div>
</template>
