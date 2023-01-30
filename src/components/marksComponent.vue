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
          src="../assets/imgs/places.png"
          alt="Places"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'places'"
          @click="changeCard"
          width="18"
          height="18"
          src="../assets/imgs/places_white.png"
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
          src="../assets/imgs/routes.png"
          alt="Places"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'routes'"
          @click="changeCard"
          width="15"
          height="18"
          src="../assets/imgs/routes_white.png"
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
          src="../assets/imgs/events.png"
          alt="Places"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'events'"
          @click="changeCard"
          width="18"
          height="18"
          src="../assets/imgs/events_white.png"
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
          src="../assets/imgs/sortPoints.png"
          alt="Places"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'sortPoints'"
          @click="changeCard"
          width="16"
          height="18"
          src="../assets/imgs/sortPoints_white.png"
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
      <img src="../assets/imgs/search.png" alt="" class="search-icon" />
    </section>

    <section class="settings">
      <div class="dropdown">
        <button
          v-bind:class="{ active: visibleDropdown }"
          class="button-text setting dropbtn"
          @click="visibleDropdown = !visibleDropdown"
        >
          <img src="../assets/imgs/setting1.png" alt="" class="setting-icon" />
          Сортировка
        </button>
        <div v-show="visibleDropdown" class="dropdown-content">
          <button class="active" @click="sort" href="#home">ПО АЛФАВИТУ</button>
          <button @click="sort" href="#about">ПО РЕЙТИНГУ</button>
          <button @click="sort" href="#contact">ПО УДАЛЕННОСТИ</button>
          <button @click="sort" href="#contact">ПО ПОПУЛЯРНОСТИ</button>
        </div>
      </div>
      <button class="button-text setting">
        <img src="../assets/imgs/setting2.png" alt="" class="setting-icon" />
        Параметры
      </button>
    </section>

    <section v-show="visibleCards == 'places'" class="cards marks">
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Щуровский лесопарк</div>
            <div class="coordinates">
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../assets/imgs/map.png"
                  alt=""
                />
                Коломна
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Щуровский лесопарк</div>
            <div class="coordinates">
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../assets/imgs/map.png"
                  alt=""
                />
                Коломна
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Щуровский лесопарк</div>
            <div class="coordinates">
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../assets/imgs/map.png"
                  alt=""
                />
                Коломна
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Щуровский лесопарк</div>
            <div class="coordinates">
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../assets/imgs/map.png"
                  alt=""
                />
                Коломна
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-show="visibleCards == 'routes'" class="cards marks routes">
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Голубые озера Подмосковья</div>
            <div class="coordinates">
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../assets/imgs/start.png"
                  alt=""
                />
                Start
              </div>
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../assets/imgs/finish.png"
                  alt=""
                />
                Finish
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Голубые озера Подмосковья</div>
            <div class="coordinates">
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../assets/imgs/start.png"
                  alt=""
                />
                Start
              </div>
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../assets/imgs/finish.png"
                  alt=""
                />
                Finish
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Голубые озера Подмосковья</div>
            <div class="coordinates">
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../assets/imgs/start.png"
                  alt=""
                />
                Start
              </div>
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../assets/imgs/finish.png"
                  alt=""
                />
                Finish
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Голубые озера Подмосковья</div>
            <div class="coordinates">
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../assets/imgs/start.png"
                  alt=""
                />
                Start
              </div>
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../assets/imgs/finish.png"
                  alt=""
                />
                Finish
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-show="visibleCards == 'events'" class="cards marks events">
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Субботник в парке Мира</div>
            <div class="coordinates">
              <div class="coordinates">
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="11"
                    height="18"
                    src="../assets/imgs/map.png"
                    alt=""
                  />
                  Воскресенск
                </div>
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/flag_black.png"
                    alt=""
                  />
                  Карьер “Песчаный”
                </div>
              </div>
              <div class="km-time">
                <div class="km">
                  <img
                    class="icon-margin"
                    width="18"
                    height="16"
                    src="../assets/imgs/calendar.png"
                    alt=""
                  />
                  29.10.2022
                </div>
                <div class="time">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/clock.png  "
                    alt=""
                  />
                  10:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Субботник в парке Мира</div>
            <div class="coordinates">
              <div class="coordinates">
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="11"
                    height="18"
                    src="../assets/imgs/map.png"
                    alt=""
                  />
                  Воскресенск
                </div>
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/flag_black.png"
                    alt=""
                  />
                  Карьер “Песчаный”
                </div>
              </div>
              <div class="km-time">
                <div class="km">
                  <img
                    class="icon-margin"
                    width="18"
                    height="16"
                    src="../assets/imgs/calendar.png"
                    alt=""
                  />
                  29.10.2022
                </div>
                <div class="time">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/clock.png  "
                    alt=""
                  />
                  10:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Субботник в парке Мира</div>
            <div class="coordinates">
              <div class="coordinates">
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="11"
                    height="18"
                    src="../assets/imgs/map.png"
                    alt=""
                  />
                  Воскресенск
                </div>
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/flag_black.png"
                    alt=""
                  />
                  Карьер “Песчаный”
                </div>
              </div>
              <div class="km-time">
                <div class="km">
                  <img
                    class="icon-margin"
                    width="18"
                    height="16"
                    src="../assets/imgs/calendar.png"
                    alt=""
                  />
                  29.10.2022
                </div>
                <div class="time">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/clock.png  "
                    alt=""
                  />
                  10:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Субботник в парке Мира</div>
            <div class="coordinates">
              <div class="coordinates">
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="11"
                    height="18"
                    src="../assets/imgs/map.png"
                    alt=""
                  />
                  Воскресенск
                </div>
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/flag_black.png"
                    alt=""
                  />
                  Карьер “Песчаный”
                </div>
              </div>
              <div class="km-time">
                <div class="km">
                  <img
                    class="icon-margin"
                    width="18"
                    height="16"
                    src="../assets/imgs/calendar.png"
                    alt=""
                  />
                  29.10.2022
                </div>
                <div class="time">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/clock.png  "
                    alt=""
                  />
                  10:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-show="visibleCards == 'sortPoints'"
      class="cards marks sortPoints"
    >
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Пункт приема мукулатуры</div>
            <div class="coordinates">
              <div class="coordinates">
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="11"
                    height="18"
                    src="../assets/imgs/map.png"
                    alt=""
                  />
                  Егорьевск
                </div>
              </div>
              <div class="km-time">
                <div class="time">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/clock.png  "
                    alt=""
                  />
                  00:00 - 00:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Субботник в парке Мира</div>
            <div class="coordinates">
              <div class="coordinates">
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="11"
                    height="18"
                    src="../assets/imgs/map.png"
                    alt=""
                  />
                  Егорьевск
                </div>
              </div>
              <div class="km-time">
                <div class="time">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/clock.png  "
                    alt=""
                  />
                  00:00 - 00:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Субботник в парке Мира</div>
            <div class="coordinates">
              <div class="coordinates">
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="11"
                    height="18"
                    src="../assets/imgs/map.png"
                    alt=""
                  />
                  Егорьевск
                </div>
              </div>
              <div class="km-time">
                <div class="time">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/clock.png  "
                    alt=""
                  />
                  00:00 - 00:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card marks">
        <img
          src="../assets/imgs/forest.png"
          alt=""
          class="card-child card-img marks"
        />
        <div class="card-child card-content marks">
          <div class="card-content-wrapping marks">
            <div class="card-title">Субботник в парке Мира</div>
            <div class="coordinates">
              <div class="coordinates">
                <div class="coordinate feed">
                  <img
                    class="icon-margin"
                    width="11"
                    height="18"
                    src="../assets/imgs/map.png"
                    alt=""
                  />
                  Егорьевск
                </div>
              </div>
              <div class="km-time">
                <div class="time">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../assets/imgs/clock.png  "
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
  </main>
</template>

<script>
export default {
  data() {
    return {
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
    visibleCardsFunc() {
      console.log(this.visibleCards);
      console.log(this.changeCards());
    },
  },
};
</script>