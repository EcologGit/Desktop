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
                  @change="setDataByTrashPlace('place')"
                  checked
                />
                <label for="place">Место</label>
              </div>
              <div class="form_toggle-item report-toggle item-2">
                <input
                  id="route"
                  type="radio"
                  name="radio"
                  value="route"
                  @change="setDataByTrashPlace('route')"
                />
                <label for="route">Маршрут</label>
              </div>
              <div class="form_toggle-item report-toggle item-3">
                <input
                  id="event"
                  type="radio"
                  name="radio"
                  value="event"
                  @change="setDataByTrashPlace('event')"
                />
                <label for="event">Мероприятие</label>
              </div>
            </div>
          </div>
        </div>
        <div class="name-object">
          <div class="name-object-label">Название*</div>
          <div class="report-inputs">
            <select class="input settings report-input">
              <option
                v-for="item in getDataByTrashPlace(nameTrashPlaceSelectData)"
                :key="item.pk"
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
            >
              <option v-for="item in allSortPoints" :key="item.pk">
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
        <div>
          <p class="photo-label" style="font-size: medium" v-if="photo">
            {{ photo }}
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
              <input class="input-number" min="0" type="number" />
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
              <input class="input-number" min="0" type="number" />
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
              <input class="input-number" min="0" type="number" />
            </div>
          </div>
        </div>
      </div>
      <div class="newReport-wrapping" style="padding-top: 10px">
        <div class="star-newReport"></div>
        <div class="star-newReport-points">
          <div class="list-points">
            <p class="photo-label">Собранные отходы</p>
            <select style="margin-top: 20px; margin-bottom: 20px" multiple v-model='wasteSelectValue'>
              <option v-for='waste in wasteTypes' :key='waste.pk' :value='waste.pk' size="4">{{waste.name}}</option>
            </select>
            <div v-for='item in wasteSelectValue' :key='item' class="point">
              <div class="rate">
                <img
                  :src="getWasteSrcImageByPk(item)"
                  alt=""
                  class="cirlce-img"
                />
                {{getWasteByPk(item)?.name}}
              </div>
              <div class="input-number-wrapping">
                <input class="input-number" min="0" type="number" :key='item' @change='(event) => changeWasteInputHandler(event, item)'/>кг
                <span @click="deleteWaste(item)" style="cursor: pointer">&#10006;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="required-fields">* – поля, обязательные к заполнению</div>
      <div class="buttons-newReport">
        <button class="newReport-publish" @click='openModal'>
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
  </main>
  <div class='modal-background' v-if='modalIsOpen'><div class='modal-content' style='width: 30%; height: 30%'>
    <div style='width:100%'>
    <div style='display: flex; width: 100%; justify-content: right'>
    <span style="cursor: pointer; margin-right: 20px; font-size: xx-large;">&#10006;</span>
  </div>
    <p style='display: flex; justify-content: center; font-size: x-large'>Вы уверены?</p>
  </div>
    <div class='modal-buttons-new-report-block'>
    <button class='modal-button-new-report'>Да</button>
    <button class='modal-button-new-report' @click='closeModal'>Отмена</button>
    </div>
  </div></div>
</template>

<script>
import { reportUrls } from "@/components/apiUrls/report/reportUrls.js";
import { baseApi } from "@/components/shared/api/base/BaseApi.js";
import { ref } from "vue";
import { wasteDictImagesDict } from "..//..//consts//waste//wasteImages.js";
import './style.css';

export default {
  setup() {
    const allEvents = ref([]);
    const allRoutes = ref([]);
    const allPlaces = ref([]);
    const allSortPoints = ref([]);
    const fileInput = ref(null);
    const wasteTypes = ref([]);
    const wasteSelectValue = ref([]);
    const modalIsOpen = ref(false)


    const photo = ref(null);
    const gatheredWastes = ref([]);

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
      photo.value = event.target.files[0].name;
      //this.imageUrl = URL.createObjectURL(file);
    }
    function getWasteByPk(pk) {
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
        gatheredWastes.value[item] = event.target.value
    }
    function openModal() {
      modalIsOpen.value = true;
    }
    function closeModal() {
      modalIsOpen.value = false;
    }
    
    const nameTrashPlaceSelectData = ref("place");

    const trashDictSelect = {
      event: allEvents,
      route: allRoutes,
      place: allPlaces,
    };

    function getDataByTrashPlace(name) {
      return trashDictSelect[name].value;
    }

    function deleteFile() {
      fileInput.value.value = "";
      photo.value = "";
    }

    function setDataByTrashPlace(name) {
      nameTrashPlaceSelectData.value = name;
    }

    function deleteWaste(item) {
      delete gatheredWastes[item];
      const indArr = wasteSelectValue.value.indexOf(item);
      const lenArr = wasteSelectValue.value.length;
      wasteSelectValue.value = [...wasteSelectValue.value.slice(0, indArr), ...wasteSelectValue.value.slice(indArr + 1, lenArr)];
    }

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
    };
  },
};
</script>
