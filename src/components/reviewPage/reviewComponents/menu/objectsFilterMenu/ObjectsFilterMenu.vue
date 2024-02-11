<template>
  <section class="search">
    <input
      type="text"
      class="search-field"
      placeholder="Поиск адресов и мест"
      v-model="filterParams.search"
    />
    <img
      src="@/assets/imgs/search.png"
      alt=""
      @click="searchByName"
      class="search-icon"
      style="cursor: pointer"
    />
  </section>

  <section class="settings">
    <button
      class="button-text setting dropbtn"
      @click="setIsVisibleSortModal(true)"
    >
      <img src="@/assets/imgs/setting1.png" alt="" class="setting-icon" />
      Сортировка
    </button>

    <button
      class="button-text setting dropbtn"
      @click="setIsVisibleFilterModal(true)"
    >
      <img src="@/assets/imgs/setting2.png" alt="" class="setting-icon" />
      Параметры
    </button>
  </section>

  <ObjectsSortModal
    :isVisible="isVisibleSortModal"
    @getNewFilterValueModal="getSortParams"
  />
  <component
    :is="filterModal"
    :isVisible="isVisibleFilterModal"
    @getNewFilterValueModal="getFilterParams"
  />
</template>

<script setup>
import ObjectsSortModal from "../../modal/objectsModal/ObjectsSortModal.vue";
import PlacesFilterModal from "../../modal/objectsModal/PlacesFilterModal.vue";
import RoutesFilterModal from "../../modal/objectsModal/RoutesFilterModal.vue";
import EventsFilterModal from "../../modal/objectsModal/EventsFilterModal.vue";
import SortPointsFilterModal from "../../modal/objectsModal/SortPointsFilterModal.vue";
import { ref, defineEmits } from "vue";

const componentFilterModalDict = {
  places: PlacesFilterModal,
  routes: RoutesFilterModal,
  events: EventsFilterModal,
  sortPoints : SortPointsFilterModal,
};

const isVisibleSortModal = ref(false);
const isVisibleFilterModal = ref(false);
const filterParams = ref({
  search: "",
});

const props = defineProps({
  objectName: String,
});

const emit = defineEmits(["changeFilterParams"]);

const filterModal = componentFilterModalDict[props.objectName];

function setIsVisibleSortModal(val) {
  isVisibleSortModal.value = val;
}

function setIsVisibleFilterModal(val) {
  isVisibleFilterModal.value = val;
}

function setFilterParams(newValue) {
  const newObj = { ...filterParams.value, ...newValue };
  filterParams.value = newObj;
  emit("changeFilterParams", newObj);
}

function searchByName() {
  emit("changeFilterParams", filterParams.value);
}

function getSortParams(val) {
  setIsVisibleSortModal(false);
  setFilterParams(val);
}

function getFilterParams(val) {
  setIsVisibleFilterModal(false);
  setFilterParams(val);
}
</script>
