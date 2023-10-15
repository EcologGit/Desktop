<template>
  <main class="main">
    <section class="login">
      <p class="">Вход</p>
      <div class="inputs">
        <div class="input">
          Почта
          <input
            class="input settings"
            type="email"
            v-model="username"
            placeholder="Введите почту"
          />
        </div>

        <div class="input">
          <div class="password-label-wrapping">
            <div class="password-label">Пароль</div>
            <button
              class="password-control-wrapping-login"
              @click="show_hide_password($event)"
            >
              <a class="password-control login-password"></a> ПОКАЗАТЬ
            </button>
          </div>
          <div class="password-wrapping">
            <input
              id="password-login"
              class="input settings"
              type="password"
              placeholder="Введите пароль"
              v-model="password"
            />
          </div>
        </div>
      </div>
      <div class="active-buttons">
        <button class="btn-profile" @click="postSignIn">
          <img
            class="icon-btn"
            width="9"
            height="18"
            src="../../assets/imgs/key_black.png"
            alt="reports"
          />
          Войти
        </button>
        <router-link to="/profile/signup" class="text-button">
          <img
            class="a-img"
            width="18"
            height="18"
            src="../../assets/imgs/signUp_black.png"
            alt="Зарегистрироваться"
          />
          <div>ЗАРЕГИСТРИРОВАТЬСЯ</div>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import { baseApi } from '../shared/api/base/BaseApi.js'

export default {
  inject: ["isAuthenticated"],

  data() {
    return {
      visibleCards: "reports",
      username: "",
      password: "",
    };
  },
  methods: {
    show_hide_password(event) {
      const target = event.target;
      if (target.matches(".view")) {
        target.classList.remove("view");
        document
          .getElementById("password-login")
          .setAttribute("type", "password");
      } else {
        target.classList.add("view");
        document.getElementById("password-login").setAttribute("type", "text");
      }
    },

    async postSignIn() {
      var urlencoded = new URLSearchParams();
      urlencoded.append("username", this.username);
      urlencoded.append("password", this.password);
      await baseApi.post(`/users/api/browser_token/`, urlencoded)
        .then((result) => {
          const data = result.data;
          if (
            data["access"] != null &&
            data["access"] != undefined &&
            data["access"] != ""
          ) {
            localStorage.setItem('access_token', data["access"]);
            this.isAuthenticated.value = true;
            this.navigateTo(data['id']);
          } else {
            return false;
          }
        })
        .catch((error) => console.log("error", error));
    },
    navigateTo(id) {
      this.$router.push({
        name: "profileReports",
        params: { id: id },
      });
    },
  },
};
</script>