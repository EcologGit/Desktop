<template>
  <section
    class="cards"
    v-for="place in dataPlaceList"
    v-bind:key="place.object_id"
  >
    <div class="card review">
      <img
        v-bind:src="'http://81.163.30.36:8000' + place.photo"
        alt=""
        class="card-child card-img review"
      />
      <div class="card-child card-content review">
        <div class="card-content-wrapping">
          <div>
            <div class="card-header">
              <div class="card-info">
                <p class="card-name" @click="navigateTo(place.object_id)">
                  {{ place.name }}
                </p>
                <div class="card-adress">
                  <img
                    width="11"
                    height="18"
                    src="../../../assets/imgs/map.png"
                    alt=""
                    class="icon-margin"
                  />
                  {{ place.locality }}
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
              {{ place.description }}
            </div>
          </div>
          <div class="card-rating">
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_bus.png"
                alt=""
                class="cirlce-img"
              />
              {{ place.avg_availability }}
            </div>
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_sortPoint.png"
                alt=""
                class="cirlce-img"
              />
              {{ place.avg_beauty }}
            </div>
            <div class="rating">
              <img
                src="../../../assets/imgs/circle_flower.png"
                alt=""
                class="cirlce-img"
              />
              {{ place.avg_purity }}
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
  created() {
    // > Внедряемое свойство: 5
  },

  data() {
    return {
      dataPlaceList: this.fetchDataPlaceAPI(),
    };
  },
  mounted() {
    return {
      // dataPlaceList: this.fetchDataPlaceAPI(),
    };
  },
  methods: {
    findPlace(id) {
      console.log(this.placeList.filter((el) => el.id == id));
    },
    async fetchDataPlaceAPI() {
      await fetch("http://81.163.30.36:8000/review/places/")
        .then((response) => response.json())
        .then((data) => {
          this.dataPlaceList = data.results;
          console.log(data);
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        });
    },
    navigateTo(id) {
      this.$router.push({
        name: "objectPlaces",
        params: { objectType: "places", id: id },
      });
    },
  },
  computed: {
    //сортировка
    evenNumbers() {
      return console.log("a");
    },
  },
};
</script>