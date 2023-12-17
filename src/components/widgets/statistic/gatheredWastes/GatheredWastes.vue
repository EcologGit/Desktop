<script setup>
import { wasteDictImagesDict } from '../../../../consts/waste/wasteImages.js'
const props = defineProps(['gatheredWastes']);

console.log(props)
</script>

<template>
  <div class="object-points" v-if='props.gatheredWastes?.length'>
    <p>Собранные отходы</p>
    <div class="list-points">
      <div class="point" v-for='waste in props.gatheredWastes' v-bind:key='waste.type'>
        <div class="rate">
          <img
            :src="require(`@/${wasteDictImagesDict[waste.type]}`)"
            alt=""
            class="cirlce-img"
          />
          {{waste.type}}
        </div>
        <div>{{ waste.sum_amount }} {{waste.unit}}</div>
      </div>
    </div>
  </div>
</template>
