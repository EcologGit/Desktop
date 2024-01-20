<template>
  <section class="statistics">
    <GatheredWastesStatisticCounter
      :gathered_waste="statisticData.gathered_waste"
    />
    <div class="second-column">
      <ObjectCounter
        :place_count="statisticData.place"
        :route_count="statisticData.route"
        :event_count="statisticData.event"
        :sort_point_count="statisticData.sort_points"
      />
      <ActivityStatistic
        :photo_count="statisticData.photo_count"
        :rates_count="statisticData.rates_count"
        :report_count="statisticData.report_count"
      />
    </div>
  </section>
</template>

<script>
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import { userProfilesUrls } from "../../../components/apiUrls/userProfiles/userProfilesUrls.js";
import ObjectCounter from "../../widgets/statistic/objectCounter/ObjectCounter.vue";
import ActivityStatistic from "../../widgets/statistic/activityStatistic/ActivityStatistic.vue";
import GatheredWastesStatisticCounter from "../../widgets/statistic/gatheredWastes/GatheredWastesStatisticCounter.vue";

export default {
  components: {
    ObjectCounter,
    ActivityStatistic,
    GatheredWastesStatisticCounter
  },
  data() {
    return {
      visibleCards: "reports",
      statisticData: [],
    };
  },
  mounted() {
    baseApi
        .get(userProfilesUrls.getStatistics(this.$route.params.id))
        .then((response) => {
          this.statisticData = response.data;
        });
  },
  methods: {
    changeCard(event) {
      let target =
        event.target.className == "icon-btn"
          ? event.target.parentElement
          : event.target;

      target.parentElement.parentElement.childNodes.forEach((el) => {
        let btn = el.firstChild;
        if (btn.matches(".active")) {
          btn.classList.remove("active");
        }

        if (target.classList.contains("btn-statistics")) {
          this.visibleCards = "statistics";
        } else {
          this.visibleCards = "reports";
        }
      });
      target.classList.add("active");
    },
    sort(event) {
      event.target.parentElement.childNodes.forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      event.target.classList.add("active");
    },
    newFunc() {},
  },
};
</script>
