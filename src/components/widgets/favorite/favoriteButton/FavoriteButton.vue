<script setup>
import { defineProps, ref } from "vue";
import { smallFavoriteButtonStates } from "@/consts/favorite/favoriteButtonStates.js";
import { favoritesUrls } from "@/components/apiUrls/favorites/favoritesUrls.js";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";

const props = defineProps({
  isSelected: Boolean,
  objType: String,
  objId: Number,
  isHidden: {
    type: Boolean,
    default: false,
  },
  favoriteButtonState: {
    type: Array,
    default: smallFavoriteButtonStates
  },
  classButton: {
    type: String,
    default: 'a-circle-icon'
  },
  classImg: {
    type: String,
    default: 'cirlce-img'
  }
});
const isSelected = ref(props.isSelected);
const upHere = ref(false);
const favoriteLink = favoritesUrls.createFavorite(props.objType, props.objId);

const getIconSrcByState = (state) => {
  return require(`@/${props.favoriteButtonState[state]}`);
};

const getImgSrc = () => {
  if (isSelected.value === false && upHere.value === false) {
    return getIconSrcByState("defaultNotSelected");
  } else if (isSelected.value === false && upHere.value === true) {
    return getIconSrcByState("hoverNotSelected");
  } else if (isSelected.value === true && upHere.value === false) {
    return getIconSrcByState("defaultSelected");
  }
  return getIconSrcByState("hoverSelected");
};

const handleClick = () => {
  if (!isSelected.value) {
    baseApi.post(favoriteLink);
  } else {
    baseApi.delete(favoriteLink);
  }
  isSelected.value = !isSelected.value;
};

const handleMouseOver = () => {
  upHere.value = true;
};

const handleMouseLeave = () => {
  upHere.value = false;
};
</script>

<template>
  <button
    :class="props.classButton"
    style="background: none; border: none"
    @click="handleClick"
    @mousemove="handleMouseOver"
    @mouseleave="handleMouseLeave"
    alt="Добавить в избранное"
    v-show='!props.isHidden'
  >
    <img :class="props.classImg" :src="getImgSrc()" />
  </button>
</template>
