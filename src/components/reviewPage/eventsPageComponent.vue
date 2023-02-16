<template>
  <main class="main">
    <section class="buttons">
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
      <button class="btn btn-routes" @click="changeCard">
        <img
          class="icon-btn"
          v-show="visibleCards != 'routes'"
          @click="changeCard"
          width="15"
          height="18"
          src="../../assets/imgs/routes.png"
          alt="Places"
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
      <button class="btn btn-events" @click="changeCard">
        <img
          class="icon-btn"
          v-show="visibleCards != 'events'"
          @click="changeCard"
          width="18"
          height="18"
          src="../../assets/imgs/events.png"
          alt="Places"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'events'"
          @click="changeCard"
          width="18"
          height="18"
          src="../../assets/imgs/events_white.png"
          alt="Places"
        />
        Мероприятия
      </button>
      <button class="btn btn-sortPoints" @click="changeCard">
        <img
          class="icon-btn"
          v-show="visibleCards != 'sortPoints'"
          @click="changeCard"
          width="16"
          height="18"
          src="../../assets/imgs/sortPoints.png"
          alt="Places"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'sortPoints'"
          @click="changeCard"
          width="16"
          height="18"
          src="../../assets/imgs/sortPoints_white.png"
          alt="Places"
        />
        Точки сортировки
      </button>
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

    <section v-show="visibleCards == 'events'" class="cards">
      <div class="card review">
        <img
          src="../../assets/imgs/default_review.png"
          alt=""
          class="card-child card-img review"
        />
        <div class="card-child card-content review">
          <div class="card-content-wrapping">
            <div class="card-header">
              <div class="card-info">
                <p class="card-name">Субботник в Дубовой роще</p>
                <div class="coordinates">
                  <div class="coordinate">
                    <img
                      class="icon-margin"
                      width="11"
                      height="18"
                      src="../../assets/imgs/map.png"
                      alt=""
                    />
                    Можайский район
                  </div>
                  <div class="coordinate">
                    <img
                      class="icon-margin"
                      width="18"
                      height="18"
                      src="../../assets/imgs/places.png"
                      alt=""
                    />
                    Дубовая роща
                  </div>
                </div>
                <div class="km-time">
                  <div class="km">
                    <img
                      class="icon-margin"
                      width="18"
                      height="16"
                      src="../../assets/imgs/calendar.png"
                      alt=""
                    />
                    29.10.2022
                  </div>
                  <div class="time">
                    <img
                      class="icon-margin"
                      width="18"
                      height="18"
                      src="../../assets/imgs/clock.png  "
                      alt=""
                    />
                    10:00
                  </div>
                </div>
              </div>
              <a class="a-circle-icon">
                <img
                  class="cirlce-img"
                  src="../../assets/imgs/circle_favorite_default.png"
                  alt=""
                />
              </a>
            </div>
            <div class="card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor,
              venenatis, elit enim feugiat natoque enim ullamcorper. Nulla
              condimentum malesuada eget enim amet, mattis turpis. Vel, purus
              consequat, tristique ut diam. Vulputate nam massa suspendisse
              scelerisque. Urna, vitae tellus et, odio varius sit risus vitae
              nunc. Dignissim sed felis nunc volutpat facilisi in non tellus.
              Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit
              volutpat eu nec mauris scelerisque. Senectus accumsan risus proin
              posuere morbi facilisis et.
            </div>
          </div>
        </div>
      </div>
    </section>
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

      routeList: [
        {
          id: 1,
          nameRoute: "Имя маршрута",
          start: "Старт",
          finish: "Финиш",
          length: 0.1,
          duration: 1.03,
          desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, venenatis, elit enim feugiat natoque enim ullamcorper. Nulla condimentum malesuada eget enim amet, mattis turpis. Vel, purus consequat, tristique ut diam. Vulputate nam massa suspendisse scelerisque. Urna, vitae tellus et, odio varius sit risus vitae nunc. Dignissim sed felis nunc volutpat facilisi in non tellus. Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit volutpat eu nec mauris scelerisque. Senectus accumsan risus proin posuere morbi facilisis et. ",
          imgUrl: "http://192.168.1.38:8080/img/field.0a6c037b.png",
          bus: 0.01,
          trash: 0.02,
          flowers: 0.003,
        },
        {
          id: 2,
          nameRoute: "Имя маршрута нового",
          start: "Старт",
          finish: "Финиш",
          length: 0.3,
          duration: 1.04,
          desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, venenatis, elit enim feugiat natoque enim ullamcorper. Nulla condimentum malesuada eget enim amet, mattis turpis. Vel, purus consequat, tristique ut diam. Vulputate nam massa suspendisse scelerisque. Urna, vitae tellus et, odio varius sit risus vitae nunc. Dignissim sed felis nunc volutpat facilisi in non tellus. Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit volutpat eu nec mauris scelerisque. Senectus accumsan risus proin posuere morbi facilisis et. ",
          imgUrl: "http://192.168.1.38:8080/img/field.0a6c037b.png",
          bus: 0.01,
          trash: 0.02,
          flowers: 0.003,
        },
        {
          id: 3,
          nameRoute: "Имя маршрута нового",
          start: "Старт",
          finish: "Финиш",
          length: 0.3,
          duration: 1.04,
          desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, venenatis, elit enim feugiat natoque enim ullamcorper. Nulla condimentum malesuada eget enim amet, mattis turpis. Vel, purus consequat, tristique ut diam. Vulputate nam massa suspendisse scelerisque. Urna, vitae tellus et, odio varius sit risus vitae nunc. Dignissim sed felis nunc volutpat facilisi in non tellus. Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit volutpat eu nec mauris scelerisque. Senectus accumsan risus proin posuere morbi facilisis et. ",
          imgUrl: "http://192.168.1.38:8080/img/field.0a6c037b.png",
          bus: 0.01,
          trash: 0.02,
          flowers: 0.003,
        },
      ],
    };
  },
  methods: {
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