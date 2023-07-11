<template>
  <main class="main" id="app">
    <form method="post">
      <section class="settings-personal">
        <div class="personal-info">
          Личная информация
          <div class="personal-name">
            Имя
            <input
              class="input settings"
              placeholder="Введите имя"
              type="text"
              v-model.trim="msg"
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
          <div class="personal-sex">
            Пол
            <div class="form_toggle">
              <div class="form_toggle-item item-1">
                <input id="men" type="radio" name="radio" value="man" checked />
                <label for="men">Мужской</label>
              </div>
              <div class="form_toggle-item item-2">
                <input id="fid-2" type="radio" name="radio" value="woman" />
                <label for="fid-2">Женский</label>
              </div>
            </div>
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
        <div class="login-options">
          Параметры входа
          <div class="personal-nickname">
            Никнейм
            <input class="input settings" placeholder="Никнейм" type="text" />
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
          <div class="personal-oldPassword">
            Старый пароль
            <div class="password-wrapping">
              <input
                class="input settings"
                type="password"
                placeholder="Введите старый пароль"
              />
              <a
                class="password-control setting-password"
                @click="show_hide_password($event)"
              ></a>
            </div>
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
          <div class="rules-password">
            Пароль должен содержать хотя бы одну заглавную и одну строчную
            букву, а также одну цифру. Длина пароля должна быть не менее 8
            символов. Недопустимо использование пробелов.
          </div>
        </div>
      </section>
      <button class="single-button save" @click="fetchData()">
        <img
          class="icon-margin"
          width="18"
          height="18"
          src="../../assets/imgs/save.png"
          alt=""
        />
        Сохранить
      </button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      visibleMore: false,
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
    fetchData() {},
  },
  computed: {
    calcNotes() {
      return this.notes.length * 5;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length === 5) {
        this.notes = [];
      }
    },
  },
};
</script>