<template>
  <div style="gap: 16px" class="centered-content-column">
    <div
      class="personal-oldPassword centered-all-content"
      style="flex-direction: column; text-align: center"
    >
      Старый пароль
      <div class="password-wrapping centered-all-content">
        <input
          class="input settings"
          type="password"
          placeholder="Введите старый пароль"
          :value="data.old_password"
          @change="(e) => setData('old_password', e.target.value)"
        />
        <a
          class="password-control setting-password"
          @click="show_hide_password($event)"
        ></a>
      </div>
    </div>
    <div style="margin-top: 10px">
      <div class="personal-newPassword centered-all-content">Новый пароль</div>
      <div class="password-wrapping centered-all-content">
        <input
          class="input settings"
          type="password"
          placeholder="Введите новый пароль"
          :value="data.new_password"
          @change="(e) => setData('new_password', e.target.value)"
        />
        <a
          class="password-control setting-password"
          @click="show_hide_password($event)"
        ></a>
      </div>
    </div>
    <div class="rules-password centered-all-content">
      Пароль должен содержать хотя бы одну заглавную и одну строчную букву, а
      также одну цифру. <br />
      Длина пароля должна быть не менее 8 символов. Недопустимо использование
      пробелов.
    </div>

    <button
      class="single-button save"
      @click="changePassword"
      style="margin-bottom: auto"
    >
      <img
        class="icon-margin"
        width="18"
        height="18"
        src="../../assets/imgs/save.png"
        alt=""
      />
      Сохранить
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { userUrls } from "@/components/apiUrls/users/usersUrls.js";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const data = ref({
  new_password: "",
  old_password: "",
});

const userId = inject('userId');
const router = useRouter()

function show_hide_password(event) {
  const target = event.target;
  if (target.matches(".view")) {
    target.classList.remove("view");
    target.parentElement.children[0].setAttribute("type", "password");
  } else {
    target.classList.add("view");
    target.parentElement.children[0].setAttribute("type", "text");
  }
}

function changePassword() {
  baseApi
    .patch(userUrls.changeUserPassword, {
      new_password: data.value?.new_password,
      old_password: data.value?.old_password,
    })
    .then((res) => {
      console.log(res);
      userId.value = null;
      localStorage.removeItem('access_token');
      router.push("/profile/login");
    })
    .catch((err) => console.log(err));
}

function setData(name, value) {
  let newObj = { ...data.value };
  newObj[name] = value;
  data.value = newObj;
}
</script>
