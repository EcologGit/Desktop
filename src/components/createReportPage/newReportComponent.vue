
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
                  checked
                />
                <label for="place">Место</label>
              </div>
              <div class="form_toggle-item report-toggle item-2">
                <input id="route" type="radio" name="radio" value="route" />
                <label for="route">Маршрут</label>
              </div>
              <div class="form_toggle-item report-toggle item-3">
                <input id="event" type="radio" name="radio" value="event" />
                <label for="event">Мероприятие</label>
              </div>
            </div>
          </div>
        </div>
        <div class="name-object">
          <div class="name-object-label">Название*</div>
          <div class="report-inputs">
            <input
              class="input settings report-input"
              placeholder="Укажите объект, на котором проходила уборка"
              type="text"
            />
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
            <input
              class="input settings report-input"
              placeholder="Укажите точку сортировки, куда были сданы отходы"
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="photo-newReport">
        <p class="photo-label">Фото*</p>
        <button class="single-button signup-button-photo" @click="fetchData()">
          <img
            width="18"
            height="14"
            src="../../assets/imgs/photo_white.png"
            alt=""
          />
          Добавить фото
        </button>
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
      <div class="newReport-wrapping">
        <div class="star-newReport"></div>
        <div class="star-newReport-points">
          <div class="list-points">
            <div class="point">
              <div class="rate">
                <img
                  src="../../assets/imgs/plastic_trash_type.png"
                  alt=""
                  class="cirlce-img"
                />
                Пластик
              </div>
              <div class="input-number-wrapping">
                <input class="input-number" min="0" type="number" />кг
              </div>
            </div>
            <div class="point">
              <div class="rate">
                <img
                  src="../../assets/imgs/glass_trash_type.png"
                  alt=""
                  class="cirlce-img"
                />
                Стекло
              </div>
              <div class="input-number-wrapping">
                <input class="input-number" min="0" type="number" />кг
              </div>
            </div>
            <div class="point">
              <div class="rate">
                <img
                  src="../../assets/imgs/batteries_trash_type.png"
                  alt=""
                  class="cirlce-img"
                />
                Батарейки
              </div>
              <div class="input-number-wrapping">
                <input class="input-number" min="0" type="number" />кг
              </div>
            </div>
            <div class="point">
              <div class="rate">
                <img
                  src="../../assets/imgs/light_bulbs_trash_type.png"
                  alt=""
                  class="cirlce-img"
                />
                Лампочка
              </div>
              <div class="input-number-wrapping">
                <input class="input-number" min="0" type="number" />кг
              </div>
            </div>
            <div class="point">
              <div class="rate">
                <img
                  src="../../assets/imgs/paper_trash_type.png"
                  alt=""
                  class="cirlce-img"
                />
                Макулатура
              </div>
              <div class="input-number-wrapping">
                <input class="input-number" min="0" type="number" />кг
              </div>
            </div>
            <div class="point">
              <div class="rate">
                <img
                  src="../../assets/imgs/metal_trash_type.png"
                  alt=""
                  class="cirlce-img"
                />
                Металл
              </div>
              <div class="input-number-wrapping">
                <input class="input-number" min="0" type="number" />кг
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="required-fields">* – поля, обязательные к заполнению</div>
      <div class="buttons-newReport">
        <button class="newReport-publish">
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
</template>

<script>
import { url } from "@/main.js";

export default {
  data() {
    return {
      dataObject: this.fetchDataObjectAPI(),
      visibleMore: false,
      id: this.$route.params.id,
      objectType: this.$route.params.id,
    };
  },
  methods: {
    newFunc() {},
    async fetchDataObjectAPI() {
      await fetch(`${url}/review/places/1`)
        .then((response) => response.json())
        .then((data) => {
          this.dataObject = data.object_info;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
  },
  computed: {
    calcNotes() {
      return this.notes.length * 5;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length === 5) {
        this.notes = [];
      }
    },
  },
};
</script>