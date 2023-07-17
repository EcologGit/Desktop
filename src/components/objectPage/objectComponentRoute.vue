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
          <div class="parameters object-route">
            <div class="km">
              <img
                class="icon-margin"
                width="18"
                height="9"
                src="../../assets/imgs/ruler.png"
                alt=""
              />
              {{ dataObject.length }} км
            </div>
            <div class="time">
              <img
                class="icon-margin"
                width="13"
                height="18"
                src="../../assets/imgs/hourglass.png  "
                alt=""
              />
              {{ dataObject.duration }}
            </div>
          </div>
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
          <div class="object-sortPoints" v-if="sortPoints.length > 0">
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
            <div class="object-coordinates-info object-route">
              <div class="coordinate-locality">
                <img
                  class="icon-margin"
                  width="12"
                  height="20"
                  src="../../assets/imgs/map.png"
                  alt=""
                />
                {{ dataObject.locality }}
              </div>
              <div class="coordinate-start">
                <img
                  class="icon-margin"
                  width="15"
                  height="15"
                  src="../../assets/imgs/start.png"
                  alt=""
                />
                {{ dataObject.start_n }}, {{ dataObject.start_e }}
              </div>
              <div class="coordinate-end">
                <img
                  class="icon-margin"
                  width="15"
                  height="15"
                  src="../../assets/imgs/finish.png"
                  alt=""
                />
                {{ dataObject.end_n }}, {{ dataObject.end_e }}
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
                <div>{{ dataObjectReportsStatistics[0].sum_amount }} кг</div>
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
        <div class="object-report-card">
          <div class="object-report-info">
            <div class="object-report-user-info">
              <div class="object-report-user-img-name">
                <img
                  src="../../assets/imgs/default_user_photo_small.png"
                  alt="User"
                  class="user-photo"
                />
                Username
              </div>

              <div class="date-and-time">
                <div class="date">Date</div>

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam
            vulputate hendrerit proin vulputate faucibus eu elementum. Sit
            pretium sed in congue molestie turpis sodales risus. Nunc quam cum
            felis, elementum amet fermentum. Tristique ipsum pulvinar dignissim
            ultricies nulla nulla fusce lectus. Urna, in fusce dictumst ipsum
            facilisis malesuada tempus, at. Auctor viverra et vestibulum nibh
            congue augue sagittis ac. Et mus mollis amet vel faucibus ultricies
            mattis. Sed aliquam eu, blandit morbi pellentesque leo imperdiet.
            Consectetur pharetra morbi tellus facilisi pellentesque id.
            Pharetra, elit interdum eget risus ut. Tristique nibh habitant
            aenean ac nec eget venenatis. Eget in morbi elementum id egestas
            quisque. Orci id quis consectetur volutpat vitae convallis faucibus
            ut. Egestas ornare pretium non accumsan volutpat scelerisque. Mauris
            mattis mauris pulvinar sit. Purus arcu, aenean ut sapien viverra
            molestie vitae sem semper. In fames et ut tellus. Et volutpat,
            hendrerit eget ullamcorper purus imperdiet. Vitae non iaculis netus
            in egestas tempor nibh. Elementum, eget cras in vitae lectus laoreet
            in egestas. Arcu neque, aliquet urna, consectetur. Maecenas purus,
            ut a volutpat lacus.
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
      url: url,
      dataObjectReportsStatistics: [],
      dataObject: this.fetchDataObjectAPI(),
      visibleMore: false,
      id: this.$route.params.id,
      objectType: this.$route.params.objectType,
      actualEvents: this.fetchActualEvents(),
      sortPoints: this.fetchSortPoints(),
    };
  },
  methods: {
    newFunc() {},
    async fetchDataObjectAPI() {
      await fetch(`${url}/review/routes/${this.$route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          this.dataObject = data.object_info;
          this.dataObjectReportsStatistics = data.reports_statistic;
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
          ];
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
          this.sortPoints = data.results;
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