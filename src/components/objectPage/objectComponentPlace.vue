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
        </div>
      </section>

      <section class="object-content">
        <div class="content-part left">
          <div class="object-desc">
            <p>Описание</p>
            {{ dataObject.description }}
          </div>
          <ActualEventScroller :eventUrl="`${url}/review/actual_events/nature_object/${this.id}/?page_size=4`"/>
          <NearestSortPointScroller :sortPointsUrl="`${url}/review/nearest_sort_points/nature_object/${this.id}/?page_size=4`"/>
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
          <div v-if='dataObject.is_favorite !== undefined && userId.value'>
          <FavoriteButton
          :isSelected='dataObject.is_favorite'
          objType='places'
          :objId='id'
          :isHidden='false'
          :favoriteButtonState='bigFavoriteButtonStates'
          :classButton="`adding`"
          :classImg='``'
          />
        </div>
          <div class="object-points" v-if='dataObject.avg_availability'>
            <RatingBlock :availability='dataObject.avg_availability' :beauty='dataObject.avg_beauty' :purity='dataObject.avg_purity'/>
          </div>
          <div class="object-points">
            <p>Собранные отходы</p>
            <div class="list-points">
              <div class="point">
                <div class="rate">
                  <img
                    src="../../assets/imgs/plastic_trash_type.png"
                    alt=""
                    class="cirlce-img"
                  />
                  Пластик
                </div>
                <!-- <div>{{ dataObjectReportsStatistics[0].sum_amount }} кг</div> -->
                <div>{{ 0.0 }} кг</div>
              </div>
              <div class="point">
                <div class="rate">
                  <img
                    src="../../assets/imgs/glass_trash_type.png"
                    alt=""
                    class="cirlce-img"
                  />
                  Стекло
                </div>
                <div>0,0 кг</div>
              </div>
              <div class="point">
                <div class="rate">
                  <img
                    src="../../assets/imgs/batteries_trash_type.png"
                    alt=""
                    class="cirlce-img"
                  />
                  Батарейки
                </div>
                <div>0,0 кг</div>
              </div>
              <div class="point">
                <div class="rate">
                  <img
                    src="../../assets/imgs/light_bulbs_trash_type.png"
                    alt=""
                    class="cirlce-img"
                  />
                  Лампочка
                </div>
                <div>0,0 кг</div>
              </div>
              <div class="point">
                <div class="rate">
                  <img
                    src="../../assets/imgs/paper_trash_type.png"
                    alt=""
                    class="cirlce-img"
                  />
                  Макулатура
                </div>
                <div>0,0 кг</div>
              </div>
              <div class="point">
                <div class="rate">
                  <img
                    src="../../assets/imgs/metal_trash_type.png"
                    alt=""
                    class="cirlce-img"
                  />
                  Металл
                </div>
                <div>0,0 кг</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReportReviewScroller :reportUrl='`review/reports/nature_object/${this.$route.params.id}`' title='Отчёты' :pageSize='10'/>
    </section>
  </main>
</template>
<script>
import { url } from "@/main.js";
import ActualEventScroller from ".//components//ActualEventScroller.vue"
import NearestSortPointScroller from ".//components//NearestSortPointScroller.vue"
import ReportReviewScroller from '..//widgets//scrollers//ReportReviewScroller//ReportReviewScroller.vue'
import RatingBlock from '..//widgets//statistic//rating//RatingBlock.vue'
import { bigFavoriteButtonStates } from "@/consts/favorite/favoriteButtonStates.js";
import FavoriteButton from "@/components/widgets/favorite/favoriteButton/FavoriteButton.vue";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";

export default {
  inject: ["userId"],
  components: {
    ReportReviewScroller,
    ActualEventScroller,
    NearestSortPointScroller,
    RatingBlock,
    FavoriteButton,
  },
  data() {
    return {
      url: url,
      dataObject: this.fetchDataObjectAPI(),
      dataObjectReportsStatistics: [],
      visibleMore: false,
      id: this.$route.params.id,
      objectType: this.$route.params.objectType,
      bigFavoriteButtonStates: bigFavoriteButtonStates,
    };
  },
  methods: {
    navigateTo(id) {
      this.$router.push({
        name: "report",
        params: { id: id },
      });
    },
    newFunc() {},
    async fetchDataObjectAPI() {
      await baseApi.get(`${url}/review/places/${this.$route.params.id}`)
        .then((response) => {
          this.dataObject = response.data.object_info;
          this.dataObjectReportsStatistics = response.data.reports_statistic;
          this.dataObject.is_favorite = response.data.is_favorite;
          //TODO: добавить Map по dataObjectReportsStatistics
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
