<template>
  <section class="cards marks sortPoints">
    <div class="card marks">
      <img
        src="../../../assets/imgs/default_marks.png"
        alt=""
        class="card-child card-img marks"
      />
      <div class="card-child card-content marks">
        <div class="card-content-wrapping marks">
          <div class="card-title">Пункт приема мукулатуры</div>
          <div class="coordinates">
            <div class="coordinates">
              <div class="coordinate feed">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../../../assets/imgs/map.png"
                  alt=""
                />
                Егорьевск
              </div>
            </div>
            <div class="parameters">
              <div class="time">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../../../assets/imgs/clock.png  "
                  alt=""
                />
                00:00 - 00:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card marks">
      <img
        src="../../../assets/imgs/default_marks.png"
        alt=""
        class="card-child card-img marks"
      />
      <div class="card-child card-content marks">
        <div class="card-content-wrapping marks">
          <div class="card-title">Субботник в парке Мира</div>
          <div class="coordinates">
            <div class="coordinates">
              <div class="coordinate feed">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../../../assets/imgs/map.png"
                  alt=""
                />
                Егорьевск
              </div>
            </div>
            <div class="parameters">
              <div class="time">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../../../assets/imgs/clock.png  "
                  alt=""
                />
                00:00 - 00:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card marks">
      <img
        src="../../../assets/imgs/default_marks.png"
        alt=""
        class="card-child card-img marks"
      />
      <div class="card-child card-content marks">
        <div class="card-content-wrapping marks">
          <div class="card-title">Субботник в парке Мира</div>
          <div class="coordinates">
            <div class="coordinates">
              <div class="coordinate feed">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../../../assets/imgs/map.png"
                  alt=""
                />
                Егорьевск
              </div>
            </div>
            <div class="parameters">
              <div class="time">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../../../assets/imgs/clock.png  "
                  alt=""
                />
                00:00 - 00:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card marks">
      <img
        src="../../../assets/imgs/default_marks.png"
        alt=""
        class="card-child card-img marks"
      />
      <div class="card-child card-content marks">
        <div class="card-content-wrapping marks">
          <div class="card-title">Субботник в парке Мира</div>
          <div class="coordinates">
            <div class="coordinates">
              <div class="coordinate feed">
                <img
                  class="icon-margin"
                  width="11"
                  height="18"
                  src="../../../assets/imgs/map.png"
                  alt=""
                />
                Егорьевск
              </div>
            </div>
            <div class="parameters">
              <div class="time">
                <img
                  class="icon-margin"
                  width="18"
                  height="18"
                  src="../../../assets/imgs/clock.png  "
                  alt=""
                />
                00:00 - 00:00
              </div>
            </div>
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
      visibleCards: "places",
      visibleDropdown: false,
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
    },
    visibleCardsFunc() {},
  },
};
</script>