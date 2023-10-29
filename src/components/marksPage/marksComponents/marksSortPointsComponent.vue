<template>
  <section class="cards marks sortPoints">
    <div class="card marks" v-for='sortPoint in sortPointsFavoritesData' :key='sortPoint.pk'>
      <img
        :src="`${url}${sortPoint?.sort_points?.photo}`"
        alt=""
        class="card-child card-img marks"
      />
      <div class="card-child card-content marks">
        <div class="card-content-wrapping marks">
          <router-link :to="`/review/sortPoints/${sortPoint?.sort_points?.pk}`">
          <div class="card-title active-title">{{sortPoint?.sort_points?.name}}</div>
          </router-link>
          <div class="coordinates">
            <div class="coordinates">
              <div class="coordinate feed">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../../../assets/imgs/map.png"
                  alt=""
                />
                Егорьевск
              </div>
            </div>
            <div class="parameters">
              <div class="time">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../../../assets/imgs/clock.png  "
                  alt=""
                />
                00:00 - 00:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { favoritesUrls } from "@/components/apiUrls/favorites/favoritesUrls.js";
import { baseApi, url } from "@/components/shared/api/base/BaseApi.js";
export default {
  inject: ["userId"],
  data() {
    return {
      visibleCards: "places",
      visibleDropdown: false,
      sortPointsFavoritesData: this.getSortPointsFavorite(),
      url: url,
    };
  },
  methods: {
    getSortPointsFavorite() {
      baseApi
        .get(favoritesUrls.getFavoritesForUser("sort_points", this.userId.value))
        .then((response) => {
          this.sortPointsFavoritesData = response.data.results;
        });
    },
    changeCard(event) {
      let target =
        event.target.className == "icon-btn"
          ? event.target.parentElement
          : event.target;

      target.parentElement.childNodes.forEach((el) => {
        if (el.matches(".active")) {
          el.classList.remove("active");
        }
        if (target.classList.contains("btn-routes")) {
          this.visibleCards = "routes";
        } else if (target.classList.contains("btn-events")) {
          this.visibleCards = "events";
        } else if (target.classList.contains("btn-sortPoints")) {
          this.visibleCards = "sortPoints";
        } else {
          this.visibleCards = "places";
        }
      });
      target.classList.add("active");
    },
    sort(event) {
      event.target.parentElement.childNodes.forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      event.target.classList.add("active");
    },
    visibleCardsFunc() {},
  },
};
</script>