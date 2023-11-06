<template>
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
              <SmallFavoriteButton :isSelected='route.is_favourite' :objType='objectType'  :objId='route.route_id'/>
            </div>
            <div class="card-desc">
              {{ route.name }}
            </div>
          </div>
          <div class="card-rating">
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_bus.png"
                alt=""
                class="cirlce-img"
              />
              {{ route.bus }}
            </div>
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_sortPoint.png"
                alt=""
                class="cirlce-img"
              />
              {{ route.trash }}
            </div>
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_flower.png"
                alt=""
                class="cirlce-img"
              />
              {{ route.flowers }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      objectType: objectTypes.routes,
      dataRoutesList: this.fetchDataRoutesAPI(),
      sortRoutesList: [],
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
      await baseApi.get(`${url}/review/routes/`)
        .then((response) => {
          this.dataRoutesList = response.data.results;
          this.sortRoutesList = response.data.results;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
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
  },
};
</script>