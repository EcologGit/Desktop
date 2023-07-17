<template>
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
              <a class="a-circle-icon">
                <img
                  class="cirlce-img"
                  src="../../../assets/imgs/circle_favorite_default.png"
                  alt=""
                />
              </a>
            </div>
            <div class="card-desc">
              {{ place.description }}
            </div>
          </div>
          <div class="card-rating">
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_bus.png"
                alt=""
                class="cirlce-img"
              />
              {{ place.avg_availability }}
            </div>
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_sortPoint.png"
                alt=""
                class="cirlce-img"
              />
              {{ place.avg_beauty }}
            </div>
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_flower.png"
                alt=""
                class="cirlce-img"
              />
              {{ place.avg_purity }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { url } from "@/main.js";

export default {
  created() {
    // > Внедряемое свойство: 5
  },

  data() {
    return {
      url: url,
      dataPlaceList: this.fetchDataPlaceAPI(),
      sortPlaceList: [],
    };
  },
  mounted() {
    // Emits on mount
    this.emitInterface();
  },
  methods: {
    emitInterface() {
      this.$emit("interface", {
        searchByName: (value) => this.searchByName(value),
      });
    },
    findPlace(id) {
      this.placeList.filter((el) => el.id == id);
    },
    async fetchDataPlaceAPI() {
      await fetch(`${url}/review/places/`)
        .then((response) => response.json())
        .then((data) => {
          this.dataPlaceList = data.results;
          this.sortPlaceList = this.dataPlaceList;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    navigateTo(id) {
      this.$router.push({
        name: "objectPlaces",
        params: { objectType: "places", id: id },
      });
    },

    searchByName(search) {
      console.log(search);
      if (search != undefined && search != null && search != "") {
        this.sortPlaceList = this.searchByNameAsync(search);
      } else {
        this.sortPlaceList = this.dataPlaceList;
      }
    },
    async searchByNameAsync(search) {
      await fetch(`${url}/review/places/?search=${search}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          this.sortPlaceList = data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
  },

  computed: {},
};
</script>