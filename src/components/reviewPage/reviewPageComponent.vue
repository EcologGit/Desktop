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
            src="../../assets/imgs/events.png"
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

    <section class="search">
      <input
        type="text"
        class="search-field"
        placeholder="Поиск адресов и мест"
      />
      <img src="../../assets/imgs/search.png" alt="" class="search-icon" />
    </section>

    <section class="settings">
      <div class="dropdown">
        <button
          v-bind:class="{ active: visibleDropdown }"
          class="button-text setting dropbtn"
          @click="visibleDropdown = !visibleDropdown"
        >
          <img
            src="../../assets/imgs/setting1.png"
            alt=""
            class="setting-icon"
          />
          {{ sortName }}
        </button>
        <div v-show="visibleDropdown" class="dropdown-content">
          <button class="active" @click="sort">ПО АЛФАВИТУ</button>
          <button type="button" @click="sort">ПО РЕЙТИНГУ</button>
          <button @click="sort" href="#contact">ПО УДАЛЕННОСТИ</button>
          <button @click="sort" href="#contact">ПО ПОПУЛЯРНОСТИ</button>
        </div>
      </div>
      <button class="setting button-text">
        <img src="../../assets/imgs/setting2.png" alt="" class="setting-icon" />
        Параметры
      </button>
    </section>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  inject: ["sortName", "placeList"],
  data() {
    return {
      sortPlaces: [],
      visibleCards: "places",
      visibleDropdown: false,
    };
  },
  methods: {
    changeCard(event) {
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
    sort(event) {
      event.target.parentElement.childNodes.forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      event.target.classList.add("active");

      this.placeList.sort((a, b) => b.rating - a.rating);
      let dropdowns = document.querySelector(".dropdown-content");
      let dropdbtn = document.querySelector(".dropbtn");
      if (dropdowns) {
        dropdowns.style.display = "none";
        dropdbtn.classList.remove("active");
      }
    },
    findPlace(id) {
      console.log(this.placeList.filter((el) => el.id == id));
    },
  },
};
</script>