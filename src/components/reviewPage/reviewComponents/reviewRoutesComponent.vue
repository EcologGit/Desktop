<template>
  <ObjectsFilterMenu
    @changeFilterParams="changeFilterParams"
    objectName="routes"
  />
  <VueSpin :isLoading="isLoadingCards">
    <section
      class="cards"
      v-for="route in sortRoutesList"
      v-bind:key="route.route_id"
    >
      <div class="card review">
        <img
          v-bind:src="url + route.photo"
          alt=""
          class="card-child card-img review"
        />
        <div class="card-child card-content review">
          <div class="card-content-wrapping">
            <div>
              <div class="card-header">
                <div class="card-info">
                  <p class="card-name" @click="navigateTo(route.route_id)">
                    {{ route.name }}
                  </p>
                  <div class="coordinates">
                    <div class="coordinate">
                      <img
                        width="11"
                        height="18"
                        src="../../../assets/imgs/map.png"
                        alt=""
                        class="icon-margin"
                      />
                      {{ route.locality }}
                    </div>
                  </div>

                  <div class="parameters">
                    <div class="km">
                      <img
                        class="icon-margin"
                        width="18"
                        height="9"
                        src="../../../assets/imgs/ruler.png"
                        alt=""
                      />
                      {{ route.length }} км
                    </div>
                    <div class="time">
                      <img
                        class="icon-margin"
                        width="13"
                        height="18"
                        src="../../../assets/imgs/hourglass.png  "
                        alt=""
                      />
                      {{ route.duration }}
                    </div>
                  </div>
                </div>
                <FavoriteButton
                  :isSelected="!!route.is_favourite"
                  :objType="objectType"
                  :objId="route.route_id"
                  :isHidden="!userId"
                />
              </div>
              <div class="card-desc">
                {{ route.name }}
              </div>
            </div>
            <div v-if="route.avg_availability">
              <CardRating :rating="route" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </VueSpin>
</template>

<script>
import { url } from "@/main.js";
import FavoriteButton from "@/components/widgets/favorite/favoriteButton/FavoriteButton.vue";
import { objectTypes } from "@/consts/contentTypeDicts/contentTypeDicts.js";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import CardRating from "..//..//widgets//statistic//cardRating//CardRating.vue";
import ObjectsFilterMenu from "./menu/objectsFilterMenu/ObjectsFilterMenu.vue";
import VueSpin from "@/components/ui/loaders/spin/VueSpin.vue";

export default {
  components: {
    FavoriteButton,
    CardRating,
    ObjectsFilterMenu,
    VueSpin,
  },
  inject: ["userId"],
  data() {
    return {
      url: url,
      objectType: objectTypes.routes,
      isLoadingCards: true,
      dataRoutesList: this.fetchDataRoutesAPI(),
      sortRoutesList: [],
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
        name: "objectRoutes",
        params: { objectType: "routes", id: id },
      });
    },
    findRoutes(id) {
      this.dataRoutesList.filter((el) => el.id == id);
    },
    async fetchDataRoutesAPI() {
      this.isLoadingCards = true;
      await baseApi
        .get(`${url}/review/routes/`)
        .then((response) => {
          this.dataRoutesList = response.data.results;
          this.sortRoutesList = response.data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        })
        .finally(() => {
          this.isLoadingCards = false;
        });
    },
    async sortingAFiltering(parameters) {
      await fetch(
        `${url}/review/routes/?ordering=${parameters.method}${parameters.ordering}&report_count=${parameters.reportCount}&admarea_name=${parameters.admareaName}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.sortRoutesList = data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    searchByName(search) {
      if (search != undefined && search != null && search != "") {
        this.sortRoutesList = this.searchByNameAsync(search);
      } else {
        this.sortRoutesList = this.dataRoutesList;
      }
    },
    async searchByNameAsync(search) {
      await fetch(`${url}/review/routes/?search=${search}`)
        .then((response) => response.json())
        .then((data) => {
          this.sortRoutesList = data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    async changeFilterParams(val) {
      this.dataRoutesList = [];
      this.sortRoutesList = [];
      this.isLoadingCards = true;
      const newObj = { ...val };
      if (newObj?.method === "-") {
        newObj.ordering = `${newObj.method}${newObj.ordering}`;
      }
      await baseApi
        .get(`/review/routes/`, { params: newObj })
        .then((response) => {
          this.dataRoutesList = response.data.results;
          this.sortRoutesList = this.dataRoutesList;
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
