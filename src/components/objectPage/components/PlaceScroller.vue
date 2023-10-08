<script setup>
import { ref, watch } from "vue";
import sliderTouch from "..//..//ui//sliderTouch//sliderTouch.vue";
import "..//..//ui//sliderTouch//styles.css";
import { url } from "@/main.js";

const props = defineProps(["placeUrl", "title"]);

const places = ref([]);
const urlNextPlace = ref(props.placeUrl);
const isLoading = ref(false);
const isLoadReady = ref(false);

function fetchPlace(url) {
  isLoading.value = true;
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const newData = response.results;
      if (places.value.length > 0) {
        places.value = [...places.value, ...newData];
      } else {
        places.value = newData;
      }
      urlNextPlace.value = response.next;
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
  if (!isLoading.value && newQuestion && urlNextPlace.value) {
    fetchPlace(urlNextPlace);
  }
});

fetchPlace(urlNextPlace.value);
</script>

<template>
  <div class="object-events" v-if="places.length > 0">
    <p>{{ props.title }}</p>
    <sliderTouch :setIsLoadReady="setIsLoadReady">
      <template v-slot:sliderContent>
        <div
          class="event-small-card"
          v-for="place in places"
          v-bind:key="place.pk"
        >
        <router-link :to="`/review/places/${place.pk}`">
          <img
            class="small-card-img"
            v-bind:src="url + place.photo"
            alt=""
          /></router-link>
          <div class="small-card-name">
            <p class="small-card-p">{{ place.name }}</p>
          </div>
          <div class="parameters-object">
            <div class="parameter-object date">
              <img
                class="icon-margin"
                width="12"
                height="20"
                src="../../../assets/imgs/map.png"
                alt=""
              />
              {{ place.locality }}
            </div>
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
