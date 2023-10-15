<template>
  <footer class="footer">
    <div class="footer-wripping">
      <div class="info-version">
        <p>Полезный туризм</p>
        <p>Alpha version</p>
        <p>2023 г.</p>
      </div>
      <div>
      <liveInternetCounter/>
      <ramblerCounter/>
      <mailCounter/>
    </div>
      <div class="footer-links">
        <div class="block">
          <a href="#" class="footer-link">Обзор</a>
          <a href="#" class="footer-link">Места</a>
          <a href="#" class="footer-link">Маршруты</a>
          <a href="#" class="footer-link">Мероприятия</a>
          <a href="#" class="footer-link">Точки сортировки</a>
        </div>
        <div class="block">
          <a href="#" class="footer-link">Лента</a>
          <a href="#" class="footer-link">Отчеты</a>
          <a href="#" class="footer-link">Топ результаты</a>
        </div>
        <div class="block">
          <a href="#" class="footer-link">Отметки</a>
          <a href="#" class="footer-link">Места</a>
          <a href="#" class="footer-link">Маршруты</a>
          <a href="#" class="footer-link">Мероприятия</a>
          <a href="#" class="footer-link">Точки сортировки</a>
        </div>
        <div class="block">
          <a href="#" class="footer-link">Профиль</a>
          <a href="#" class="footer-link">Отчеты</a>
          <a href="#" class="footer-link">Статистика</a>
          <a href="#" class="footer-link">Настройки</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import liveInternetCounter from "./liveInternetCounter.vue";
import ramblerCounter from './ramblerCounter.vue';
import mailCounter from './mailCounter.vue'
export default {
  components: {
    liveInternetCounter,
    ramblerCounter,
    mailCounter,
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    openTask() {},
  },
};
</script>