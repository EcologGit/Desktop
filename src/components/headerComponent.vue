<template>
  <header class="header">
    <router-link to="/" class="name-page" @click="setVisiblePage('home')">
      <div class="logo">
        <img src="../assets/imgs/logo_main.png" alt="Logo Aura" height="50" />
      </div>
    </router-link>
    <nav class="navs navs-header nav-titles">
      <NavItem
        route="/review/places"
        namePage="review"
        defaultImgSrc="assets/imgs/review_black.png"
        hoveringImgSrc="assets/imgs/review.png"
        nameItem="Обзор"
      />
      <NavItem
        route="/activity/reports"
        namePage="activity"
        defaultImgSrc="assets/imgs/activity_black.png"
        hoveringImgSrc="assets/imgs/activity.png"
        nameItem="Активность"
        :height="9"
      />
      <NavItem
        route="/profile/login"
        namePage="login"
        defaultImgSrc="assets/imgs/login.svg"
        hoveringImgSrc="assets/imgs/selected_login.svg"
        nameItem="Войти"
        :isHidden="userId.value"
      />
      <NavItem
        route="/marks/places"
        namePage="marks"
        defaultImgSrc="assets/imgs/favorite_black.png"
        hoveringImgSrc="assets/imgs/favorite.png"
        nameItem="Отметки"
        :isHidden="!userId.value"
        :width="11"
      />
      <NavItem
        :route="{ name: 'profileReports', params: { id: userId.value } }"
        namePage="profile"
        defaultImgSrc="assets/imgs/profile_black.png"
        hoveringImgSrc="assets/imgs/profile.png"
        nameItem="Профиль"
        :isHidden="!userId.value"
      />
      <div v-if="userId.value">
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
import NavItem from "@/components/widgets/nav/NavItem.vue";
import { ref, provide, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    NavItem,
  },
  setup() {
    const setNewVal = (val) => {
      return (newVal) => {
        val.value = newVal;
      };
    };
    const route = useRoute();
    const visiblePage = ref("home");
    const hoveringPage = ref("home");
    const setVisiblePage = setNewVal(visiblePage);
    const setHoveringPage = setNewVal(hoveringPage);
    provide("visiblePage", { visiblePage });
    provide("hoveringPage", { hoveringPage, setHoveringPage });

    watch(
      () => route.path,
      async () => {
        const currentPath = route.path;
        if (currentPath === "/profile/login") {
          visiblePage.value = "login";
        } else {
          const pathArr = currentPath.split("/").filter((key) => !!key);
          if (pathArr) {
            setVisiblePage(pathArr[0]);
          }
        }
      }
    );

    return {
      setVisiblePage,
    };
  },
  inject: ["userId"],
  props: {
    title: String,
  },
  methods: {
    navigateTo() {
      this.$router.push({
        name: "newReport",
      });
    },
  },
};
</script>
