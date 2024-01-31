<template>
  <div class="card-rating">
    <div class="rating" v-for="waste in props.gatheredWastes" :key="waste.waste_id">
      <div class="rating">
        <img
          :src="getSrcImageByPk(waste.waste_id, props.wasteTypesDict)"
          alt=""
          class="cirlce-img"
        />
        {{waste.amount}} {{getWasteByPk(waste.waste_id, props.wasteTypesDict)?.unit_of_waste}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { wasteDictImagesDict } from "..//..//..//..//consts//waste//wasteImages.js";

function getWasteByPk(pk, wasteTypes) {
  if (!wasteTypes || !pk) return null;
  return wasteTypes.find((key) => key.pk === pk);
}

function getSrcImageByPk(pk, wasteTypes) {
  const nameStatus = getWasteByPk(pk, wasteTypes)?.name;
  if (nameStatus) {
    return require(`@/${wasteDictImagesDict[nameStatus]}`);
  }
  return "";
}

const props = defineProps(["wasteTypesDict", "gatheredWastes"]);

</script>
