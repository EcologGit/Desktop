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

    <section class="settings" v-show="visibleCards == 'reports'">
      <div class="dropdown">
        <button
          v-bind:class="{ active: visibleDropdown }"
          class="button-text dropbtn"
          @click="visibleDropdown = !visibleDropdown"
        >
          <img
            class="setting-icon"
            src="../../assets/imgs/setting1.png"
            alt=""
          />
          Сортировка
        </button>
        <div v-show="visibleDropdown" class="dropdown-content">
          <button class="active" @click="sort" href="#home">ПО АЛФАВИТУ</button>
          <button @click="sort" href="#about">ПО РЕЙТИНГУ</button>
          <button @click="sort" href="#contact">ПО УДАЛЕННОСТИ</button>
          <button @click="sort" href="#contact">ПО ПОПУЛЯРНОСТИ</button>
        </div>
      </div>
      <button class="button-text">
        <img class="setting-icon" src="../../assets/imgs/setting2.png" alt="" />
        Параметры
      </button>
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
    newFunc() {
    },
  },
};
</script>