<script setup>
import { defineProps, inject } from "vue";
const props = defineProps({
  route: String || Object,
  namePage: String,
  defaultImgSrc: String,
  hoveringImgSrc: String,
  nameItem: String,
  height: {
    type: Number,
    default: 18,
  },
  width: {
    type: Number,
    default: 18,
  },
  isHidden: {
    type: Boolean,
    default: false,
  },
});
const { visiblePage, setVisiblePage } = inject("visiblePage");
const { hoveringPage, setHoveringPage } = inject("hoveringPage");

const getSrc = (src) => {
  return require(`@/${src}`);
};
const mousemoveHandlerNavItems = (newHoveringIcon) => {
  setHoveringPage(newHoveringIcon);
};
const mouseOutHandlerNavItems = () => {
  setHoveringPage("");
};
const changePage = (newPage) => {
  setVisiblePage(newPage);
};
</script>

<template>
  <router-link
    :to="props.route"
    class="a-header"
    @click="changePage(props.namePage)"
    @mousemove="mousemoveHandlerNavItems(props.namePage)"
    @mouseleave="mouseOutHandlerNavItems()"
    v-if="!props.isHidden"
  >
    <img
      class="a-img"
      v-show="visiblePage != props.namePage && hoveringPage != props.namePage"
      :width="`${props.width}`"
      :height="`${props.height}`"
      :src="getSrc(props.defaultImgSrc)"
      alt="Иконка Обзор"
    />
    <img
      class="a-img"
      v-show="visiblePage == props.namePage || hoveringPage == props.namePage"
      :width="`${props.width}`"
      :height="`${props.height}`"
      :src="getSrc(props.hoveringImgSrc)"
      alt="Иконка Обзор"
    />
    <p
      :class="{
        'active-page':
          visiblePage == props.namePage || hoveringPage == props.namePage,
      }"
    >
      {{ props.nameItem }}
    </p>
  </router-link>
</template>
