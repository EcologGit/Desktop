<template>
  <VueSpin :isLoading="isLoadingGeneralStatistic">
    <section class="statistics" style="margin-top: 30px" v-show='!isLoadingGeneralStatistic'>
      <GatheredWastesStatisticCounter
        :gathered_waste="generalStatistic.gathered_waste"
        :isLoading="isLoadingGeneralStatistic"
      />
      <div class="second-column">
        <ObjectCounter
          :place_count="generalStatistic.place_count"
          :route_count="generalStatistic.route_count"
          :event_count="generalStatistic.event_count"
          :sort_point_count="generalStatistic.sort_point_count"
        />
        <ActivityStatistic
          :photo_count="generalStatistic.photo_count"
          :rates_count="generalStatistic.rates_count"
          :report_count="generalStatistic.report_count"
        />
      </div>
    </section>
  </VueSpin>
</template>

<script setup>
import { ref } from "vue";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import { activitiesUrls } from "../../apiUrls/activities/activitiesUrls.js";
import ObjectCounter from "../../widgets/statistic/objectCounter/ObjectCounter.vue";
import ActivityStatistic from "../../widgets/statistic/activityStatistic/ActivityStatistic.vue";
import GatheredWastesStatisticCounter from "../../widgets/statistic/gatheredWastes/GatheredWastesStatisticCounter.vue";
import VueSpin from "@/components/ui/loaders/spin/VueSpin.vue";
const generalStatistic = ref({});
const isLoadingGeneralStatistic = ref(false);

const getGeneralStatistic = () => {
  isLoadingGeneralStatistic.value = true;
  baseApi
    .get(activitiesUrls.getGeneralStatistic)
    .then((response) => {
      isLoadingGeneralStatistic.value = false;
      generalStatistic.value = response.data;
    })
    .catch((error) => console.log(error));
};

getGeneralStatistic();
</script>
