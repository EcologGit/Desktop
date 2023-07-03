<template>
  <section
    class="cards"
    v-for="route in routesList"
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
              <a class="a-circle-icon">
                <img
                  class="cirlce-img"
                  src="../../../assets/imgs/circle_favorite_default.png"
                  alt=""
                />
              </a>
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

export default {
  inject: ["sortName", "placeList"],
  data() {
    return {
      url: url,

      routesList: this.fetchDataRoutesAPI(),
    };
  },
  methods: {
    navigateTo(id) {
      this.$router.push({
        name: "objectRoutes",
        params: { objectType: "routes", id: id },
      });
    },
    findRoutes(id) {
      console.log(this.routesList.filter((el) => el.id == id));
    },
    async fetchDataRoutesAPI() {
      await fetch(`${url}/review/routes/`)
        .then((response) => response.json())
        .then((data) => {
          this.routesList = data.results;
          console.log(data);
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
  },
};
</script>