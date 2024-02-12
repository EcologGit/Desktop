<template>
  <ObjectsFilterMenu
    @changeFilterParams="changeFilterParams"
    objectName="places"
  />
  <VueSpin :isLoading="isLoadingCards">
    <section
      class="cards"
      v-for="place in sortPlaceList"
      v-bind:key="place.object_id"
    >
      <div class="card review">
        <img
          v-bind:src="url + place.photo"
          alt=""
          class="card-child card-img review"
        />
        <div class="card-child card-content review">
          <div class="card-content-wrapping">
            <div>
              <div class="card-header">
                <div class="card-info">
                  <p class="card-name" @click="navigateTo(place.object_id)">
                    {{ place.name }}
                  </p>
                  <div class="card-adress">
                    <img
                      width="11"
                      height="18"
                      src="../../../assets/imgs/map.png"
                      alt=""
                      class="icon-margin"
                    />
                    {{ place.locality }}
                  </div>
                </div>
                <FavoriteButton
                  :isSelected="!!place.is_favourite"
                  :objType="objectType"
                  :objId="place.object_id"
                  :isHidden="!userId"
                />
              </div>
              <div class="card-desc">
                {{ place.description }}
              </div>
            </div>
            <div v-if="place.avg_availability">
              <CardRating :rating="place" />
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
  created() {
    // > Внедряемое свойство: 5
  },
  inject: ["userId"],
  data() {
    return {
      url: url,
      isLoadingCards: true,
      dataPlaceList: this.fetchDataPlaceAPI(),
      sortPlaceList: [],
      objectType: objectTypes.places,
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
    findPlace(id) {
      this.placeList.filter((el) => el.id == id);
    },
    async fetchDataPlaceAPI() {
      this.isLoadingCards = true;
      await baseApi
        .get(`/review/places/`)
        .then((response) => {
          this.dataPlaceList = response.data.results;
          this.sortPlaceList = this.dataPlaceList;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        })
        .finally(() => {
          this.isLoadingCards = false;
        });
      console.log(this.isLoadingCards);
    },
    navigateTo(id) {
      this.$router.push({
        name: "objectPlaces",
        params: { objectType: "places", id: id },
      });
    },
    async changeFilterParams(val) {
      this.sortPlaceList = [];
      this.dataPlaceList = [];
      this.isLoadingCards = true;
      const newObj = { ...val };
      if (newObj?.method === "-") {
        newObj.ordering = `${newObj.method}${newObj.ordering}`;
      }
      await baseApi
        .get(`/review/places/`, { params: newObj })
        .then((response) => {
          this.dataPlaceList = response.data.results;
          this.sortPlaceList = this.dataPlaceList;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        })
        .finally(() => {
          this.isLoadingCards = false;
        });
    },
  },

  computed: {},
};
</script>
