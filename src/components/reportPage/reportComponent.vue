<template>
  <section class="report" v-bind="dataObject">
    <section class="report-content">
      <div class="report-content-part left">
        <p>Отчет</p>
        <div class="report-desc">
          {{ dataObject.description }}
        </div>
        <div class="report-imgs">
          <img
            src="../../assets/imgs/default_activity.png"
            alt=""
            class="report-img"
          />
          <img
            src="../../assets/imgs/default_activity.png"
            alt=""
            class="report-img"
          />
        </div>
      </div>
      <div class="content-part right">
        <div class="object-coordinates">
          <img
            class="map-object-img"
            src="../../assets/imgs/default_activity.png"
            alt=""
          />
          <div class="object-coordinates-info">
            <div class="report-fullname">
              <p class="report-firstname" style="margin-bottom: 8px">
                First Name
              </p>
              <p class="report-secondname">Second Name</p>
            </div>
            <div class="report-username">@username</div>
          </div>
        </div>

        <div class="object-points">
          <p>Рейтинг</p>
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
              <div>4,8</div>
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
              <div>4,8</div>
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
              <div>4,8</div>
            </div>
          </div>
        </div>
        <div class="object-points">
          <p>Собранные отходы</p>
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
              <div>0,0 кг</div>
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
              <div>0,0 кг</div>
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
              <div>0,0 кг</div>
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
              <div>0,0 кг</div>
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
              <div>0,0 кг</div>
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
              <div>0,0 кг</div>
            </div>
          </div>
        </div>
        <div class="object-coordinates">
          <img
            class="map-object-img"
            src="../../assets/imgs/map_object.png  "
            alt=""
          />
          <div class="object-coordinates-info">
            <div class="coordinate-locality">
              <img
                class="icon-margin"
                width="12"
                height="20"
                src="../../assets/imgs/map.png"
                alt=""
              />
              Locality
            </div>
            <div class="coordinate-value">
              <img
                class="icon-margin"
                width="15"
                height="15"
                src="../../assets/imgs/coordinates.png"
                alt=""
              />
              xx.xxxx, yy.yyyy
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="report-place">
      <div class="card review">
        <img
          src="../../assets/imgs/default_activity.png"
          alt=""
          class="card-child card-img review"
        />
        <div class="card-child card-content review">
          <div class="card-content-wrapping">
            <div>
              <div class="card-header">
                <div class="card-info">
                  <p class="card-name" @click="navigateTo(place.object_id)">
                    place.name
                  </p>
                  <div class="card-adress">
                    <img
                      width="11"
                      height="18"
                      src="../../assets/imgs/map.png"
                      alt=""
                      class="icon-margin"
                    />
                    place.locality
                  </div>
                </div>
                <a class="a-circle-icon">
                  <img
                    class="cirlce-img"
                    src="../../assets/imgs/circle_favorite_default.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="card-desc">place.description</div>
            </div>
            <div class="card-rating">
              <div class="rating">
                <img
                  src="../../assets/imgs/circle_bus.png"
                  alt=""
                  class="cirlce-img"
                />
                place.avg_availability
              </div>
              <div class="rating">
                <img
                  src="../../assets/imgs/circle_sortPoint.png"
                  alt=""
                  class="cirlce-img"
                />
                place.avg_beauty
              </div>
              <div class="rating">
                <img
                  src="../../assets/imgs/circle_flower.png"
                  alt=""
                  class="cirlce-img"
                />
                place.avg_purity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="report-sortPoints">
      <div class="card review">
        <img
          src="../../assets/imgs/default_activity.png"
          alt=""
          class="card-child card-img review"
        />
        <div class="card-child card-content review">
          <div class="card-content-wrapping">
            <div>
              <div class="card-header">
                <div class="card-info">
                  <p class="card-name" @click="navigateTo(sortPoint.point_id)">
                    sortPoint.name
                  </p>
                  <div class="coordinates">
                    <div class="coordinate">
                      <img
                        class="icon-margin"
                        width="11"
                        height="18"
                        src="../../assets/imgs/map.png"
                        alt=""
                      />
                      sortPoint.locality
                    </div>
                    <div class="coordinate">
                      <img
                        class="icon-margin"
                        width="18"
                        height="18"
                        src="../../assets/imgs/clock.png"
                        alt=""
                      />
                      <span> sortPoint.schedule </span>
                    </div>
                  </div>
                </div>
                <a class="a-circle-icon">
                  <img
                    class="cirlce-img"
                    src="../../assets/imgs/circle_favorite_default.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="card-desc">sortPoint.description</div>
            </div>
            <div class="card-rating">
              <div class="rating">
                <img
                  src="../../assets/imgs/circle_bus.png"
                  alt=""
                  class="cirlce-img"
                />
                0.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="report-events">
      <div class="card review">
        <img
          src="../../assets/imgs/default_activity.png"
          alt=""
          class="card-child card-img review"
        />
        <div class="card-child card-content review">
          <div class="card-content-wrapping">
            <div>
              <div class="card-header">
                <div class="card-info">
                  <p class="card-name" @click="navigateTo(event.event_id)">
                    event.name
                  </p>
                  <div class="coordinates">
                    <div class="coordinate">
                      <img
                        class="icon-margin"
                        width="11"
                        height="18"
                        src="../../assets/imgs/map.png"
                        alt=""
                      />
                      event.adress
                    </div>
                  </div>
                  <div class="parameters">
                    <div class="km">
                      <img
                        class="icon-margin"
                        width="18"
                        height="16"
                        src="../../assets/imgs/calendar.png"
                        alt=""
                      />
                      event.status
                    </div>
                    <div class="time">
                      <img
                        class="icon-margin"
                        width="18"
                        height="18"
                        src="../../assets/imgs/clock.png  "
                        alt=""
                      />
                      event.datetime_start
                    </div>
                  </div>
                </div>
                <a class="a-circle-icon">
                  <img
                    class="cirlce-img"
                    src="../../assets/imgs/circle_favorite_default.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="card-desc">event.description</div>
            </div>
            <div>
              <button
                class="status-event"
                :style="{ backgroundColor: '#D3F36B' }"
              >
                Завершено
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
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
    newFunc() {
      console.log("hello");
    },
    async fetchDataObjectAPI() {
      console.log(this.$route.params.objectType);
      await fetch(`http://81.163.30.36:8000/review/places/1`)
        .then((response) => response.json())
        .then((data) => {
          this.dataObject = data.object_info;
          console.log("DATA");
          console.log(data);
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
  },
  computed: {
    calcNotes() {
      console.log(this.notes.length * 5);
      return this.notes.length * 5;
    },
  },
  watch: {
    inputValue(value) {
      console.log("value" + value);
      if (value.length === 5) {
        this.notes = [];
      }
    },
  },
};
</script>