<template>
  <main class="main">
    <section class="newReport">
      <div class="info-newReport">
        <p>Информация об объекте</p>
        <div class="cleaning-place">
          <div class="cleaning-place-label">Место уборки*</div>
          <div class="cleaning-place-type">
            <div class="form_toggle report-toggle">
              <div class="form_toggle-item report-toggle item-1">
                <input
                  id="place"
                  type="radio"
                  name="radio"
                  value="place"
                  @change="setDataByTrashPlace('places')"
                  :checked="nameTrashPlaceSelectData == 'places'"
                />
                <label for="place">Место</label>
              </div>
              <div class="form_toggle-item report-toggle item-2">
                <input
                  id="route"
                  type="radio"
                  name="radio"
                  value="route"
                  @change="setDataByTrashPlace('routes')"
                  :checked="nameTrashPlaceSelectData == 'routes'"
                />
                <label for="route">Маршрут</label>
              </div>
              <div class="form_toggle-item report-toggle item-3">
                <input
                  id="event"
                  type="radio"
                  name="radio"
                  value="event"
                  @change="setDataByTrashPlace('events')"
                  :checked="nameTrashPlaceSelectData == 'events'"
                />
                <label for="event">Мероприятие</label>
              </div>
            </div>
          </div>
        </div>
        <div class="name-object">
          <div class="name-object-label">Название*</div>
          <div class="report-inputs">
            <select class="input settings report-input" v-model="nameObj">
              <option
                v-for="item in getDataByTrashPlace(nameTrashPlaceSelectData)"
                :key="item.pk"
                :value="item.pk"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="sortPoints-object">
          <div class="sortPoints-object-label-wrapping">
            <div class="sortPoints-object-label">Точки сортировки*</div>
            <button class="sortPoints-object-add">
              <img
                class="icon-btn"
                height="18"
                src="../../assets/imgs/addObject.png"
                alt="add sortPoint"
                style="width: 18px"
              />
              Добавить
            </button>
          </div>
          <div class="report-inputs">
            <select
              class="input settings report-input"
              placeholder="Укажите точку сортировки, куда были сданы отходы"
              type="text"
              v-model="nameSortPoint"
            >
              <option
                v-for="item in allSortPoints"
                :key="item.pk"
                :value="item.pk"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="photo-newReport">
        <p class="photo-label">Фото*</p>
        <button
          class="single-button signup-button-photo"
          @click="openFilePicker"
        >
          <img
            class="icon-margin"
            width="18"
            height="14"
            src="../../assets/imgs/photo_white.png"
            style="cursor: pointer"
            alt=""
          />
          Добавить фото
          <input
            type="file"
            ref="fileInput"
            style="display: none"
            @change="handleFileChange"
          />
        </button>
        <div :style="{width: '100%', justifyContent: 'center', display: 'flex'}">
          <p class="photo-label" style="font-size: medium" v-show="photo">
            <img ref='image' class="card-img profile scope-image" style="cursor: pointer" @click='zoomImage'>
            <span @click="deleteFile" style="cursor: pointer">&cross;</span>
          </p>
        </div>
      </div>
      <div class="desc-newReport">
        <p class="desc-newReport-label">Отчет*</p>
        <textarea
          name=""
          placeholder="Расскажите о том, как прошла уборка"
          cols="30"
          v-model="description"
          rows="5"
        ></textarea>
      </div>
      <div class="newReport-wrapping">
        <div class="raiting-newReport-label-wrapping">
          <p class="raiting-newReport-label">Рейтинг</p>
          <div class="raiting-newReport-label">
            Поставьте оценку объекту. на котором происходила уборка
          </div>
        </div>
        <div class="raiting-newReport-points">
          <div class="list-points">
            <div class="point">
              <div class="rate">
                <img
                  src="../../assets/imgs/circle_bus.png"
                  alt=""
                  class="cirlce-img"
                />
                Доступность
              </div>
              <input
                class="input-number"
                min="0"
                type="number"
                :value="rate?.availability"
                @change="
                  (event) => setRating('availability', event.target.value)
                "
              />
            </div>
            <div class="point">
              <div class="rate">
                <img
                  src="../../assets/imgs/circle_flower.png"
                  alt=""
                  class="cirlce-img"
                />
                Красота
              </div>
              <input
                class="input-number"
                min="0"
                type="number"
                :value="rate?.beauty"
                @change="(event) => setRating('beauty', event.target.value)"
              />
            </div>
            <div class="point">
              <div class="rate">
                <img
                  src="../../assets/imgs/circle_sortPoint.png"
                  alt=""
                  class="cirlce-img"
                />
                Чистота
              </div>
              <input
                class="input-number"
                min="0"
                type="number"
                :value="rate?.purity"
                @change="(event) => setRating('purity', event.target.value)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="newReport-wrapping" style="padding-top: 10px">
        <div class="star-newReport"></div>
        <div class="star-newReport-points">
          <div class="list-points">
            <p class="photo-label">Собранные отходы</p>
            <select
              style="margin-top: 20px; margin-bottom: 20px"
              multiple
              v-model="wasteSelectValue"
            >
              <option
                v-for="waste in wasteTypes"
                :key="waste.pk"
                :value="waste.pk"
                size="4"
              >
                {{ waste.name }}
              </option>
            </select>
            <div v-for="item in wasteSelectValue" :key="item" class="point">
              <div class="rate">
                <img
                  :src="getWasteSrcImageByPk(item)"
                  alt=""
                  class="cirlce-img"
                />
                {{ getWasteByPk(item)?.name }}
              </div>
              <div class="input-number-wrapping">
                <input
                  class="input-number"
                  min="0"
                  type="number"
                  :key="item"
                  :value="gatheredWastes ? gatheredWastes[item] : null"
                  @change="(event) => changeWasteInputHandler(event, item)"
                />
                {{ getWasteByPk(item)?.unit_of_waste }}
                <span @click="deleteWaste(item)" style="cursor: pointer"
                  >&#10006;</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="required-fields">* – поля, обязательные к заполнению</div>
      <div class="buttons-newReport">
        <button class="newReport-publish" @click="openModal">
          <img
            class="a-img"
            width="18"
            height="18"
            src="../../assets/imgs/publish_gray.png"
            alt="Зарегистрироваться"
          />ОПУБЛИКОВАТЬ
        </button>
        <div class="text-button">
          <img
            class="a-img"
            width="18"
            height="18"
            src="../../assets/imgs/save_black.png"
            alt="Зарегистрироваться"
          />
          <div class="save-draft">СОХРАНИТЬ ЧЕРНОВИК</div>
        </div>
      </div>
    </section>
    <div class="modal-background" v-if="modalIsOpen">
      <div class="modal-content" style="width: 30%; height: 30%">
        <div style="width: 100%">
          <div
            style="
              display: grid;
              width: 100%;
              grid-template-columns: 1fr 6fr 1fr;
            "
          >
            <div></div>
            <div style="justify-self: center">
              <div
                v-show="isLoadingSendPublication"
                class="animation-logo logo-animation"
              ></div>
            </div>

            <span
              style="cursor: pointer; margin-right: 20px; font-size: xx-large"
              @click="closeModal"
              >&#10006;</span
            >
          </div>
          <p style="display: flex; justify-content: center; font-size: x-large">
            Вы уверены?
          </p>
        </div>
        <div class="modal-buttons-new-report-block">
          <button class="modal-button-new-report" @click="saveReport">
            Да
          </button>
          <button class="modal-button-new-report" @click="closeModal">
            Отмена
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { reportUrls } from "@/components/apiUrls/report/reportUrls.js";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import { ref, onMounted } from "vue";
import { wasteDictImagesDict } from "..//..//consts//waste//wasteImages.js";
import "./style.css";
import "../ui/loaders/scrollLoader/style.css";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const allEvents = ref([]);
    const allRoutes = ref([]);
    const allPlaces = ref([]);
    const allSortPoints = ref([]);
    const fileInput = ref(null);
    const wasteTypes = ref([]);
    const wasteSelectValue = ref([]);
    const modalIsOpen = ref(false);
    const isLoadingSendPublication = ref(false);
    const router = useRouter();
    const route = useRoute();
    const image = ref(null);
    const widthImage = ref(null);
    const heightImage = ref(null);
    const isZoomed = ref(false);

    const nameObj = ref(null);
    const nameSortPoint = ref(null);
    const photo = ref(null);
    const description = ref(null);
    const rate = ref({});
    const gatheredWastes = ref({});

    function getAllSortPoints() {
      return baseApi.get(reportUrls.getAllSortPointsName).then((result) => {
        allSortPoints.value = result.data.results;
      });
    }

    function getAllEvents() {
      return baseApi
        .get(reportUrls.getAllEventsName, { page_size: 1000000 })
        .then((result) => {
          allEvents.value = result.data.results;
        });
    }
    function getAllPlaces() {
      return baseApi
        .get(reportUrls.getAllPlacesName, { page_size: 1000000 })
        .then((result) => {
          allPlaces.value = result.data.results;
        });
    }
    function getAllRoutes() {
      return baseApi
        .get(reportUrls.getAllRoutesName, { page_size: 1000000 })
        .then((result) => {
          allRoutes.value = result.data.results;
        });
    }
    function openFilePicker() {
      fileInput.value.click();
    }
    function handleFileChange(event) {
      photo.value = event.target.files[0];
      const blobUrl = URL.createObjectURL(photo.value);
      const newImage = new Image();
      image.value.src = blobUrl;
      newImage.onload = function() {
              widthImage.value = this.width;
              heightImage.value = this.height;
            }
      newImage.src = blobUrl;
      //this.imageUrl = URL.createObjectURL(file);
    }
    function getWasteByPk(pk) {
      if (!wasteTypes.value) return null;
      return wasteTypes.value.find((key) => key.pk === pk);
    }
    function getWasteSrcImageByPk(pk) {
      const nameStatus = getWasteByPk(pk)?.name;
      if (nameStatus) {
        return require(`@/${wasteDictImagesDict[nameStatus]}`);
      }
      return "";
    }
    function getWasteTypesDict() {
      baseApi.get("/review/statuses-waste-types-dict/").then((response) => {
        wasteTypes.value = wasteTypes.value.concat(response.data.results);
      });
    }
    function changeWasteInputHandler(event, item) {
      gatheredWastes.value[item] = event.target.value;
    }
    function openModal() {
      modalIsOpen.value = true;
    }
    function closeModal() {
      modalIsOpen.value = false;
      isLoadingSendPublication.value = false;
    }

    const nameTrashPlaceSelectData = ref("places");

    function getDataByTrashPlace(name) {
      switch (name) {
        case "events":
          return allEvents.value;
        case "routes":
          return allRoutes.value;
        case "places":
          return allPlaces.value;
      }
    }

    function deleteFile() {
      fileInput.value.value = "";
      photo.value = null;
      image.value.src = null;
    }

    function setDataByTrashPlace(name) {
      nameTrashPlaceSelectData.value = name;
      nameObj.value = null;
    }

    function deleteWaste(item) {
      delete gatheredWastes[item];
      const indArr = wasteSelectValue.value.indexOf(item);
      const lenArr = wasteSelectValue.value.length;
      wasteSelectValue.value = [
        ...wasteSelectValue.value.slice(0, indArr),
        ...wasteSelectValue.value.slice(indArr + 1, lenArr),
      ];
    }

    function setRating(nameParam, newValue) {
      rate.value[nameParam] = newValue;
    }

    function getGatheredWaste(wastes) {
      return Object.entries(wastes).map(([key, value]) => {
        return {
          waste_id: key,
          amount: value,
          report_id: route.params.id,
        };
      });
    }

    function preparedData() {
      const formData = new FormData();
      const data = {
        id_obj: nameObj.value,
        point_id: nameSortPoint.value,
        photo: photo.value,
        description: description.value,
        rate: rate.value,
        type_obj: nameTrashPlaceSelectData.value,
        report_status: "Черновик",
        results: getGatheredWaste(gatheredWastes.value),
      };
      Object.keys(data).map((key) => {
        if (["results", "rate"].includes(key)) {
          formData.append(key, JSON.stringify(data[key]));
        } else {
          formData.append(key, data[key]);
        }
      });
      return formData;
    }

    function saveReport() {
      isLoadingSendPublication.value = true;
      const formData = preparedData();
      baseApi
        .patch(reportUrls.updateReport(route.params.id), formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            router.push({ name: "login" });
          }
        })
        .finally(() => {
          isLoadingSendPublication.value = false;
        });
    }

    function getReportData() {
      baseApi
        .get(reportUrls.getReportData(route.params.id))
        .then((res) => {
          const data = res.data;
          nameObj.value = data.obj.pk;
          nameSortPoint.value = data.point_id.pk;
          nameTrashPlaceSelectData.value = data.obj.type_obj;
          baseApi({
            url: data.photo,
            method: 'GET',
            responseType: 'blob',
          }).then((res) => {
            const headers = res.headers;
            const newFile = new File([res.data], '1.png', {type: headers.get('content-type')})
            photo.value = newFile;
            const blobUrl = URL.createObjectURL(res.data)
            image.value.src = blobUrl;
            const newImage = new Image();
            newImage.onload = function() {
              widthImage.value = this.width;
              heightImage.value = this.height;
            }
            newImage.src = blobUrl;
          });
          description.value = data.description;
          data.results.forEach((val) => {
            gatheredWastes.value[val.waste_id] = val.amount;
          });
          wasteSelectValue.value = data.results.map((val) => val.waste_id);
          if (data.rates) {
            rate.value = data.rates;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const zoomImage = () => {
      if (!isZoomed.value) {
        image.value.style.position = 'fixed';
        const koeff = widthImage.value / heightImage.value;
        const windowWidth = window.screen.width;
        const windowHeight = window.screen.height;
        const windowKoeff = windowHeight / windowWidth;
        image.value.style.width = `${70 * koeff * windowKoeff}%`;
        image.value.style.height = `${70}%`
        image.value.style.top = '0px';
        image.value.style.left = '0px';
      }
      else {
        image.value.style.position = 'static';
        image.value.style.width = `190px`;
        image.value.style.height = `190px`
        image.value.style.top = '0px';
        image.value.style.left = '0px';
      }
      isZoomed.value = !isZoomed.value;
    }

    onMounted(() => {
      getReportData();
    }) 

    getAllEvents();
    getAllRoutes();
    getAllPlaces();
    getAllSortPoints();
    getWasteTypesDict();

    return {
      getDataByTrashPlace,
      setDataByTrashPlace,
      nameTrashPlaceSelectData,
      allSortPoints,
      fileInput,
      openFilePicker,
      handleFileChange,
      photo,
      deleteFile,
      getWasteSrcImageByPk,
      wasteTypes,
      wasteSelectValue,
      getWasteByPk,
      gatheredWastes,
      changeWasteInputHandler,
      deleteWaste,
      modalIsOpen,
      openModal,
      closeModal,
      isLoadingSendPublication,
      nameObj,
      nameSortPoint,
      description,
      rate,
      setRating,
      saveReport,
      image,
      zoomImage
    };
  },
};
</script>
