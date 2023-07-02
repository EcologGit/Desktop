<template>
  <section
    class="cards"
    v-for="sortPoint in dataSortPointsList"
    v-bind:key="sortPoint.point_id"
  >
    <div class="card review">
      <img
        v-bind:src="'http://81.163.30.36:8000' + sortPoint.photo"
        alt=""
        class="card-child card-img review"
      />
      <div class="card-child card-content review">
        <div class="card-content-wrapping">
          <div>
            <div class="card-header">
              <div class="card-info">
                <p class="card-name" @click="navigateTo(sortPoint.point_id)">
                  {{ sortPoint.name }}
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
                    {{ sortPoint.locality }}
                  </div>
                  <div class="coordinate">
                    <img
                      class="icon-margin"
                      width="18"
                      height="18"
                      src="../../../assets/imgs/clock.png"
                      alt=""
                    />
                    <span>{{ sortPoint.schedule }}</span>
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
              {{ sortPoint.description }}
            </div>
          </div>
          <div class="card-rating">
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_bus.png"
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
</template>

<script>
export default {
  inject: ["sortName", "placeList"],
  data() {
    return {
      sortPlaces: [],
      dataSortPointsList: this.fetchDataPlaceAPI(),
    };
  },
  methods: {
    navigateTo(id) {
      this.$router.push({
        name: "objectSortPoints",
        params: { objectType: "sortPoints", id: id },
      });
    },
    findPlace(id) {
      console.log(this.placeList.filter((el) => el.id == id));
    },
    async fetchDataPlaceAPI() {
      await fetch("http://81.163.30.36:8000/review/sortPoints/")
        .then((response) => response.json())
        .then((data) => {
          this.dataSortPointsList = data.results;
          console.log("DATA");
          console.log(data);
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
  },
};
</script>