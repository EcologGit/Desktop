
<template>
  <header class="header">
    <router-link to="/" class="name-page" @click="changePage">
      <div class="logo">
        <img src="../assets/imgs/logo_main.png" alt="Logo Aura" height="50" />
      </div>
    </router-link>
    <nav class="navs navs-header nav-titles">
      <router-link
        to="/review/places"
        class="a-header review"
        @click="changePage"
      >
        <img
          class="a-img"
          v-show="visiblePage != 'review'"
          @click="changePage"
          width="18"
          height="18"
          src="../assets/imgs/review_black.png"
          alt="Иконка Обзор"
        />
        <img
          class="a-img"
          v-show="visiblePage == 'review'"
          @click="changePage"
          width="18"
          height="18"
          src="../assets/imgs/review.png"
          alt="Иконка Обзор"
        />
        <p>Обзор</p>
      </router-link>

      <router-link
        to="/activity/reports"
        class="a-header activity"
        @click="changePage"
      >
        <img
          id="icon-activity"
          v-show="visiblePage != 'activity'"
          @click="changePage"
          width="18"
          height="9"
          class="a-img"
          src="../assets/imgs/activity_black.png"
          alt="Иконка Лента"
        />
        <img
          id="icon-activity"
          v-show="visiblePage == 'activity'"
          @click="changePage"
          width="18"
          height="9"
          class="a-img"
          src="../assets/imgs/activity.png"
          alt="Иконка Лента"
        />
        <p>Активность</p>
      </router-link>

      <router-link
        :to="userId.value ? '/marks/places' : ''"
        class="a-header marks"
        :class="userId.value ? '' : 'disabled'"
        @click="changePage(userId.value)"
      >
        <img
          class="a-img"
          @click="changePage(userId.value)"
          v-show="visiblePage != 'marks'"
          width="11"
          height="18"
          src="../assets/imgs/favorite_black.png"
          alt="Иконка Отметки"
        />
        <img
          class="a-img"
          @click="changePage(userId.value)"
          v-show="visiblePage == 'marks'"
          width="11"
          height="18"
          src="../assets/imgs/favorite.png"
          alt="Иконка Отметки"
        />
        <p :class="userId.value ? '' : 'disabled'">Отметки</p>
      </router-link>

      <router-link
        :to="
          userId.value
            ? { name: 'profileReports', params: { id: userId.value } }
            : ''
        "
        class="a-header profile"
        @click="changePage(authenticated)"
        :class="userId.value ? '' : 'disabled'"
      >
        <img
          class="a-img"
          @click="changePage(authenticated)"
          v-show="visiblePage != 'profile'"
          width="18"
          height="18"
          src="../assets/imgs/profile_black.png"
          alt="Иконка Профиль"
        />
        <img
          class="a-img"
          @click="changePage(authenticated)"
          v-show="visiblePage == 'profile'"
          width="18"
          height="18"
          src="../assets/imgs/profile.png"
          alt="Иконка Профиль"
        />
        <p :class="userId.value ? '' : 'disabled'">Профиль</p>
      </router-link>
      <div>
        <a class="a-circle-icon" style="border: none" @click="navigateTo()">
          <img
            class="cirlce-img"
            src="../assets/imgs/add_place.png"
            alt="Добавить"
          />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  inject: ["isAuthenticated", "userId"],

  props: {
    title: String,
  },
  data() {
    return {
      visiblePage: "home",
      authenticated: this.isAuthenticated,
    };
  },
  methods: {
    navigateTo() {
      this.$router.push({
        name: "newReport",
      });
    },
    changePage(status, event) {
      if (status == false) return;
      const headerDiv = document.querySelectorAll(".navs-header * > div");
      let target = event.target.classList.contains("a-header")
        ? event.target
        : event.target.parentElement;

      headerDiv.forEach((el) => {
        if (el.matches(".active-page")) {
          el.classList.remove("active-page");
        }
      });

      if (target.classList.contains("review")) {
        this.visiblePage = "review";
        target.childNodes;
      } else if (target.classList.contains("activity")) {
        this.visiblePage = "activity";
      } else if (target.classList.contains("marks")) {
        this.visiblePage = "marks";
      } else if (target.classList.contains("profile")) {
        this.visiblePage = "profile";
      } else {
        this.visiblePage = "home";
      }

      target.childNodes.forEach((el) => {
        if (el.matches("div")) {
          el.classList.add("active-page");
        }
      });
    },
  },
};
</script>