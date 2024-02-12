<template>
  <VueSpin :isLoading="isLoadingReports">
    <section>
      <div
        class="card activity"
        v-for="activity in dataActivity"
        v-bind:key="activity.pk"
      >
        <div class="card-header activity" :style="{ gap: '32px' }">
          <div>
            <div class="user-date">
              <div class="user-info">
                <img
                  src="../../../assets/imgs/default_user_photo_small.png"
                  alt="User"
                  class="user-photo"
                />
                {{ activity.user_id.username }}
              </div>
              <div class="date-and-time">
                <div class="date">{{ activity.date }}</div>
                <div class="time">{{ activity.time }}</div>
              </div>
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
                {{ activity.obj.locality }}
              </div>
              <div
                class="coordinate"
                v-if="objectTypesSmallImage[activity.obj.type_obj]"
              >
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  :src="
                    require(`@/${objectTypesSmallImage[activity.obj.type_obj]}`)
                  "
                  alt=""
                />
                {{ activity.obj.name }}
              </div>
              <div class="coordinate">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  :src="require(`@/${objectTypesSmallImage['sort_point']}`)"
                  alt=""
                />
                {{ activity.obj.sort_point }}
              </div>
            </div>
          </div>
          <div class="card-rating" v-if="activity.results?.length">
            <div
              class="rating"
              v-for="result in activity.results"
              :key="result.waste_id"
            >
              <img
                :src="getSrcImageByPk(result.waste_id)"
                alt=""
                class="cirlce-img"
              />
              {{ result.amount }}
              {{ getWasteByPk(result.waste_id)?.unit_of_waste }}
            </div>
          </div>

          <div class="card-desc" :style="{ margin: '0px' }">
            {{ activity.description }}
          </div>
        </div>
      </div>
    </section>
  </VueSpin>
</template>

<script>
import { url } from "@/main.js";
import { wasteDictImagesDict } from "..//..//..//consts//waste//wasteImages.js";
import { baseApi } from "..//..//shared//api//base//BaseApi.js";
import { objectTypesSmallImage } from "../../../consts/contentTypeDicts/contentTypeDicts.js";
import VueSpin from "@/components/ui/loaders/spin/VueSpin.vue";
import moment from "moment";

export default {
  components: {
    VueSpin,
  },
  data() {
    return {
      url: url,
      isLoadingReports: true,
      dataActivity: this.fetchDataActivity(),
      wasteDictImagesDict: wasteDictImagesDict,
      wasteTypes: this.getWasteTypesDict(),
      objectTypesSmallImage: objectTypesSmallImage,
    };
  },
  methods: {
    async fetchDataActivity() {
      this.isLoadingReports = true;
      await fetch(`${url}/activities/reports/`)
        .then((response) => response.json())
        .then((data) => {
          const preparedData = data.results.map((key) => {
            return {
              ...key,
              date: moment(key.created_at).format("DD.MM.YYYY"),
              time: moment(key.created_at).format("hh:mm"),
            };
          });
          this.dataActivity = preparedData;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        })
        .finally(() => {
          this.isLoadingReports = false;
        });
    },
    async getWasteTypesDict() {
      baseApi.get("/review/statuses-waste-types-dict/").then((response) => {
        this.wasteTypes = response.data;
      });
    },
    getWasteByPk(pk) {
      if (!this.wasteTypes.results) return null;
      return this.wasteTypes.results.find((key) => key.pk === pk);
    },
    getSrcImageByPk(pk) {
      const nameStatus = this.getWasteByPk(pk)?.name;
      if (nameStatus) {
        return require(`@/${wasteDictImagesDict[nameStatus]}`);
      }
      return "";
    },
  },
};
</script>
