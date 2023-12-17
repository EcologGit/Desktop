<template>
  <section class="statistics" style="margin-top: 30px">
    <div class="statistics-card collected-trash">
      Собранный отходы
      <div class="card-rating profile">
        <div class="rating profile" v-for='waste in generalStatistic?.gathered_waste' :key='waste.type'>
          <div>
            <img
              :src="require(`@/${wasteDictImagesDict[waste.type]}`)"
              alt=""
              class="cirlce-img"
            />
            {{waste.type}}
          </div>
          <div class="value-trash">{{waste.amount}} {{waste.unit}}</div>
        </div>
      </div>
    </div>
    <div class="second-column">
      <div class="statistics-card object-counter">
        Счетчик объектов
        <div class="card-rating profile">
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_places.png"
                alt=""
                class="cirlce-img"
              />
              Места
            </div>
            <div class="value-trash">{{ generalStatistic.place_count }}</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_routes.png"
                alt=""
                class="cirlce-img"
              />
              Маршруты
            </div>
            <div class="value-trash">{{ generalStatistic.route_count }}</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_events.png"
                alt=""
                class="cirlce-img"
              />
              Мероприятия
            </div>
            <div class="value-trash">{{ generalStatistic.event_count }}</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_sortPoint.png"
                alt=""
                class="cirlce-img"
              />
              Точки сортировки
            </div>
            <div class="value-trash">
              {{ generalStatistic.sort_point_count }}
            </div>
          </div>
        </div>
      </div>
      <div class="statistics-card activity">
        Активность
        <div class="card-rating profile">
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_reports.png"
                alt=""
                class="cirlce-img"
              />
              Отчеты
            </div>
            <div class="value-trash">{{ generalStatistic.report_count }}</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_grade.png"
                alt=""
                class="cirlce-img"
              />
              Оценки
            </div>
            <div class="value-trash">{{ generalStatistic.rates_count }}</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_photos.png"
                alt=""
                class="cirlce-img"
              />
              Фотографии
            </div>
            <div class="value-trash">{{ generalStatistic.photo_count }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import { activitiesUrls } from "../../apiUrls/activities/activitiesUrls.js";
import { wasteDictImagesDict } from '../../../consts/waste/wasteImages.js'

const generalStatistic = ref({});

const getGeneralStatistic = () => {
  baseApi
    .get(activitiesUrls.getGeneralStatistic)
    .then((response) => (generalStatistic.value = response.data))
    .catch((error) => console.log(error));
};

getGeneralStatistic();
</script>
