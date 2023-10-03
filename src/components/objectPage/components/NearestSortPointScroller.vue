<script setup>
import { ref, watch } from "vue";
import sliderTouch from "..//..//ui//sliderTouch//sliderTouch.vue";
import "..//..//..//consts//eventStatus//styles.css";
import "..//..//ui//sliderTouch//styles.css";
import { url } from "@/main.js";

const props = defineProps(["sortPointsUrl"]);

const nearestSortPoints = ref([]);
const urlNextNearestSortPoints = ref(props.sortPointsUrl);
const isLoading = ref(false);
const isLoadReady = ref(false);

function fetchNearestSortPoints(url) {
  isLoading.value = true;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const newData = response.results;
      if (nearestSortPoints.value.length > 0) {
        nearestSortPoints.value = [...nearestSortPoints.value, ...newData];
      } else {
        nearestSortPoints.value = newData;
      }
      urlNextNearestSortPoints.value = response.next;
    })
    .catch((error) => {
      this.answer = "Ошибка! Нет доступа к API. " + error;
    })
    .finally(() => {
      isLoading.value = false;
    });
}

function setIsLoadReady(val) {
  isLoadReady.value = val;
}

watch(isLoadReady, (newQuestion) => {
  if (!isLoading.value && newQuestion && urlNextNearestSortPoints.value) {
    fetchNearestSortPoints(urlNextNearestSortPoints);
  }
});

fetchNearestSortPoints(urlNextNearestSortPoints.value);
</script>

<template>
  <div v-if="nearestSortPoints.length > 0" class="object-sortPoints">
    <p>Точки сортировки</p>
    <sliderTouch
      :setIsLoadReady="setIsLoadReady"
    >
      <template v-slot:sliderContent>
          <div
            class="sortPoint-small-card-slider"
            v-for="sortPoint in nearestSortPoints"
            v-bind:key="sortPoint.pk"
          >
          <router-link :to="`/review/sortPoints/${sortPoint.pk}`">
            <img
              class="small-card-img"
              v-bind:src="url + sortPoint.photo"
              alt=""
            />
          </router-link>
            <div class="small-card-name">
              <p class="small-card-p">{{ sortPoint.name }}</p>
            </div>
            <div class="parameters-object">
              <div class="parameter-object time">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../../../assets/imgs/clock.png  "
                  alt=""
                />
                {{ sortPoint.schedule }}
              </div>
            </div>
            <div style="text-align: left;">
              {{ sortPoint.adress }}
            </div>
          </div>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          "
        >
          <div
            v-show="isLoadReady && isLoading"
            class="animation-logo logo-animation"
          ></div>
        </div>
      </template>
    </sliderTouch>
  </div>
</template>
