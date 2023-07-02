<template>
  <main class="main">
    <section class="login">
      <p class="">Вход</p>
      <div class="inputs">
        <div class="input">
          <div>Почта</div>
          <input
            class="input settings"
            placeholder="Введите почту"
            type="text"
          />
        </div>
        <div class="input">
          <div class="input-label">
            <div>Пароль</div>
            <button class="hidden-password-button">
              <a
                @click="show_hide_password($event)"
                class="password-control login-password"
              >
              </a>
              ПОКАЗАТЬ
            </button>
          </div>
          <input
            class="input settings"
            placeholder="Введите пароль"
            type="text"
          />
        </div>
        <div class="personal-newPassword">
          Новый пароль
          <div class="password-wrapping">
            <input
              class="input settings"
              type="password"
              placeholder="Введите новый пароль"
            />
            <a
              class="password-control setting-password"
              @click="show_hide_password($event)"
            ></a>
          </div>
        </div>
      </div>
      <div class="active-buttons">
        <button class="btn-profile">
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
export default {
  data() {
    return {
      visibleCards: "reports",
    };
  },
  methods: {
    show_hide_password(event) {
      const target = event.target;
      if (target.matches(".view")) {
        target.classList.remove("view");
        target.parentElement.children[0].setAttribute("type", "password");
      } else {
        target.classList.add("view");
        target.parentElement.children[0].setAttribute("type", "text");
      }
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
    newFunc() {
      console.log("hello");
    },
  },
};
</script>