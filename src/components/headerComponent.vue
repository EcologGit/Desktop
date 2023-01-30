import styles from './foo.module.css'

<template>
  <header class="header">
    <router-link to="/" class="name-page" @click="changePage">
      <div class="active-page">{{ title }}</div>
    </router-link>
    <nav class="navs navs-header">
      <router-link to="/review" class="a-header review" @click="changePage">
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
        <div>Обзор</div>
      </router-link>

      <router-link to="/feed" class="a-header feed" @click="changePage">
        <img
          id="icon-feed"
          v-show="visiblePage != 'feed'"
          @click="changePage"
          width="18"
          height="9"
          class="a-img"
          src="../assets/imgs/feed_black.png"
          alt="Иконка Лента"
        />
        <img
          id="icon-feed"
          v-show="visiblePage == 'feed'"
          @click="changePage"
          width="18"
          height="9"
          class="a-img"
          src="../assets/imgs/feed.png"
          alt="Иконка Лента"
        />
        <div>Лента</div>
      </router-link>

      <router-link to="/marks" class="a-header marks" @click="changePage">
        <img
          class="a-img"
          @click="changePage"
          v-show="visiblePage != 'marks'"
          width="11"
          height="18"
          src="../assets/imgs/favorite_black.png"
          alt="Иконка Отметки"
        />
        <img
          class="a-img"
          @click="changePage"
          v-show="visiblePage == 'marks'"
          width="11"
          height="18"
          src="../assets/imgs/favorite.png"
          alt="Иконка Отметки"
        />
        <div>Отметки</div>
      </router-link>

      <router-link to="/profile" class="a-header profile" @click="changePage">
        <img
          class="a-img"
          @click="changePage"
          v-show="visiblePage != 'profile'"
          width="18"
          height="18"
          src="../assets/imgs/profile_black.png"
          alt="Иконка Профиль"
        />
        <img
          class="a-img"
          @click="changePage"
          v-show="visiblePage == 'profile'"
          width="18"
          height="18"
          src="../assets/imgs/profile.png"
          alt="Иконка Профиль"
        />
        <div>Профиль</div>
      </router-link>
      <div>
        <a class="a-circle-icon" style="border: none">
          <img src="../assets/imgs/newPlace.png" alt="Добавить" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      visiblePage: "home",
    };
  },
  methods: {
    changePage(event) {
      const headerDiv = document.querySelectorAll(".header * > div");
      let target = event.target.classList.contains("a-header")
        ? event.target
        : event.target.parentElement;
      console.log(target);

      headerDiv.forEach((el) => {
        if (el.matches(".active-page")) {
          el.classList.remove("active-page");
        }
      });

      if (target.classList.contains("review")) {
        this.visiblePage = "review";
        target.childNodes;
      } else if (target.classList.contains("feed")) {
        this.visiblePage = "feed";
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