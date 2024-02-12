<template>
  <div
    :class="{
      'spin-background': isLoading && contentHasNotSizeWithoutLoading,
      centered: isCentered && isLoading,
    }"
  >
    <div :class="{ loader: isLoading }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import "./style.css";
import { toRefs } from "vue";
const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  contentHasNotSizeWithoutLoading: {
    type: Boolean,
    default: true,
  },
  isCentered: {
    type: Boolean,
    default: true,
  },
});
const { isLoading, contentHasNotSizeWithoutLoading, isCentered } =
  toRefs(props);
console.log(props.isLoading);
</script>
