<script setup>
import { ref } from "vue";
import "./style.css";

const props = defineProps(['hasNextData', 'isLoading'])
const isClick = ref(false);
const startScrollCoordinateX = ref(null);
const sliderTouch = ref(null);
const isLoadReady = ref(false);


const handleMouseOver = (event) => {
  if (isClick.value && startScrollCoordinateX) {
    isLoadReady.value = false;
    sliderTouch.value.scrollLeft +=
      (startScrollCoordinateX.value - event.clientX) * 2;
    if (sliderTouch.value.scrollLeft >= (sliderTouch.value.scrollWidth - sliderTouch.value.clientWidth - 100)) {
      isLoadReady.value = true;
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
      <slot name="sliderContent" :isLoadReady="true"></slot>
      <div style="display: flex; justify-content: center; align-items: center; height: 100%">
        <div
          v-show="isLoadReady && props.hasNextData && props.isLoading"
          class="animation-logo logo-animation"
        ></div>
      </div>
    </div>
  </div>
</template>
