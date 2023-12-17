<script setup>
const props = defineProps(["availability", "beauty", "purity"]);
</script>

<template>
  <p>Рейтинг</p>
  <div class="list-points">
    <div class="point">
      <div class="rate">
        <img
          :src="require('@/assets/imgs/circle_bus.png')"
          alt=""
          class="cirlce-img"
        />
        Доступность
      </div>
      <div>{{ props.availability.toFixed(2) }}</div>
    </div>
    <div class="point">
      <div class="rate">
        <img
          :src="require('@/assets/imgs/circle_flower.png')"
          alt=""
          class="cirlce-img"
        />
        Красота
      </div>
      <div>{{ props.beauty.toFixed(2) }}</div>
    </div>
    <div class="point">
      <div class="rate">
        <img
          :src="require('@/assets/imgs/circle_sortPoint.png')"
          alt=""
          class="cirlce-img"
        />
        Чистота
      </div>
      <div>{{ props.purity.toFixed(2) }}</div>
    </div>
  </div>
</template>
