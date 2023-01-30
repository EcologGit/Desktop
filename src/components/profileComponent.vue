<template>
  <main class="main">
    <section class="card profile-user">
      <img src="../assets/imgs/profile_photo.png" alt="" class="card-img" />
      <div class="card-child card-content">
        <div class="card-content-wrapping">
          <div class="card-header">
            <div class="user-info">
              <div class="card-name profile">Евгений Базаров</div>
              <div class="card-nameId">@doctor_bazar</div>
            </div>
          </div>
          <div class="user-data">
            <div class="about-user">
              <div class="place-of-residence">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../assets/imgs/map.png"
                  alt=""
                />
                Одинцово
              </div>
              <div class="dob">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../assets/imgs/dob_icon.png"
                  alt=""
                />
                08.09.1997
              </div>
              <div class="status">
                <img
                  class="icon-margin"
                  width="18"
                  height="16"
                  src="../assets/imgs/status_icon.png"
                  alt=""
                />
                Студент
              </div>
            </div>
            <div class="btns-circle-icon">
              <router-link class="a-circle-icon" to="/profile/settings">
                <img src="../assets/imgs/settings_button.png" alt="" />
              </router-link>
              <a class="a-circle-icon">
                <img src="../assets/imgs/logout_button.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="buttons profile">
      <button class="btn-profile active" @click="changeCard">
        <img
          class="icon-btn"
          v-show="visibleCards != 'reports'"
          @click="changeCard"
          width="15"
          height="18"
          src="../assets/imgs/reports.png"
          alt="reports"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'reports'"
          @click="changeCard"
          width="15"
          height="18"
          src="../assets/imgs/reports_white.png"
          alt="reports"
        />
        Отчеты
      </button>
      <button class="btn-profile btn-statistics" @click="changeCard">
        <img
          class="icon-btn"
          v-show="visibleCards != 'statistics'"
          @click="changeCard"
          width="15"
          height="18"
          src="../assets/imgs/statistics.png"
          alt="Statistics"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'statistics'"
          @click="changeCard"
          width="15"
          height="18"
          src="../assets/imgs/statistics_white.png"
          alt="Statistics"
        />
        Статистика
      </button>
    </section>

    <section v-show="visibleCards == 'reports'" class="cards">
      <div class="card profile">
        <div class="card-header profile">
          <div class="user-date">
            <div class="user-info">
              <img
                src="../assets/imgs/template_photo.png"
                alt="User"
                class="user-photo"
              />
              Евгений Базаров
            </div>
            <div class="date-report">01.01.2022 12:43</div>
          </div>
          <div class="coordinates">
            <div class="coordinate">
              <img
                class="icon-margin"
                width="11"
                height="18"
                src="../assets/imgs/map.png"
                alt=""
              />
              Город
            </div>
            <div class="coordinate">
              <img
                class="icon-margin"
                width="18"
                height="18"
                src="../assets/imgs/flag_black.png"
                alt=""
              />
              Имя места
            </div>
          </div>
        </div>
        <div class="card-content profile">
          <div class="card-imgs">
            <img
              class="card-img profile"
              src="../assets/imgs/template_photo.png"
              alt=""
            />
            <img
              class="card-img profile"
              src="../assets/imgs/template_photo.png"
              alt=""
            />
            <img
              class="card-img profile"
              src="../assets/imgs/template_photo.png"
              alt=""
            />
            <img
              class="card-img profile"
              src="../assets/imgs/template_photo.png"
              alt=""
            />
          </div>
          <div class="card-disc">
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
        <div class="card-rating">
          <div class="rating">
            <img
              src="../assets/imgs/plastic_trash_type.png"
              alt=""
              class="rating-icon"
            />
            0,0 кг
          </div>
          <div class="rating">
            <img
              src="../assets/imgs/glass_trash_type.png"
              alt=""
              class="rating-icon"
            />
            0,0 кг
          </div>
          <div class="rating">
            <img
              src="../assets/imgs/batteries_trash_type.png"
              alt=""
              class="rating-icon"
            />
            0,0 кг
          </div>
          <div class="rating">
            <img
              src="../assets/imgs/light_bulbs_trash_type.png"
              alt=""
              class="rating-icon"
            />
            0,0 кг
          </div>
          <div class="rating">
            <img
              src="../assets/imgs/paper_trash_type.png"
              alt=""
              class="rating-icon"
            />
            0,0 кг
          </div>
          <div class="rating">
            <img
              src="../assets/imgs/metal_trash_type.png"
              alt=""
              class="rating-icon"
            />
            0,0 кг
          </div>
        </div>
        <a href="#" class="a-edit">
          <img
            class="a-img"
            width="18"
            height="18"
            src="../assets/imgs/edit_icon.png    "
            alt="Иконка Обзор"
          />Редактировать</a
        >
      </div>
    </section>
    <section v-show="visibleCards == 'statistics'" class="user-statistics">
      <div class="statistics-card collected-trash">
        Собранный отходы
        <div class="card-rating profile">
          <div class="rating profile">
            <div>
              <img
                src="../assets/imgs/plastic_trash_type.png"
                alt=""
                class="rating-icon"
              />
              Пластик
            </div>
            <div class="value-trash">0,0 кг</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../assets/imgs/glass_trash_type.png"
                alt=""
                class="rating-icon"
              />
              Стекло
            </div>
            <div class="value-trash">0,0 кг</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../assets/imgs/batteries_trash_type.png"
                alt=""
                class="rating-icon"
              />
              Батарейки
            </div>
            <div class="value-trash">0,0 кг</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../assets/imgs/light_bulbs_trash_type.png"
                alt=""
                class="rating-icon"
              />
              Лампочки
            </div>
            <div class="value-trash">0,0 кг</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../assets/imgs/paper_trash_type.png"
                alt=""
                class="rating-icon"
              />
              Макулатура
            </div>
            <div class="value-trash">0,0 кг</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../assets/imgs/metal_trash_type.png"
                alt=""
                class="rating-icon"
              />
              Металл
            </div>
            <div class="value-trash">0,0 кг</div>
          </div>
        </div>
      </div>
      <div class="second-column">
        <div class="statistics-card object-counter">
          Счетчик объектов
          <div class="card-rating profile">
            <div class="rating profile">
              <div>
                <img
                  src="../assets/imgs/places_circle_icon.png"
                  alt=""
                  class="rating-icon"
                />
                Места
              </div>
              <div class="value-trash">0</div>
            </div>
            <div class="rating profile">
              <div>
                <img
                  src="../assets/imgs/routes_circle_icon.png"
                  alt=""
                  class="rating-icon"
                />
                Маршруты
              </div>
              <div class="value-trash">0</div>
            </div>
            <div class="rating profile">
              <div>
                <img
                  src="../assets/imgs/events_circle_icon.png"
                  alt=""
                  class="rating-icon"
                />
                Мероприятия
              </div>
              <div class="value-trash">0</div>
            </div>
            <div class="rating profile">
              <div>
                <img
                  src="../assets/imgs/sortPoints_circle_icon.png"
                  alt=""
                  class="rating-icon"
                />
                Точки сортировки
              </div>
              <div class="value-trash">0</div>
            </div>
          </div>
        </div>
        <div class="statistics-card activity">
          Активность
          <div class="card-rating profile">
            <div class="rating profile">
              <div>
                <img
                  src="../assets/imgs/reports_circle_icon.png"
                  alt=""
                  class="rating-icon"
                />
                Отчеты
              </div>
              <div class="value-trash">0</div>
            </div>
            <div class="rating profile">
              <div>
                <img
                  src="../assets/imgs/grade_circle_icon.png"
                  alt=""
                  class="rating-icon"
                />
                Оценки
              </div>
              <div class="value-trash">0</div>
            </div>
            <div class="rating profile">
              <div>
                <img
                  src="../assets/imgs/photos_circle_icon.png"
                  alt=""
                  class="rating-icon"
                />
                Фотографии
              </div>
              <div class="value-trash">0</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      visibleCards: "reports",
    };
  },
  methods: {
    changeCard(event) {
      let target =
        event.target.className == "icon-btn"
          ? event.target.parentElement
          : event.target;

      target.parentElement.childNodes.forEach((el) => {
        if (el.matches(".active")) {
          el.classList.remove("active");
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
    newFunc() {
      console.log("hello");
    },
  },
};
</script>