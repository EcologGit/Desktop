<template>
  <main class="main">
    <section class="object" v-bind="dataObject">
      <section class="slider">
        <a>
          <img
            class="object-img"
            v-show="!visibleNext"
            @click="visibleNext = !visibleNext"
            v-bind:src="url + dataObject.photo"
            alt=""
          />
          <img
            class="object-img"
            v-show="visibleNext"
            @click="visibleNext = !visibleNext"
            src="../../assets/imgs/default_review.png"
            alt=""
          />
        </a>
        <div class="object-name">
          {{ dataObject.name }}

          <div class="parameters object-event">
            <div class="km">
              <img
                class="icon-margin"
                width="18"
                height="16"
                src="../../assets/imgs/calendar.png"
                alt=""
              />
              {{ formattingDate(dataObject.time_start) }}
            </div>
            <div class="time">
              <img
                class="icon-margin"
                width="18"
                height="18"
                src="../../assets/imgs/clock.png  "
                alt=""
              />
              {{ formattingTime(dataObject.time_of_close) }}
            </div>

            <div class="status-event object-event">Запланировано</div>
          </div>
        </div>
      </section>

      <section class="object-content">
        <div class="content-part left">
          <div class="object-desc">
            <p>Описание</p>
            {{ dataObject.description }}
          </div>
          <PlaceScroller
            :placeUrl="`${url}/review/event_nature_objects/${this.id}`"
            title="Объекты"
          />
          <div class="object-sortPoints" v-if="sortPoints.length > 0">
            <p>Точка сортировки</p>
            <div class="small-list sortPoints">
              <div
                class="sortPoint-small-card"
                v-for="sortPoint in sortPoints"
                v-bind:key="sortPoint.pk"
              >
                <img
                  class="small-card-img"
                  v-bind:src="url + sortPoint.photo"
                  alt=""
                />
                <div class="small-card-name">
                  <p class="small-card-p">{{ sortPoint.name }}</p>
                </div>
                <div class="parameters-object">
                  <div class="parameter-object time">
                    <img
                      class="icon-margin"
                      width="18"
                      height="18"
                      src="../../assets/imgs/clock.png  "
                      alt=""
                    />
                    0:00 - 0:00
                  </div>
                </div>
                <div class="parameter-object status">
                  {{ sortPoint.locality }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-part right">
          <div class="object-coordinates">
            <img
              class="map-object-img"
              src="../../assets/imgs/map_object.png  "
              alt=""
            />
            <div class="object-coordinates-info">
              <div class="coordinate-locality">
                <img
                  class="icon-margin"
                  width="12"
                  height="20"
                  src="../../assets/imgs/map.png"
                  alt=""
                />
                Locality
              </div>
              <div class="coordinate-locality">
                <img
                  class="icon-margin"
                  width="12"
                  height="20"
                  src="../../assets/imgs/map.png"
                  alt=""
                />
                Locality
              </div>
              <div class="coordinate-routes">
                <img
                  class="icon-margin"
                  width="16"
                  height="20"
                  src="../../assets/imgs/routes.png"
                  alt=""
                />
                routes
              </div>
              <div class="coordinate-routes">
                <img
                  class="icon-margin"
                  width="16"
                  height="20"
                  src="../../assets/imgs/routes.png"
                  alt=""
                />
                routes
              </div>
              <div class="coordinate-places">
                <img
                  class="icon-margin"
                  width="20"
                  height="20"
                  src="../../assets/imgs/places.png"
                  alt=""
                />
                places
              </div>
              <div class="coordinate-places">
                <img
                  class="icon-margin"
                  width="20"
                  height="20"
                  src="../../assets/imgs/places.png"
                  alt=""
                />
                places
              </div>
            </div>
          </div>
          <div v-if="dataObject.is_favorite !== undefined && userId.value">
            <FavoriteButton
              :isSelected="dataObject.is_favorite"
              objType="events"
              :objId="id"
              :isHidden="false"
              :favoriteButtonState="bigFavoriteButtonStates"
              classButton="adding"
              :classImg="``"
            />
          </div>
        </div>
      </section>
      <ReportReviewScroller :reportUrl='`review/reports/event/${this.$route.params.id}`' title='Отчёты' :pageSize='10'/>
    </section>
  </main>
</template>

<script>
import { url } from "@/main.js";
import PlaceScroller from ".//components//PlaceScroller.vue";
import FavoriteButton from "@/components/widgets/favorite/favoriteButton/FavoriteButton.vue";
import { bigFavoriteButtonStates } from "@/consts/favorite/favoriteButtonStates.js";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import ReportReviewScroller from '..//widgets//scrollers//ReportReviewScroller//ReportReviewScroller.vue'

export default {
  inject: ["userId"],
  components: {
    PlaceScroller,
    FavoriteButton,
    ReportReviewScroller,
  },
  data() {
    return {
      sortPoints: this.fetchSortPoints(),
      url: url,
      dataObject: this.fetchDataObjectAPI(),
      nearObjects: this.fetchNearObject(),
      visibleMore: false,
      id: this.$route.params.id,
      objectType: this.$route.params.objectType,
      bigFavoriteButtonStates: bigFavoriteButtonStates,
    };
  },
  methods: {
    async fetchSortPoints() {
      await fetch(`${url}/review/nearest_nature_objects_to_sort_point/1`)
        .then((response) => response.json())
        .then((data) => {
          this.sortPoints = data.results.slice(0, 2);
          console.log(this.sortPoints);
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    async fetchNearObject() {
      await fetch(`${url}/review/event_nature_objects/1`)
        .then((response) => response.json())
        .then((data) => {
          this.nearObjects = data.results.slice(0, 2);
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    formattingDate(date) {
      const msUTC = Date.parse(date);
      const correctFormatDate = new Date(msUTC);

      return correctFormatDate.toLocaleString("ru-RU", {
        dateStyle: "full",
      });
    },
    formattingTime(time) {
      const msUTC = Date.parse(time);
      const correctFormatDate = new Date(msUTC);

      return correctFormatDate.toTimeString().split(" ")[0].slice(0, 5);
    },
    newFunc() {},
    async fetchDataObjectAPI() {
      await baseApi
        .get(`${url}/review/events/${this.$route.params.id}`)
        .then((response) => {
          this.dataObject = response.data;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
  },
  computed: {
    calcNotes() {
      return this.notes.length * 5;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length === 5) {
        this.notes = [];
      }
    },
  },
};
</script>
