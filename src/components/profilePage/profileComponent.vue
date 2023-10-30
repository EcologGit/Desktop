<template>
  <main class="main">
    <section class="visible-main" v-show="visibleMain">
      <section class="card profile-user">
        <img
          src="../../assets/imgs/profile_photo.png"
          alt=""
          class="card-img"
        />
        <div class="card-child card-content">
          <div class="card-content-wrapping">
            <div class="card-header">
              <div class="user-info">
                <div class="card-name profile">Евгений Базаров</div>
                <div class="card-nameId">@{{ dataProfile.username }}</div>
              </div>
            </div>
            <div class="user-data">
              <div class="about-user">
                <div class="place-of-residence">
                  <img
                    class="icon-margin"
                    width="11"
                    height="18"
                    src="../../assets/imgs/map.png"
                    alt=""
                    style="margin-left: 3px; margin-right: 11px"
                  />
                  Одинцово
                </div>
                <div class="dob">
                  <img
                    class="icon-margin"
                    width="18"
                    height="18"
                    src="../../assets/imgs/dob.png"
                    alt=""
                  />
                  08.09.1997
                </div>
                <div class="status">
                  <img
                    class="icon-margin"
                    width="18"
                    height="16"
                    src="../../assets/imgs/status.png"
                    alt=""
                  />
                  Студент
                </div>
              </div>
              <div class="btns-circle-icon">
                <a class="a-circle-icon" @click="navigateTo()">
                  <img
                    class="cirlce-img"
                    src="../../assets/imgs/settings_button.png"
                    alt=""
                  />
                </a>
                <a class="a-circle-icon" @click="logout">
                  <img
                    class="cirlce-img"
                    src="../../assets/imgs/logout_button.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="buttons profile">
        <router-link
          :to="{ name: 'profileReports', params: { id: 1 } }"
          class="links-width"
        >
          <button class="btn-profile active" @click="changeCard">
            <img
              class="icon-btn"
              v-show="visibleCards != 'reports'"
              @click="changeCard"
              width="15"
              height="18"
              src="../../assets/imgs/reports.png"
              alt="reports"
            />
            <img
              class="icon-btn"
              v-show="visibleCards == 'reports'"
              @click="changeCard"
              width="15"
              height="18"
              src="../../assets/imgs/reports_white.png"
              alt="reports"
            />
            Отчеты
          </button>
        </router-link>
        <router-link
          :to="{ name: 'profileStatistics', params: { id: 1 } }"
          class="links-width"
        >
          <button class="btn-profile btn-statistics" @click="changeCard">
            <img
              class="icon-btn"
              v-show="visibleCards != 'statistics'"
              @click="changeCard"
              width="15"
              height="18"
              src="../../assets/imgs/statistics.png"
              alt="Statistics"
            />
            <img
              class="icon-btn"
              v-show="visibleCards == 'statistics'"
              @click="changeCard"
              width="15"
              height="18"
              src="../../assets/imgs/statistics_white.png"
              alt="Statistics"
            />
            Статистика
          </button>
        </router-link>
      </section>
    </section>
    <router-view></router-view>
  </main>
</template>

<script>
import { baseApi } from "..//shared//api//base//BaseApi.js";
import { userUrls } from "@/components/apiUrls/users/usersUrls.js";
export default {
  inject: ["isAuthenticated", "tokenAuthenticated", "userId"],

  data() {
    return {
      dataProfile: this.fetchDataProfileAPI(),

      visibleCards: "reports",
      visibleMain: true,
    };
  },
  methods: {
    navigateTo() {
      this.visibleMain = false;
      this.$router.push({
        name: "settings",
      });
    },
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

        if (target.classList.contains("btn-statistics")) {
          this.visibleCards = "statistics";
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
    async fetchDataProfileAPI() {
      await baseApi
        .get(`/user_profiles/profile_info/${this.$route.params.id}/`)
        .then((response) => {
          this.dataProfile = response.data;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    logout() {
      const config = {
        method: "post",
        withCredentials: true
      };
      baseApi.request(userUrls.logoutUser, config)
      .then(() => {
        this.userId.value = null;
        localStorage.removeItem('access_token');
      })
      .finally(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
