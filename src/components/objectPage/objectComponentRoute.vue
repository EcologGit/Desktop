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
          <div class="parameters object-route">
            <div class="km">
              <img
                class="icon-margin"
                width="18"
                height="9"
                src="../../assets/imgs/ruler.png"
                alt=""
              />
              {{ dataObject.length }} км
            </div>
            <div class="time">
              <img
                class="icon-margin"
                width="13"
                height="18"
                src="../../assets/imgs/hourglass.png  "
                alt=""
              />
              {{ dataObject.duration }}
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
          <ActualEventScroller :eventUrl="`${url}/review/actual_events/route/${this.id}/?page_size=4`"/>
          <NearestSortPointScroller :sortPointsUrl="`${url}/review/nearest_sort_points/route/${this.id}/?page_size=4`"/>
        </div>
        <div class="content-part right">
          <div class="object-coordinates">
            <div class="object-coordinates-info object-route">
              <div class="coordinate-locality">
                <img
                  class="icon-margin"
                  width="12"
                  height="20"
                  src="../../assets/imgs/map.png"
                  alt=""
                />
                {{ dataObject.locality }}
              </div>
              <div class="coordinate-start">
                <img
                  class="icon-margin"
                  width="15"
                  height="15"
                  src="../../assets/imgs/start.png"
                  alt=""
                />
                {{ dataObject.start_n }}, {{ dataObject.start_e }}
              </div>
              <div class="coordinate-end">
                <img
                  class="icon-margin"
                  width="15"
                  height="15"
                  src="../../assets/imgs/finish.png"
                  alt=""
                />
                {{ dataObject.end_n }}, {{ dataObject.end_e }}
              </div>
            </div>
          </div>
          <div v-if='dataObject.is_favorite !== undefined && userId.value'>
          <FavoriteButton
          :isSelected='dataObject.is_favorite'
          objType='routes'
          :objId='id'
          :isHidden='false'
          :favoriteButtonState='bigFavoriteButtonStates'
          classButton='adding'
          :classImg='``'
          />
        </div>
          <div class="object-points" v-if='dataObject.avg_availability'>
            <RatingBlock :availability='dataObject.avg_availability' :beauty='dataObject.avg_beauty' :purity='dataObject.avg_purity'/>
          </div>
          <GatheredWastes
          :gatheredWastes='dataObject.reports_statistic'
          />
        </div>
      </section>
      <ReportReviewScroller :reportUrl='`review/reports/route/${this.$route.params.id}`' title='Отчёты' :pageSize='10'/>
    </section>
  </main>
</template>

<script>
import { url } from "@/main.js";
import ActualEventScroller from './/components//ActualEventScroller.vue'
import NearestSortPointScroller from './/components//NearestSortPointScroller.vue'
import { bigFavoriteButtonStates } from "@/consts/favorite/favoriteButtonStates.js";
import FavoriteButton from "@/components/widgets/favorite/favoriteButton/FavoriteButton.vue";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import RatingBlock from '..//widgets//statistic//rating//RatingBlock.vue'
import GatheredWastes from '../widgets/statistic/gatheredWastes/GatheredWastes.vue'
import ReportReviewScroller from '..//widgets//scrollers//ReportReviewScroller//ReportReviewScroller.vue'

export default {
  inject: ["userId"],
  components: {
    ActualEventScroller,
    NearestSortPointScroller,
    FavoriteButton,
    RatingBlock,
    GatheredWastes,
    ReportReviewScroller,
  },
  data() {
    return {
      url: url,
      dataObject: this.fetchDataObjectAPI(),
      visibleMore: false,
      id: this.$route.params.id,
      objectType: this.$route.params.objectType,
      bigFavoriteButtonStates: bigFavoriteButtonStates,
    };
  },
  methods: {
    newFunc() {},
    async fetchDataObjectAPI() {
      await baseApi.get(`${url}/review/routes/${this.$route.params.id}`)
        .then((response) => {
          this.dataObject = response.data.object_info;
          this.dataObject.reports_statistic = response.data.reports_statistic
          this.dataObject.is_favorite = response.data.is_favorite
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    async fetchReports() {
      await fetch(
        `${url}/review/reports/nature_object/${this.$route.params.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.reports = data.results;
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