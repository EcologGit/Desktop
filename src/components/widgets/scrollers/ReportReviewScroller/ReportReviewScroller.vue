<script setup>
import { baseApi } from "..//..//..//shared//api//base//BaseApi.js";
import ScrollLoader from "..//..//..//ui//loaders//scrollLoader//ScrollLoader.vue";
import { ref, onMounted } from "vue";
import moment from "moment";
import { wasteDictImagesDict } from "..//..//..//..//consts//waste//wasteImages.js";

const props = defineProps(["reportUrl", "title", "pageSize"]);
const isLoading = ref(false);
const reports = ref([]);
const nextUrl = ref(props.reportUrl);
const containerReprots = ref(null);
const loadBottom = ref(null);
const wasteTypes = ref([]);

function getWasteByPk(pk) {
  return wasteTypes.value.find((key) => key.pk === pk);
}

function getSrcImageByPk(pk) {
  const nameStatus = getWasteByPk(pk)?.name;
  if (nameStatus) {
    return require(`@/${wasteDictImagesDict[nameStatus]}`);
  }
  return "";
}

function fetchReports() {
  isLoading.value = true;
  baseApi
    .get(nextUrl.value, { params: { page_size: props.pageSize } })
    .then((response) => {
      const preparedData = response.data.results.map((key) => {
        return {
          ...key,
          date: moment(key.created_at).format("DD.MM.YYYY"),
          time: moment(key.created_at).format("hh:mm"),
        };
      });
      reports.value = reports.value.concat(preparedData);
      nextUrl.value = response.data.next;
    })
    .catch(() => {})
    .finally(() => {
      isLoading.value = false;
    });
}

function getWasteTypesDict() {
  baseApi.get("/review/statuses-waste-types-dict/").then((response) => {
    wasteTypes.value = wasteTypes.value.concat(response.data.results);
  });
}

const observerCallback = (entries, observer) => {
  entries.forEach(() => {
    if (nextUrl.value && !isLoading.value) {
      fetchReports();
    } else if (!nextUrl.value) {
      observer.disconnect();
    }
  });
};

fetchReports();
getWasteTypesDict();
onMounted(() => {
  const observer = new IntersectionObserver(observerCallback);
  observer.observe(loadBottom.value);
});
</script>

<template>
  <section class="object-reports" ref="containerReprots">
    <p>{{ props.title }}</p>
    <div
      class="object-report-card"
      v-for="report in reports"
      v-bind:key="report.created_at"
    >
      <div class="object-report-info">
        <div class="object-report-user-info">
          <div class="object-report-user-img-name" @click="navigateTo(1)">
            <img
              src="../../../../assets/imgs/default_user_photo_small.png"
              alt="User"
              class="user-photo"
            />
            {{ report.user_id?.public_name }}
          </div>

          <div class="date-and-time">
            <div class="date">{{ report.date }}</div>

            <div class="time">{{ report.time }}</div>
          </div>
        </div>
      </div>
      <div class="report-result">
        <div
          class="result-type"
          v-for="result in report.results"
          v-bind:key="result.waste_id"
        >
          <img
            :src="getSrcImageByPk(result.waste_id)"
            alt=""
            class="cirlce-img"
          />{{ result?.amount }}
          {{ getWasteByPk(result.waste_id)?.unit_of_waste }}
        </div>
      </div>
      <div class="object-result-imgs"></div>
      <div class="object-result-desc">
        {{ report.description }}
      </div>
    </div>
    <div ref="loadBottom"></div>
    <ScrollLoader :isLoading="isLoading" />
  </section>
</template>
