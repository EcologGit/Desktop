<template>
  <section
    class="cards"
    v-for="sortPoint in filteredList(this.modelValue)"
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
              <a class="a-circle-icon">
                <img
                  class="cirlce-img"
                  src="../../../assets/imgs/circle_favorite_default.png"
                  alt=""
                />
              </a>
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

export default {
  inject: ["sortName", "placeList"],
  props: {
    modelValue: String,
  },
  data() {
    return {
      url: url,
      sortPlaces: [],
      dataSortPointsList: this.fetchDataPlaceAPI(),
    };
  },
  methods: {
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
      await fetch(`${url}/review/sortPoints/`)
        .then((response) => response.json())
        .then((data) => {
          this.dataSortPointsList = data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    filteredList(modelValue) {
      if (modelValue != "") {
        return this.dataSortPointsList.filter((place) => {
          return place.name
            .toLowerCase()
            .includes(this.modelValue.toLowerCase());
        });
      } else {
        return this.dataSortPointsList;
      }
    },
  },
};
</script>