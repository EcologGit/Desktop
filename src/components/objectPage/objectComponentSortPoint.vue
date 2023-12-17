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
          <div class="parameters object-sortPoint">
            <div class="km">
              <img
                class="icon-margin"
                width="18"
                height="18"
                src="../../assets/imgs/clock.png"
                alt=""
              />
              {{ dataObject.schedule }}
            </div>
          </div>
        </div>
      </section>

      <section class="object-content">
        <div class="content-part left">
          <div class="object-desc">
            <p>Описание</p>
            {{ dataObject.description }}
          </div>
          <div class="object-events" v-if="nearObjects.length > 0">
            <p>Ближайшие объекты</p>
            <div class="small-list events">
              <div
                class="event-small-card"
                v-for="nearObject in nearObjects"
                v-bind:key="nearObject.pk"
              >
                <img
                  class="small-card-img"
                  v-bind:src="url + nearObject.photo"
                  alt=""
                />
                <div class="small-card-name">
                  <p class="small-card-p">{{ nearObject?.name }}</p>
                </div>
                <div class="parameters-object">
                  <div class="parameter-object date">
                    <img
                      class="icon-margin"
                      width="12"
                      height="20"
                      src="../../assets/imgs/map.png"
                      alt=""
                    />
                    {{ nearObject.locality }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="object-sortPoints" v-if="dataObject.length > 0">
            <p>Ближайшие маршруты</p>
            <div class="small-list sortPoints">
              <div class="sortPoint-small-card">
                <img
                  class="small-card-img"
                  src="../../assets/imgs/default_activity.png"
                  alt=""
                />
                <div class="small-card-name"><p>Name</p></div>
                <div class="parameters-object">
                  <div class="parameter-object date">
                    <img
                      class="icon-margin"
                      width="12"
                      height="20"
                      src="../../assets/imgs/map.png"
                      alt=""
                    />
                    Locality
                  </div>
                </div>
              </div>
              <div class="sortPoint-small-card">
                <img
                  class="small-card-img"
                  src="../../assets/imgs/default_activity.png"
                  alt=""
                />
                <div class="small-card-name"><p>Name</p></div>
                <div class="parameters-object">
                  <div class="parameter-object date">
                    <img
                      class="icon-margin"
                      width="12"
                      height="20"
                      src="../../assets/imgs/map.png"
                      alt=""
                    />
                    Locality
                  </div>
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
                {{ dataObject.locality }},
              </div>
              <div class="coordinate-value">
                <img
                  class="icon-margin"
                  width="15"
                  height="15"
                  src="../../assets/imgs/coordinates.png"
                  alt=""
                />
                {{ dataObject.latitude_n }},
                {{ dataObject.longitude_e }}
              </div>
            </div>
          </div>
          <div v-if="dataObject.is_favorite !== undefined && userId.value">
            <FavoriteButton
              :isSelected="dataObject.is_favorite"
              objType="sort_points"
              :objId="id"
              :isHidden="false"
              :favoriteButtonState="bigFavoriteButtonStates"
              :classButton="adding"
              :classImg="``"
            />
          </div>
          <GatheredWastes
          :gatheredWastes='dataObject.reports_statistic'
          />
        </div>
      </section>
      <ReportReviewScroller :reportUrl='`review/reports/sort_point/${this.$route.params.id}`' title='Отчёты' :pageSize='10'/>
    </section>
  </main>
</template>

<script>
import { url } from "@/main.js";
import FavoriteButton from "@/components/widgets/favorite/favoriteButton/FavoriteButton.vue";
import { bigFavoriteButtonStates } from "@/consts/favorite/favoriteButtonStates.js";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import GatheredWastes from '../widgets/statistic/gatheredWastes/GatheredWastes.vue'
import ReportReviewScroller from '..//widgets//scrollers//ReportReviewScroller//ReportReviewScroller.vue'

export default {
  inject: ["userId"],
  components: {
    FavoriteButton,
    ReportReviewScroller,
    GatheredWastes
  },
  data() {
    return {
      url: url,
      dataObject: this.fetchDataObjectAPI(),
      visibleMore: false,
      id: this.$route.params.id,
      objectType: this.$route.params.objectType,
      nearObjects: this.fetchNearObject(),
      dataObjectReportsStatistics: [],
      bigFavoriteButtonStates: bigFavoriteButtonStates,
    };
  },
  methods: {
    newFunc() {},
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
    async fetchDataObjectAPI() {
      await baseApi
        .get(`${url}/review/sortPoints/${this.$route.params.id}`)
        .then((response) => {
          this.dataObject = response.data;
          this.dataObject.reports_statistic = response.data.reports_statistic;
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
