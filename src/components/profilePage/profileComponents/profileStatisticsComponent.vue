<template>
  <section class="statistics">
    <div class="statistics-card collected-trash">
      Собранный отходы
      <div class="card-rating profile">
        <div class="rating profile">
          <div>
            <img
              src="../../../assets/imgs/plastic_trash_type.png"
              alt=""
              class="cirlce-img"
            />
            Пластик
          </div>
          <div class="value-trash">0,0 кг</div>
        </div>
        <div class="rating profile">
          <div>
            <img
              src="../../../assets/imgs/glass_trash_type.png"
              alt=""
              class="cirlce-img"
            />
            Стекло
          </div>
          <div class="value-trash">0,0 кг</div>
        </div>
        <div class="rating profile">
          <div>
            <img
              src="../../../assets/imgs/batteries_trash_type.png"
              alt=""
              class="cirlce-img"
            />
            Батарейки
          </div>
          <div class="value-trash">0,0 кг</div>
        </div>
        <div class="rating profile">
          <div>
            <img
              src="../../../assets/imgs/light_bulbs_trash_type.png"
              alt=""
              class="cirlce-img"
            />
            Лампочки
          </div>
          <div class="value-trash">0,0 кг</div>
        </div>
        <div class="rating profile">
          <div>
            <img
              src="../../../assets/imgs/paper_trash_type.png"
              alt=""
              class="cirlce-img"
            />
            Макулатура
          </div>
          <div class="value-trash">0,0 кг</div>
        </div>
        <div class="rating profile">
          <div>
            <img
              src="../../../assets/imgs/metal_trash_type.png"
              alt=""
              class="cirlce-img"
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
                src="../../../assets/imgs/circle_places.png"
                alt=""
                class="cirlce-img"
              />
              Места
            </div>
            <div class="value-trash">0</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_routes.png"
                alt=""
                class="cirlce-img"
              />
              Маршруты
            </div>
            <div class="value-trash">0</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_events.png"
                alt=""
                class="cirlce-img"
              />
              Мероприятия
            </div>
            <div class="value-trash">0</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_sortPoint.png"
                alt=""
                class="cirlce-img"
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
                src="../../../assets/imgs/circle_reports.png"
                alt=""
                class="cirlce-img"
              />
              Отчеты
            </div>
            <div class="value-trash">0</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_grade.png"
                alt=""
                class="cirlce-img"
              />
              Оценки
            </div>
            <div class="value-trash">0</div>
          </div>
          <div class="rating profile">
            <div>
              <img
                src="../../../assets/imgs/circle_photos.png"
                alt=""
                class="cirlce-img"
              />
              Фотографии
            </div>
            <div class="value-trash">0</div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    newFunc() {
      console.log("hello");
    },
  },
};
</script>