<template>
  <VueSpin :isLoading="isLoadingCards">
    <section class="cards marks">
      <div
        class="card marks"
        v-for="place in placeFavoritesData"
        :key="place.pk"
      >
        <img
          :src="`${url}${place?.places?.photo}`"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <router-link :to="`/review/places/${place?.places?.pk}`">
              <div class="card-title active-title">
                {{ place?.places?.name }}
              </div>
            </router-link>
            <div class="coordinates">
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../../../assets/imgs/map.png"
                  alt=""
                />
                {{ place?.places?.locality }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </VueSpin>
</template>

<script>
import { favoritesUrls } from "@/components/apiUrls/favorites/favoritesUrls.js";
import { baseApi, url } from "@/components/shared/api/base/BaseApi.js";
import VueSpin from "@/components/ui/loaders/spin/VueSpin.vue";

export default {
  inject: ["userId"],
  components: {
    VueSpin,
  },
  data() {
    return {
      visibleCards: "places",
      isLoadingCards: true,
      visibleDropdown: false,
      placeFavoritesData: this.getPlaceFavorite(),
      url: url,
    };
  },
  methods: {
    getPlaceFavorite() {
      this.isLoadingCards = true;
      baseApi
        .get(favoritesUrls.getFavoritesForUser("places", this.userId.value))
        .then((response) => {
          this.placeFavoritesData = response.data.results;
        })
        .finally(() => {
          this.isLoadingCards = false;
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
