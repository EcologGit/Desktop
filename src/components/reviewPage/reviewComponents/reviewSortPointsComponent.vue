<template>
  <section
    class="cards"
    v-for="sortPoint in sortSortPointsList"
    v-bind:key="sortPoint.point_id"
  >
    <div class="card review">
      <img
        v-bind:src="url + sortPoint.photo"
        alt=""
        class="card-child card-img review"
      />
      <div class="card-child card-content review">
        <div class="card-content-wrapping">
          <div>
            <div class="card-header">
              <div class="card-info">
                <p class="card-name" @click="navigateTo(sortPoint.point_id)">
                  {{ sortPoint.name }}
                </p>
                <div class="coordinates">
                  <div class="coordinate">
                    <img
                      class="icon-margin"
                      width="11"
                      height="18"
                      src="../../../assets/imgs/map.png"
                      alt=""
                    />
                    {{ sortPoint.locality }}
                  </div>
                  <div class="coordinate">
                    <img
                      class="icon-margin"
                      width="18"
                      height="18"
                      src="../../../assets/imgs/clock.png"
                      alt=""
                    />
                    <span>{{ sortPoint.schedule }}</span>
                  </div>
                </div>
              </div>
              <SmallFavoriteButton :isSelected='sortPoint.is_favourite' :objType='objectType'  :objId='sortPoint.point_id'/>
            </div>
            <div class="card-desc">
              {{ sortPoint.description }}
            </div>
          </div>
          <div class="card-rating">
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_bus.png"
                alt=""
                class="cirlce-img"
              />
              0.00
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <router-view></router-view>
</template>

<script>
import { url } from "@/main.js";
import  SmallFavoriteButton  from "@/components/widgets/favorite/smallFavoriteButton/SmallFavoriteButton.vue"
import { objectTypes } from "@/consts/contentTypeDicts/contentTypeDicts.js"
import { baseApi } from "@/components/shared/api/base/BaseApi.js"

export default {
  props: {
    // modelValue: String,
  },
  components: {
    SmallFavoriteButton,
  },
  data() {
    return {
      url: url,
      objectType: objectTypes.sort_points,
      dataSortPointsList: this.fetchDataPlaceAPI(),
      sortSortPointsList: [],
    };
  },
  mounted() {
    // Emits on mount
    this.emitInterface();
    this.emitSorting();
  },
  methods: {
    emitInterface() {
      this.$emit("interface", {
        searchByName: (value) => this.searchByName(value),
      });
    },
    emitSorting() {
      this.$emit("parameters", {
        sortingAFiltering: (value) => this.sortingAFiltering(value),
      });
    },
    navigateTo(id) {
      this.$router.push({
        name: "objectSortPoints",
        params: { id: id },
      });
    },
    findPlace(id) {
      this.placeList.filter((el) => el.id == id);
    },
    async fetchDataPlaceAPI() {
      await baseApi.get(`/review/sortPoints/`)
        .then((response) => {
          this.dataSortPointsList = response.data.results;
          this.sortSortPointsList = response.data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    async sortingAFiltering(parameters) {
      await fetch(
        `${url}/review/sortPoints/?ordering=${parameters.method}${parameters.ordering}&report_count=${parameters.reportCount}&admarea_name=${parameters.admareaName}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.sortSortPointsList = data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    searchByName(search) {
      if (search != undefined && search != null && search != "") {
        this.sortSortPointsList = this.searchByNameAsync(search);
      } else {
        this.sortSortPointsList = this.dataSortPointsList;
      }
    },
    async searchByNameAsync(search) {
      await fetch(`${url}/review/sortPoints/?search=${search}`)
        .then((response) => response.json())
        .then((data) => {
          this.sortSortPointsList = data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
  },
};
</script>