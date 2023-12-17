<template>
  <div class="statistics-card activity">
    Активность
    <div class="card-rating profile">
      <div class="rating profile">
        <div>
          <img
            src="../../../../assets/imgs/circle_reports.png"
            alt=""
            class="cirlce-img"
          />
          Отчеты
        </div>
        <div class="value-trash">{{ props.report_count }}</div>
      </div>
      <div class="rating profile">
        <div>
          <img
            src="../../../../assets/imgs/circle_grade.png"
            alt=""
            class="cirlce-img"
          />
          Оценки
        </div>
        <div class="value-trash">{{ props.rates_count }}</div>
      </div>
      <div class="rating profile">
        <div>
          <img
            src="../../../../assets/imgs/circle_photos.png"
            alt=""
            class="cirlce-img"
          />
          Фотографии
        </div>
        <div class="value-trash">{{ props.photo_count }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['photo_count', 'rates_count', 'report_count'])
</script>
