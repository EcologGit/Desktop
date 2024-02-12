<template>
  <ObjectsFilterMenu
    @changeFilterParams="changeFilterParams"
    objectName="sortPoints"
  />
  <VueSpin :isLoading="isLoadingCards">
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
                <FavoriteButton
                  :isSelected="!!sortPoint.is_favourite"
                  :objType="objectType"
                  :objId="sortPoint.point_id"
                  :isHidden="!userId"
                />
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
  </VueSpin>
  <router-view></router-view>
</template>

<script>
import { url } from "@/main.js";
import FavoriteButton from "@/components/widgets/favorite/favoriteButton/FavoriteButton.vue";
import { objectTypes } from "@/consts/contentTypeDicts/contentTypeDicts.js";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import ObjectsFilterMenu from "./menu/objectsFilterMenu/ObjectsFilterMenu.vue";
import VueSpin from "@/components/ui/loaders/spin/VueSpin.vue";

export default {
  props: {
    // modelValue: String,
  },
  components: {
    FavoriteButton,
    ObjectsFilterMenu,
    VueSpin,
  },
  inject: ["userId"],
  data() {
    return {
      url: url,
      objectType: objectTypes.sort_points,
      isLoadingCards: true,
      dataSortPointsList: this.fetchDataPlaceAPI(),
      sortSortPointsList: [],
      userId: this.userId.value,
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
      this.isLoadingCards = true;
      await baseApi
        .get(`/review/sortPoints/`)
        .then((response) => {
          this.dataSortPointsList = response.data.results;
          this.sortSortPointsList = response.data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        })
        .finally(() => {
          this.isLoadingCards = false;
        });
    },
    async changeFilterParams(val) {
      this.dataSortPointsList = [];
      this.sortSortPointsList = [];
      this.isLoadingCards = true;
      const newObj = { ...val };
      if (newObj?.method === "-") {
        newObj.ordering = `${newObj.method}${newObj.ordering}`;
      }
      await baseApi
        .get(`/review/sortPoints/`, { params: newObj })
        .then((response) => {
          this.dataSortPointsList = response.data.results;
          this.sortSortPointsList = this.dataSortPointsList;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        })
        .finally(() => {
          this.isLoadingCards = false;
        });
    },
  },
};
</script>
