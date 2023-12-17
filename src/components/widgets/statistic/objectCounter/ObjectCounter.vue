<template>
  <div class="statistics-card object-counter">
    Счетчик объектов
    <div class="card-rating profile">
      <div class="rating profile">
        <div>
          <img
            src="../../../../assets/imgs/circle_places.png"
            alt=""
            class="cirlce-img"
          />
          Места
        </div>
        <div class="value-trash">{{ props.place_count }}</div>
      </div>
      <div class="rating profile">
        <div>
          <img
            src="../../../../assets/imgs/circle_routes.png"
            alt=""
            class="cirlce-img"
          />
          Маршруты
        </div>
        <div class="value-trash">{{ props.route_count }}</div>
      </div>
      <div class="rating profile">
        <div>
          <img
            src="../../../../assets/imgs/circle_events.png"
            alt=""
            class="cirlce-img"
          />
          Мероприятия
        </div>
        <div class="value-trash">{{ props.event_count }}</div>
      </div>
      <div class="rating profile">
        <div>
          <img
            src="../../../../assets/imgs/circle_sortPoint.png"
            alt=""
            class="cirlce-img"
          />
          Точки сортировки
        </div>
        <div class="value-trash">
          {{ props.sort_point_count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "place_count",
  "route_count",
  "event_count",
  "sort_point_count",
]);
</script>
