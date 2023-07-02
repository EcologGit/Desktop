<template>
  <section class="object" v-bind="dataObject">
    <section class="slider">
      <a>
        <img
          class="object-img"
          v-show="!visibleNext"
          @click="visibleNext = !visibleNext"
          v-bind:src="'http://81.163.30.36:8000' + dataObject.photo"
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
        <div class="parameters object-sortPoint">
          <div class="km">
            <img
              class="icon-margin"
              width="18"
              height="18"
              src="../../assets/imgs/clock.png"
              alt=""
            />
            00:00 - 00:00
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
        <div class="object-events">
          <p>Ближайшие объекты</p>
          <div class="small-list events">
            <div class="event-small-card">
              <img
                class="small-card-img"
                src="../../assets/imgs/default_activity.png"
                alt=""
              />
              <div class="small-card-name"><p>Name</p></div>
              <div class="parameters-object">
                <div class="parameter-object date">
                  <img
                    class="icon-margin"
                    width="12"
                    height="20"
                    src="../../assets/imgs/map.png"
                    alt=""
                  />
                  Locality
                </div>
              </div>
            </div>
            <div class="event-small-card">
              <img
                class="small-card-img"
                src="../../assets/imgs/default_activity.png"
                alt=""
              />
              <div class="small-card-name"><p>Name</p></div>
              <div class="parameters-object">
                <div class="parameter-object date">
                  <img
                    class="icon-margin"
                    width="12"
                    height="20"
                    src="../../assets/imgs/map.png"
                    alt=""
                  />
                  Locality
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="object-sortPoints">
          <p>Ближайшие маршруты</p>
          <div class="small-list sortPoints">
            <div class="sortPoint-small-card">
              <img
                class="small-card-img"
                src="../../assets/imgs/default_activity.png"
                alt=""
              />
              <div class="small-card-name"><p>Name</p></div>
              <div class="parameters-object">
                <div class="parameter-object date">
                  <img
                    class="icon-margin"
                    width="12"
                    height="20"
                    src="../../assets/imgs/map.png"
                    alt=""
                  />
                  Locality
                </div>
              </div>
            </div>
            <div class="sortPoint-small-card">
              <img
                class="small-card-img"
                src="../../assets/imgs/default_activity.png"
                alt=""
              />
              <div class="small-card-name"><p>Name</p></div>
              <div class="parameters-object">
                <div class="parameter-object date">
                  <img
                    class="icon-margin"
                    width="12"
                    height="20"
                    src="../../assets/imgs/map.png"
                    alt=""
                  />
                  Locality
                </div>
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
          vulputate hendrerit proin vulputate faucibus eu elementum. Sit pretium
          sed in congue molestie turpis sodales risus. Nunc quam cum felis,
          elementum amet fermentum. Tristique ipsum pulvinar dignissim ultricies
          nulla nulla fusce lectus. Urna, in fusce dictumst ipsum facilisis
          malesuada tempus, at. Auctor viverra et vestibulum nibh congue augue
          sagittis ac. Et mus mollis amet vel faucibus ultricies mattis. Sed
          aliquam eu, blandit morbi pellentesque leo imperdiet. Consectetur
          pharetra morbi tellus facilisi pellentesque id. Pharetra, elit
          interdum eget risus ut. Tristique nibh habitant aenean ac nec eget
          venenatis. Eget in morbi elementum id egestas quisque. Orci id quis
          consectetur volutpat vitae convallis faucibus ut. Egestas ornare
          pretium non accumsan volutpat scelerisque. Mauris mattis mauris
          pulvinar sit. Purus arcu, aenean ut sapien viverra molestie vitae sem
          semper. In fames et ut tellus. Et volutpat, hendrerit eget ullamcorper
          purus imperdiet. Vitae non iaculis netus in egestas tempor nibh.
          Elementum, eget cras in vitae lectus laoreet in egestas. Arcu neque,
          aliquet urna, consectetur. Maecenas purus, ut a volutpat lacus.
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
      await fetch(
        `http://81.163.30.36:8000/review/${this.$route.params.objectType}/${this.$route.params.id}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.dataObject = data;

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