<template>
  <main class="main" id="app">
    <form>
      <section class="settings-personal">
        <div class="personal-info">
          Личная информация
          <div class="personal-name">
            Имя
            <input
              class="input settings"
              placeholder="Введите имя"
              type="text"
              :value="dataProfile.first_name"
              @change="(e) => setData('first_name', e.target.value)"
            />
          </div>
          <div class="personal-surname">
            Фамилия
            <input
              class="input settings"
              placeholder="Введите фамилию"
              type="text"
              :value="dataProfile.last_name"
              @change="(e) => setData('last_name', e.target.value)"
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
                  :checked="dataProfile.sex === 'M'"
                  @change="setData('sex', 'M')"
                />
                <label for="men">Мужской</label>
              </div>
              <div class="form_toggle-item item-2">
                <input
                  id="fid-2"
                  type="radio"
                  name="radio"
                  :checked="dataProfile.sex === 'F'"
                  @change="setData('sex', 'F')"
                />
                <label for="fid-2">Женский</label>
              </div>
            </div>
          </div>
          <div class="personal-dob">
            Дата рождения
            <input
              class=""
              type="date"
              required
              max="9999-12-31"
              :value="dataProfile.birth_date"
              @change="(e) => setData('birth_date', e.target.value)"
            />
          </div>

          <div class="personal-KindOfActivity">
            Вид деятельности
            <input
              class="input settings"
              placeholder="Введите вид деятельности"
              type="text"
              :value="dataProfile.kind_of_activity"
              @change="(e) => setData('kind_of_activity', e.target.value)"
            />
          </div>
          <div class="personal-locality">
            Населенный пункт
            <input
              class="input settings"
              placeholder="Введите населенный пункт"
              type="text"
              :value="dataProfile.locality"
              @change="(e) => setData('locality', e.target.value)"
            />
          </div>
        </div>
        <div class="login-options">
          Параметры входа
          <div class="personal-nickname">
            Никнейм
            <input
              class="input settings"
              placeholder="Никнейм"
              type="text"
              :value="dataProfile.username"
            />
          </div>
          <div class="personal-phone">
            Номер телефона
            <input
              class="input settings"
              type="tel"
              placeholder="+7 (123) 456-78-90"
              :value='dataProfile.phone_number' 
              @change="(e) => setData('phone_number', e.target.value)"
            />
          </div>
          <div class="personal-email">
            Электронная почта
            <input
              class="input settings"
              type="email"
              placeholder="Введите электронную почту"
              :value="dataProfile.email"
              @change="(e) => setData('email', e.target.value)"
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
      <button class="single-button save" @click="saveProfileData">
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
import { baseApi } from "..//shared//api//base//BaseApi.js";
export default {
  data() {
    return {
      visibleMore: false,
      dataProfile: this.fetchDataProfileAPI(),
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
    async saveProfileData(e) {
      e.preventDefault();
      await baseApi
        .patch(
          `/user_profiles/update_profile_info/${this.$route.params.id}/`,
          this.dataProfile
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setData(name, value) {
      let newObj = { ...this.dataProfile };
      newObj[name] = value;
      this.dataProfile = newObj;
    },
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
