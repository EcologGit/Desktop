<template>
  <div class="vue-modal-background" v-if="isVisible">
    <div
      class="vue-modal-content"
      :style="{
        width: width,
        height: height,
        flexDirection: directionContentModal,
      }"
      :class="modalClass"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import "./style.css";
import { toRefs } from "vue";
const props = defineProps({
  width: {
    type: String,
    default: "auto",
  },
  height: {
    type: String,
    default: "auto",
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
  modalClass: {
    type: Object,
  },
  directionContentModal: {
    type: String,
    default: "column",
  },
});

const { width, height, isVisible, modalClass, directionContentModal } =
  toRefs(props);
</script>
