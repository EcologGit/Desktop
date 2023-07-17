<template>
  <main class="main">
    <section class="object" v-bind="dataObject">
      <section class="slider">
        <a>
          <img
            class="object-img"
            v-show="!visibleNext"
            @click="visibleNext = !visibleNext"
            v-bind:src="url + dataObject.photo"
            alt=""
          />
          <img
            class="object-img"
            v-show="visibleNext"
            @click="visibleNext = !visibleNext"
            src="../../assets/imgs/default_review.png"
            alt=""
          />
        </a>
        <div class="object-name">
          {{ dataObject.name }}
        </div>
      </section>

      <section class="object-content">
        <div class="content-part left">
          <div class="object-desc">
            <p>Описание</p>
            {{ dataObject.description }}
          </div>
          <div class="object-events" v-if="actualEvents.length > 0">
            <p>Мероприятия</p>
            <div class="small-list events">
              <div
                class="event-small-card"
                v-for="actualEvent in actualEvents"
                v-bind:key="actualEvent.id"
              >
                <img
                  class="small-card-img"
                  v-bind:src="url + actualEvent.photo"
                  alt=""
                />
                <div class="small-card-name">
                  <p class="small-card-p">{{ actualEvent.name }}</p>
                </div>
                <div class="parameters-object">
                  <div class="parameter-object date">
                    <img
                      class="icon-margin"
                      width="18"
                      height="16"
                      src="../../assets/imgs/calendar.png"
                      alt=""
                    />
                    {{ actualEvent.date }}
                  </div>
                  <div class="parameter-object time">
                    <img
                      class="icon-margin"
                      width="18"
                      height="18"
                      src="../../assets/imgs/clock.png  "
                      alt=""
                    />
                    {{ actualEvent.time }}
                  </div>
                </div>
                <div class="parameter-object status">
                  {{ actualEvent.status }}
                </div>
              </div>
            </div>
          </div>
          <div v-if="sortPoints.length > 0" class="object-sortPoints">
            <p>Точка сортировки</p>
            <div class="small-list sortPoints">
              <div
                class="sortPoint-small-card"
                v-for="sortPoint in sortPoints"
                v-bind:key="sortPoint.pk"
              >
                <img
                  class="small-card-img"
                  v-bind:src="url + sortPoint.photo"
                  alt=""
                />
                <div class="small-card-name">
                  <p class="small-card-p">{{ sortPoint.name }}</p>
                </div>
                <div class="parameters-object">
                  <div class="parameter-object time">
                    <img
                      class="icon-margin"
                      width="18"
                      height="18"
                      src="../../assets/imgs/clock.png  "
                      alt=""
                    />
                    0:00 - 0:00
                  </div>
                </div>
                <div class="parameter-object status">
                  {{ sortPoint.locality }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-part right">
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
                {{ dataObject.locality }},
              </div>
              <div class="coordinate-value">
                <img
                  class="icon-margin"
                  width="15"
                  height="15"
                  src="../../assets/imgs/coordinates.png"
                  alt=""
                />
                {{ dataObject.latitude_n }},
                {{ dataObject.longitude_e }}
              </div>
            </div>
          </div>
          <button class="adding">
            <img
              width="11"
              height="18"
              src="../../assets/imgs/favorite_white.png"
              alt=""
            />
            Добавить в отметки
          </button>
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
                <div>{{ dataObject.avg_availability }}</div>
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
                <div>{{ dataObject.avg_beauty }}</div>
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
                <div>{{ dataObject.avg_purity }}</div>
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
                <!-- <div>{{ dataObjectReportsStatistics[0].sum_amount }} кг</div> -->
                <div>{{ 0.0 }} кг</div>
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
        </div>
      </section>
      <section class="object-reports">
        <p>Отчеты</p>
        <div
          class="object-report-card"
          v-for="report in reports"
          v-bind:key="report.created_at"
        >
          <div class="object-report-info">
            <div class="object-report-user-info">
              <div class="object-report-user-img-name" @click="navigateTo(1)">
                <img
                  src="../../assets/imgs/default_user_photo_small.png"
                  alt="User"
                  class="user-photo"
                />
                {{ report.user_id.public_name }}
              </div>

              <div class="date-and-time">
                <div class="date">{{ report.created_at }}</div>

                <div class="time">Time</div>
              </div>
            </div>
            <div class="object-report-locality">
              <img
                class="icon-margin"
                width="11"
                height="18"
                src="../../assets/imgs/map.png"
                alt=""
              />Locality
            </div>
            <div class="object-report-route">
              <img
                class="icon-margin"
                width="18"
                height="18"
                src="../../assets/imgs/places.png"
                alt=""
              />Route
            </div>
          </div>
          <div class="report-result">
            <div class="result-type">
              <img
                src="../../assets/imgs/plastic_trash_type.png"
                alt=""
                class="cirlce-img"
              />0,0 кг
            </div>
            <div class="result-type">
              <img
                src="../../assets/imgs/glass_trash_type.png"
                alt=""
                class="cirlce-img"
              />
              0,0 кг
            </div>
            <div class="result-type">
              <img
                src="../../assets/imgs/batteries_trash_type.png"
                alt=""
                class="cirlce-img"
              />
              0,0 кг
            </div>
            <div class="result-type">
              <img
                src="../../assets/imgs/light_bulbs_trash_type.png"
                alt=""
                class="cirlce-img"
              />
              0,0 кг
            </div>
            <div class="result-type">
              <img
                src="../../assets/imgs/paper_trash_type.png"
                alt=""
                class="cirlce-img"
              />
              0,0 кг
            </div>
            <div class="result-type">
              <img
                src="../../assets/imgs/metal_trash_type.png"
                alt=""
                class="cirlce-img"
              />
              0,0 кг
            </div>
          </div>
          <div class="object-result-imgs">
            <img src="../../assets/imgs/default_activity.png" alt="" />
            <img src="../../assets/imgs/default_activity.png" alt="" />
            <img src="../../assets/imgs/default_activity.png" alt="" />
            <img src="../../assets/imgs/default_activity.png" alt="" />
          </div>
          <div class="object-result-desc">
            {{ report.description }}
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { url } from "@/main.js";

export default {
  data() {
    return {
      reports: this.fetchReports(),
      url: url,
      dataObject: this.fetchDataObjectAPI(),
      dataObjectReportsStatistics: [],
      actualEvents: this.fetchActualEvents(),
      visibleMore: false,
      id: this.$route.params.id,
      objectType: this.$route.params.objectType,
      sortPoints: this.fetchSortPoints(),
    };
  },
  methods: {
    navigateTo(id) {
      this.$router.push({
        name: "report",
        params: { id: id },
      });
    },
    newFunc() {},
    async fetchDataObjectAPI() {
      await fetch(`${url}/review/places/${this.$route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.dataObject = data.object_info;
          this.dataObjectReportsStatistics = data.reports_statistic;
          //TODO: добавить Map по dataObjectReportsStatistics
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    async fetchActualEvents() {
      await fetch(
        `${url}/review/actual_events/nature_object/${this.$route.params.id}`
      )
        .then((response) => response.json())
        .then(() => {
          this.actualEvents = [
            {
              id: 1,
              date: "01.02.2000",
              status: "Запланирова",
              time: "00:00",
              name: "Мероприятие",
            },
            {
              id: 2,
              date: "01.02.2000",
              status: "Запланирова",
              time: "00:00",
              name: "Мероприятие",
            },
            {
              id: 3,
              date: "01.02.2000",
              status: "Запланирова",
              time: "00:00",
              name: "Мероприятие",
            },
          ];
          this.actualEvents = this.actualEvents.slice(0, 2);
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    async fetchSortPoints() {
      await fetch(
        `${url}/review/nearest_nature_objects_to_sort_point/${this.$route.params.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.sortPoints = data.results.slice(0, 2);
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    async fetchReports() {
      await fetch(
        `${url}/review/reports/nature_object/${this.$route.params.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.reports = data.results;
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