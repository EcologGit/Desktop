<template>
  <main class="main">
    <section class="buttons">
      <router-link to="/review/places">
        <button class="btn btn-places active" @click="changeCard">
          <img
            class="icon-btn"
            v-show="visibleCards != 'places'"
            @click="changeCard"
            width="18"
            height="18"
            src="../../assets/imgs/places.png"
            alt="Places"
          />
          <img
            class="icon-btn"
            v-show="visibleCards == 'places'"
            @click="changeCard"
            width="18"
            height="18"
            src="../../assets/imgs/places_white.png"
            alt="Places"
          />
          Места
        </button>
      </router-link>
      <router-link to="/review/routes"
        ><button class="btn btn-routes" @click="changeCard">
          <img
            class="icon-btn"
            v-show="visibleCards != 'routes'"
            @click="changeCard"
            width="15"
            height="18"
            src="../../assets/imgs/routes.png"
            alt="Routes"
          />
          <img
            class="icon-btn"
            v-show="visibleCards == 'routes'"
            @click="changeCard"
            width="15"
            height="18"
            src="../../assets/imgs/routes_white.png"
            alt="Places"
          />
          Маршруты
        </button>
      </router-link>
      <router-link to="/review/events">
        <button class="btn btn-events" @click="changeCard">
          <img
            class="icon-btn"
            v-show="visibleCards != 'events'"
            @click="changeCard"
            width="18"
            height="18"
            src="../../assets/imgs/events_black.png"
            alt="Events"
          />
          <img
            class="icon-btn"
            v-show="visibleCards == 'events'"
            @click="changeCard"
            width="18"
            height="18"
            src="../../assets/imgs/events_white.png"
            alt="Events"
          />
          Мероприятия
        </button>
      </router-link>
      <router-link to="/review/sortPoints">
        <button class="btn btn-sortPoints" @click="changeCard">
          <img
            class="icon-btn"
            v-show="visibleCards != 'sortPoints'"
            @click="changeCard"
            width="16"
            height="18"
            src="../../assets/imgs/sortPoints.png"
            alt="SortPoints"
          />
          <img
            class="icon-btn"
            v-show="visibleCards == 'sortPoints'"
            @click="changeCard"
            width="16"
            height="18"
            src="../../assets/imgs/sortPoints_white.png"
            alt="SortPoints"
          />
          Точки сортировки
        </button>
      </router-link>
    </section>
    <router-view
      @parameters="getSortingInterface"
      @interface="getChildInterface"
    ></router-view>
  </main>
</template>

<script>
export default {
  // Add a default

  childInterface: {
    searchByName: () => {},
  },
  sortingInterface: {
    sortingAFiltering: () => {},
  },
  inject: ["sortName", "placeList"],
  data() {
    return {
      sortPlaces: [],
      visibleCards: "places",
      visibleModalSorting: false,
      visibleModalParameters: false,
    };
  },
  methods: {
    parametersReady() {
      this.visibleModalParameters = false;
    },

    //
    getChildInterface(childInterface) {
      this.$options.childInterface = childInterface;
    },

    // Add count through the interface
    searchByName() {
      this.$options.childInterface.searchByName(this.searchText);
    },
    //
    getSortingInterface(sortingInterface) {
      this.$options.sortingInterface = sortingInterface;
    },

    // Add count through the interface
    sortingAFiltering() {
      this.visibleModalSorting = false;
      this.visibleModalParameters = false;
      this.$options.sortingInterface.sortingAFiltering({
        ordering: this.ordering,
        method: this.method,
        reportCount: this.reportCount,
        admareaName: this.admareaName,
      });
    },
    changeCard(event) {
      this.searchText = "";
      let target =
        event.target.className == "icon-btn"
          ? event.target.parentElement
          : event.target;

      target.parentElement.parentElement.childNodes.forEach((el) => {
        let btn = el.firstChild;
        if (btn.matches(".active")) {
          btn.classList.remove("active");
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
    findPlace(id) {
      this.placeList.filter((el) => el.id == id);
    },
  },
};
</script>