<template>
  <main class="main">
    <section class="buttons activity">
      <router-link to="/activity/reports" class="links-width">
        <button class="btn-activity active" @click="changeCard">
          <img
            class="icon-btn"
            v-show="visibleCards != 'reports'"
            width="15"
            height="18"
            src="../../assets/imgs/reports.png"
            alt="Reports"
          />
          <img
            class="icon-btn"
            v-show="visibleCards == 'reports'"
            width="15"
            height="18"
            src="../../assets/imgs/reports_white.png"
            alt="Reports"
          />
          Отчет
        </button>
      </router-link>
      <router-link to="/activity/medals" class="links-width">
        <button class="btn-activity btn-medals" @click="changeCard">
          <img
            class="icon-btn"
            v-show="visibleCards != 'medals'"
            width="15"
            height="18"
            src="../../assets/imgs/medals.png"
            alt="Medals"
          />
          <img
            class="icon-btn"
            v-show="visibleCards == 'medals'"
            width="15"
            height="18"
            src="../../assets/imgs/medals_white.png"
            alt="Medals"
          />
          Топ-результаты
        </button>
      </router-link>
    </section>

    <section class="settings">
      <button
        v-bind:class="{ active: visibleModalSorting }"
        class="button-text setting dropbtn"
        @click="visibleModalSorting = true"
      >
        <img src="../../assets/imgs/setting1.png" alt="" class="setting-icon" />
        Сортировка
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
                      value="Alphabet"
                      name="option"
                      v-model="option"
                    />
                    <label for="alphabet">По алфавиту</label>
                  </div>
                  <div class="sort-option">
                    <input
                      type="radio"
                      id="rating"
                      value="Rating"
                      name="option"
                      v-model="option"
                    />
                    <label for="rating">По рейтингу</label>
                  </div>
                  <div class="sort-option">
                    <input
                      type="radio"
                      id="popular"
                      value="Popular"
                      name="option"
                      v-model="option"
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
                      value="Ascending"
                      name="method"
                      v-model="method"
                    />
                    <label for="ascending">По возрастанию</label>
                  </div>
                  <div class="sort-option">
                    <input
                      type="radio"
                      id="descending"
                      value="Descending"
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
              @click="visibleModalSorting = false"
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
              />
            </div>
            <div class="modal-parameter">
              <div class="label-parameter">Количество отчетов</div>
              <div class="part-options">
                <div class="sort-numberOfReports">
                  <input
                    type="radio"
                    id="unimportant"
                    value="Unimportant"
                    name="numberOfReports"
                    v-model="numberOfReports"
                  />
                  <label for="unimportant">Неважно</label>
                </div>
                <div class="sort-numberOfReports">
                  <input
                    type="radio"
                    id="noReports"
                    value="NoReports"
                    name="numberOfReports"
                    v-model="numberOfReports"
                  />
                  <label for="noReports">Без отчетов</label>
                </div>
                <div class="sort-numberOfReports">
                  <input
                    type="radio"
                    id="20Andless"
                    value="20Andless"
                    name="numberOfReports"
                    v-model="numberOfReports"
                  />
                  <label for="20Andless">Не более 20 отчетов</label>
                </div>
                <div class="sort-numberOfReports">
                  <input
                    type="radio"
                    id="20-100"
                    value="20-100"
                    name="numberOfReports"
                    v-model="numberOfReports"
                  />
                  <label for="20-100">От 20 до 100 отчетов</label>
                </div>
                <div class="sort-numberOfReports">
                  <input
                    type="radio"
                    id="100AndMore"
                    value="100AndMore"
                    name="numberOfReports"
                    v-model="numberOfReports"
                  />
                  <label for="100AndMore">Более 100 отчетов</label>
                </div>
              </div>
            </div>
            <button
              class="single-button setting-button"
              @click="visibleModalParameters = false"
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
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  data() {
    return {
      visibleCards: "reports",
      visibleDropdown: false,
      option: "Alphabet",
      method: "Ascending",
      numberOfReports: "Unimportant",
      sortPlaces: [],
      visibleModalSorting: false,
      visibleModalParameters: false,
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

        if (target.classList.contains("btn-medals")) {
          this.visibleCards = "medals";
        } else {
          this.visibleCards = "reports";
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
    newFunc() {},
  },
};
</script>