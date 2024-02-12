<template>
  <VueSpin :isLoading="isLoadingReports">
    <section class="cards">
      <div class="card profile" v-for="report in userReports" :key="report.id">
        <div class="card-header profile">
          <div class="user-date">
            <div class="user-info">
              <img
                src="../../../assets/imgs/default_user_photo_small.png"
                alt="User"
                class="user-photo"
              />
              {{ report?.user_id?.public_name }}
            </div>
            <div class="date-report">{{ report.date }} {{ report.time }}</div>
          </div>
          <div class="coordinates">
            <div class="coordinate">
              <img
                class="icon-margin"
                width="11"
                height="18"
                src="../../../assets/imgs/map.png"
                alt=""
              />
              {{ report?.obj?.locality }}
            </div>
            <div class="coordinate">
              <img
                class="icon-margin"
                width="18"
                height="18"
                src="../../../assets/imgs/places.png"
                alt=""
              />
              {{ report?.obj?.name }}
            </div>
          </div>
        </div>
        <div class="card-content profile">
          <div class="card-imgs">
            <img
              class="card-img profile"
              src="../../../assets/imgs/default_activity.png"
              alt=""
            />
            <img
              class="card-img profile"
              src="../../../assets/imgs/default_activity.png"
              alt=""
            />
            <img
              class="card-img profile"
              src="../../../assets/imgs/default_activity.png"
              alt=""
            />
            <img
              class="card-img profile"
              src="../../../assets/imgs/default_activity.png"
              alt=""
            />
          </div>
          <div class="card-desc">
            {{ report?.description }}
          </div>
          <div v-show="report.results">
            <GatheredWastesHorizontal
              :wasteTypesDict="wasteTypesDict"
              :gatheredWastes="report.results"
            />
          </div>
        </div>
        <div class="post-action">
          <a href="#" class="a-action-post">
            <img
              class="a-img"
              width="16"
              height="18"
              src="../../../assets/imgs/publish.png"
              alt="Иконка Обзор"
            />Опубликовать</a
          >
          <router-link :to="`/report/edit/${report.pk}`">
            <a class="a-action-post">
              <img
                class="a-img"
                width="18"
                height="18"
                src="../../../assets/imgs/edit.png"
                alt="Иконка Обзор"
              />Редактировать</a
            >
          </router-link>
        </div>
      </div>
    </section>
  </VueSpin>
</template>

<script>
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import { userProfilesUrls } from "../../../components/apiUrls/userProfiles/userProfilesUrls.js";
import GatheredWastesHorizontal from "../../widgets/statistic/gatheredWastes/GatheredWastesHorizontal.vue";
import moment from "moment";
import VueSpin from "@/components/ui/loaders/spin/VueSpin.vue";

export default {
  data() {
    return {
      visibleCards: "reports",
      userReports: [],
      isLoadingReports: true,
      wasteTypesDict: [],
    };
  },
  components: {
    GatheredWastesHorizontal,
    VueSpin,
  },
  mounted() {
    this.isLoadingReports = true;
    baseApi
      .get(userProfilesUrls.getUserReports(this.$route.params.id))
      .then((res) => {
        this.userReports = res.data.results.map((val) => {
          return {
            ...val,
            date: moment(val.created_at).format("DD.MM.YYYY"),
            time: moment(val.created_at).format("hh:mm"),
          };
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.isLoadingReports = false;
      });
    baseApi
      .get("/review/statuses-waste-types-dict/")
      .then((res) => {
        this.wasteTypesDict = res.data.results;
      })
      .catch((err) => console.log(err));
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
