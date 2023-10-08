<script setup>
import { ref } from "vue";
import "./styles.css";

const props = defineProps(['setIsLoadReady'])
const isClick = ref(false);
const startScrollCoordinateX = ref(null);
const sliderTouch = ref(null);


const handleMouseOver = (event) => {
  if (isClick.value && startScrollCoordinateX) {
    sliderTouch.value.scrollLeft +=
      (startScrollCoordinateX.value - event.clientX) * 2;
    if (sliderTouch.value.scrollLeft >= (sliderTouch.value.scrollWidth - sliderTouch.value.clientWidth - 100)) {
      props.setIsLoadReady(true);
    }
    else {
      props.setIsLoadReady(false);
    }
    startScrollCoordinateX.value = event.clientX;
  }
};
const mouseDownHandler = (event) => {
  event.preventDefault();
  isClick.value = true;
  startScrollCoordinateX.value = event.clientX;
  const once = {
    once: true,
  };
  window.addEventListener(
    "mouseup",
    () => {
      isClick.value = false;
      startScrollCoordinateX.value = null;
      window.removeEventListener("mouseover", handleMouseOver);
    },
    once
  );
  window.addEventListener("mouseover", handleMouseOver);
};
</script>

<template>
  <div style="display: flex; flex-direction: row; gap: 20px; cursor: default">
    <div
      class="small-list events custom-slider-small-list small-list-container"
      ref="sliderTouch"
      @mousedown="mouseDownHandler"
    >
      <slot name="sliderContent"></slot>
    </div>
  </div>
</template>
