<template>
  <main class="main">
    <section class="signup">
      <p class="title">Регистрация</p>
      <div class="wrap-inputs">
        <div class="inputs-signup">
          <div class="bloc-inputs">
            <div class="personal-name">
              Имя
              <input
                class="input settings"
                placeholder="Введите имя"
                type="text"
              />
            </div>
            <div class="personal-surname">
              Фамилия
              <input
                class="input settings"
                placeholder="Введите фамилию"
                type="text"
              />
            </div>
            <div class="personal-phone">
              Номер телефона
              <input
                class="input settings"
                type="tel"
                placeholder="+7 (123) 456-78-90"
              />
            </div>
            <div class="personal-email">
              Электронная почта
              <input
                class="input settings"
                type="email"
                placeholder="Введите электронную почту"
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
          <div class="bloc-inputs">
            <div class="personal-nickname">
              Никнейм
              <input class="input settings" placeholder="Никнейм" type="text" />
            </div>
            <div class="personal-dob">
              Дата рождения
              <input
                class="input settings"
                align-items="middle"
                type="date"
                placeholder="Дата рождения"
                value="2000-06-01"
              />
            </div>
            <div class="personal-sex">
              Пол
              <div class="form_toggle">
                <div class="form_toggle-item item-1">
                  <input
                    id="men"
                    type="radio"
                    name="radio"
                    value="man"
                    checked
                  />
                  <label for="men">Мужской</label>
                </div>
                <div class="form_toggle-item item-2">
                  <input id="fid-2" type="radio" name="radio" value="woman" />
                  <label for="fid-2">Женский</label>
                </div>
              </div>
            </div>
            <div class="personal-KindOfActivity">
              Вид деятельности
              <input
                class="input settings"
                placeholder="Введите вид деятельности"
                type="text"
              />
            </div>
            <div class="personal-locality">
              Населенный пункт
              <input
                class="input settings"
                placeholder="Введите населенный пункт"
                type="text"
              />
            </div>
          </div>
        </div>
        <button class="single-button signup-button-photo" @click="fetchData()">
          <img
            width="18"
            height="14"
            src="../../assets/imgs/photo_white.png"
            alt=""
          />
          Добавить фото
        </button>
      </div>
      <div class="active-buttons">
        <div class="signup-button">
          <div>
            Нажимая на кнопку «Зарегистрироваться», Вы соглашаетесь с Условиями
            использования сервиса
          </div>
          <button class="btn-profile">
            <img
              class="icon-btn"
              width="18"
              height="18"
              src="../../assets/imgs/signUp_black.png"
              alt="reports"
            />
            Зарегистрироваться
          </button>
        </div>
        <router-link to="/profile/login" class="text-button">
          <img
            class="a-img"
            width="9"
            height="18"
            src="../../assets/imgs/key_black.png"
            alt="Зарегистрироваться"
          />
          <div>Войти</div>
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
    newFunc() {},
  },
};
</script>