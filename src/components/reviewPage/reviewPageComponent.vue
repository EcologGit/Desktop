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

    <section class="search">
      <input
        type="text"
        v-model="searchText"
        class="search-field"
        placeholder="Поиск адресов и мест"
      />
      <img
        src="../../assets/imgs/search.png"
        alt=""
        @click="searchByName"
        class="search-icon"
      />
    </section>

    <section class="settings">
      <button
        v-bind:class="{ active: visibleModalSorting }"
        class="button-text setting dropbtn"
        @click="visibleModalSorting = true"
      >
        <img src="../../assets/imgs/setting1.png" alt="" class="setting-icon" />
        {{ sortName }}
      </button>
      <div v-if="visibleModalSorting" class="modal-mask">
        <div class="dropdown">
          <div class="dropdown-content">
            <p>Сортировка</p>
            <div class="sorting">
              <div class="sorting-part">
                <div class="part-label">Варианты отображения</div>
                <div class="part-options">
                  <div class="sort-option">
                    <input
                      type="radio"
                      id="alphabet"
                      value="name"
                      name="option"
                      v-model="ordering"
                    />
                    <label for="alphabet">По алфавиту</label>
                  </div>
                  <div class="sort-option">
                    <input
                      type="radio"
                      id="rating"
                      value="report_count"
                      name="option"
                      v-model="ordering"
                    />
                    <label for="rating">По рейтингу</label>
                  </div>
                  <div class="sort-option">
                    <input
                      type="radio"
                      id="popular"
                      value="sum_rating"
                      name="option"
                      v-model="ordering"
                    />
                    <label for="popular">По популярности</label>
                  </div>
                </div>
              </div>
              <div class="sorting-part">
                <div class="part-label">Порядок отображения</div>
                <div class="part-options">
                  <div class="sort-option">
                    <input
                      type="radio"
                      id="ascending"
                      value=""
                      name="method"
                      v-model="method"
                    />
                    <label for="ascending">По возрастанию</label>
                  </div>
                  <div class="sort-option">
                    <input
                      type="radio"
                      id="descending"
                      value="-"
                      name="method"
                      v-model="method"
                    />
                    <label for="descending">По убыванию</label>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="single-button setting-button"
              @click="sortingAFiltering"
            >
              <img
                class="icon-btn"
                width="18"
                height="18"
                src="../../assets/imgs/ready.png"
                alt="Ready"
              />
              Готово
            </button>
          </div>
        </div>
      </div>
      <button
        v-bind:class="{ active: visibleModalParameters }"
        class="button-text setting dropbtn"
        @click="visibleModalParameters = true"
      >
        <img src="../../assets/imgs/setting2.png" alt="" class="setting-icon" />
        Параметры
      </button>
      <div v-if="visibleModalParameters" class="modal-mask">
        <div class="dropdown">
          <div class="dropdown-content">
            <p>Фильтры</p>
            <div class="modal-parameter">
              <div class="label-parameter">Населенный пункт</div>
              <input
                class="search-parameter"
                type="text"
                placeholder="Поиск населенного пункта"
                v-model="admareaName"
              />
            </div>
            <div class="modal-parameter">
              <div class="label-parameter">Количество отчетов</div>
              <div class="part-options">
                <div class="sort-reportCount">
                  <input
                    type="radio"
                    id="no_matter"
                    value="no_matter"
                    name="reportCount"
                    v-model="reportCount"
                  />
                  <label for="no_matter">Неважно</label>
                </div>
                <div class="sort-reportCount">
                  <input
                    type="radio"
                    id="zero"
                    value="zero"
                    name="reportCount"
                    v-model="reportCount"
                  />
                  <label for="zero">Без отчетов</label>
                </div>
                <div class="sort-reportCount">
                  <input
                    type="radio"
                    id="no_more_than_20"
                    value="no_more_than_20"
                    name="reportCount"
                    v-model="reportCount"
                  />
                  <label for="no_more_than_20">Не более 20 отчетов</label>
                </div>
                <div class="sort-reportCount">
                  <input
                    type="radio"
                    id="20_to_99"
                    value="20_to_99"
                    name="reportCount"
                    v-model="reportCount"
                  />
                  <label for="20_to_99">От 20 до 100 отчетов</label>
                </div>
                <div class="sort-reportCount">
                  <input
                    type="radio"
                    id="100AndMore"
                    value="100AndMore"
                    name="reportCount"
                    v-model="reportCount"
                  />
                  <label for="more_than_100">Более 100 отчетов</label>
                </div>
              </div>
            </div>
            <button
              class="single-button setting-button"
              @click="sortingAFiltering"
            >
              <img
                class="icon-btn"
                width="18"
                height="18"
                src="../../assets/imgs/ready.png"
                alt="Ready"
              />
              Готово
            </button>
          </div>
        </div>
      </div>
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
      searchText: "",
      ordering: "name",
      method: "",
      admareaName: "",
      reportCount: "no_matter",
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