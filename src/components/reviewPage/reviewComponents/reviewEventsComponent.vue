<template>
  <section
    class="cards"
    v-for="event in dataEventsList"
    v-bind:key="event.object_id"
  >
    <div class="card review">
      <img v-bind:src="'http://81.163.30.36:8000/' + event.photo" alt="" class="card-child card-img review" />
      <div class="card-child card-content review">
        <div class="card-content-wrapping">
          <div>
            <div class="card-header">
              <div class="card-info">
                <p class="card-name" @click="findPlace(place.object_id)">
                  {{ event.name }}
                </p>
                <div class="coordinates">
                  <div class="coordinate">
                    <img
                      class="icon-margin"
                      width="11"
                      height="18"
                      src="../../../assets/imgs/map.png"
                      alt=""
                    />
                    {{ event.adress }}
                  </div>
                </div>
                <div class="km-time">
                  <div class="km">
                    <img
                      class="icon-margin"
                      width="18"
                      height="16"
                      src="../../../assets/imgs/calendar.png"
                      alt=""
                    />
                    {{ event.status }}
                  </div>
                  <div class="time">
                    <img
                      class="icon-margin"
                      width="18"
                      height="18"
                      src="../../../assets/imgs/clock.png  "
                      alt=""
                    />
                    {{ formattingDate(event.datetime_start) }}
                  </div>
                </div>
              </div>
              <a class="a-circle-icon">
                <img
                  class="cirlce-img"
                  src="../../../assets/imgs/circle_favorite_default.png"
                  alt=""
                />
              </a>
            </div>
            <div class="card-desc">
              {{ event.description }}
            </div>
          </div>
          <div>
            <button
              class="button-event"
              :style="{ backgroundColor: '#D3F36B' }"
            >
              {{ formattingStyleButton(event.status) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  inject: ["sortName", "placeList"],
  data() {
    return {
      sortPlaces: [],
      visibleCards: "places",
      visibleDropdown: false,
      dataEventsList: this.fetchDataEventsAPI(),
    };
  },
  mounted() {},
  methods: {
    async fetchDataEventsAPI() {
      await fetch("http://81.163.30.36:8000/review/events/")
        .then((response) => response.json())
        .then((data) => {
          this.dataEventsList = data;
          console.log(data);
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },

    formattingDate(date) {
      const msUTC = Date.parse(date);
      const correctFormatDate = new Date(msUTC);

      return correctFormatDate.toLocaleString("ru-RU", {
        dateStyle: "full",
      });
    },
    formattingStyleButton(status) {
      console.log(status);
      if (status == "Запланировано") {
        this.buttonColor = "#D3F36B";

        return "Запланировано";
      } else if (status == "Отменено") {
        this.buttonColor = "red";

        return "Отменено";
      } else {
        this.buttonColor = "grey";
        return "Завершено";
      }
    },
    changeCard(event) {
      let target =
        event.target.className == "icon-btn"
          ? event.target.parentElement
          : event.target;

      target.parentElement.childNodes.forEach((el) => {
        if (el.matches(".active")) {
          el.classList.remove("active");
        }
        if (target.classList.contains("btn-routes")) {
          this.visibleCards = "routes";
        } else if (target.classList.contains("btn-events")) {
          this.visibleCards = "events";
        } else if (target.classList.contains("btn-sortPoints")) {
          this.visibleCards = "sortPoints";
        } else {
          this.visibleCards = "places";
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

      this.placeList.sort((a, b) => b.rating - a.rating);
      let dropdowns = document.querySelector(".dropdown-content");
      let dropdbtn = document.querySelector(".dropbtn");
      if (dropdowns) {
        dropdowns.style.display = "none";
        dropdbtn.classList.remove("active");
      }
    },
    findPlace(id) {
      console.log(this.placeList.filter((el) => el.id == id));
    },
  },
  watch: {
    show() {},
  },
};
</script>