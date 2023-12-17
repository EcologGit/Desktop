<template>
  <div class="statistics-card collected-trash">
    Собранный отходы
    <div class="card-rating profile">
      <div
        class="rating profile"
        v-for="waste in props.gathered_waste"
        :key="waste.type"
      >
        <div>
          <img
            :src="require(`@/${wasteDictImagesDict[waste.type]}`)"
            alt=""
            class="cirlce-img"
          />
          {{ waste.type }}
        </div>
        <div class="value-trash">{{ waste.sum_amount }} {{ waste.unit }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { wasteDictImagesDict } from "../../../../consts/waste/wasteImages.js";
const props = defineProps(['gathered_waste']);
</script>
