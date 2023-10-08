<script setup>
import { baseApi } from "..//..//..//shared//api//base//BaseApi.js";
import ScrollLoader from "..//..//..//ui//loaders//scrollLoader//ScrollLoader.vue";
import { ref, onMounted } from "vue";

const props = defineProps(["reportUrl", "title", "pageSize"]);
const isLoading = ref(false);
const reports = ref([]);
const nextUrl = ref(props.reportUrl);
const containerReprots = ref(null);
const loadBottom = ref(null);

function fetchReports() {
  isLoading.value = true;
  baseApi
    .get(nextUrl.value, { params: { page_size: props.pageSize } })
    .then((response) => {
      reports.value = reports.value.concat(response.data.results);
      nextUrl.value = response.data.next;
    })
    .catch(() => {})
    .finally(() => {
      isLoading.value = false;
    });
}

const observerCallback = (entries, observer) => {
  entries.forEach(() => {
    if (nextUrl.value && !isLoading.value) {
      fetchReports();
    }
    else if (!nextUrl.value) {
      observer.disconnect();
    }
  });
};

fetchReports();
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
            <div class="date">{{ report.created_at }}</div>

            <div class="time">Time</div>
          </div>
        </div>
      </div>
      <div class="report-result">
        <div class="result-type">
          <img
            src="../../../../assets/imgs/plastic_trash_type.png"
            alt=""
            class="cirlce-img"
          />0,0 кг
        </div>
        <div class="result-type">
          <img
            src="../../../../assets/imgs/glass_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
        <div class="result-type">
          <img
            src="../../../../assets/imgs/batteries_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
        <div class="result-type">
          <img
            src="../../../../assets/imgs/light_bulbs_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
        <div class="result-type">
          <img
            src="../../../../assets/imgs/paper_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
        <div class="result-type">
          <img
            src="../../../../assets/imgs/metal_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
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
