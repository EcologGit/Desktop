<template>
  <div class="card-rating">
    <div class="rating">
      <img
        src="@/assets/imgs/circle_bus.png"
        alt=""
        class="cirlce-img"
      />
      {{ props.rating.avg_availability.toFixed(2) }}
    </div>
    <div class="rating">
      <img
        src="@/assets/imgs/circle_sortPoint.png"
        alt=""
        class="cirlce-img"
      />
      {{ props.rating.avg_beauty.toFixed(2) }}
    </div>
    <div class="rating">
      <img
        src="@/assets/imgs/circle_flower.png"
        alt=""
        class="cirlce-img"
      />
      {{ props.rating.avg_purity.toFixed(2) }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['rating'])
</script>