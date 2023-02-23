<template>
  <main class="main" id="app">
    <section class="slider">
      <a>
        <img
          v-show="!visibleNext"
          @click="visibleNext = !visibleNext"
          src="../../assets/imgs/default_review.png"
          alt=""
          width="940"
          height="470"
        />
        <img
          v-show="visibleNext"
          @click="visibleNext = !visibleNext"
          src="../../assets/imgs/trash_big.png"
          alt=""
          width="940"
          height="470"
        />
      </a>
    </section>
    <section class="buttons element">
      <button class="btn-circle-icon">
        <img src="../../assets/imgs/map_circle_button_white.png" alt="" />
      </button>
      <button class="btn-circle-icon">
        <img src="../../assets/imgs/circle_favorite_default.png" alt="" />
      </button>
      <button class="btn-circle-icon">
        <img src="../../assets/imgs/newPlace.png" alt="" />
      </button>
    </section>
    <section class="info-element">
      <div class="card-info">
        <p class="card-name element">Субботник в Дубовой роще</p>
        <div class="coordinates">
          <div class="coordinate">
            <img
              class="icon-margin"
              width="11"
              height="18"
              src="../../assets/imgs/map.png"
              alt=""
            />
            Можайский район
          </div>
          <div class="coordinate">
            <img
              class="icon-margin"
              width="18"
              height="18"
              src="../../assets/imgs/places.png"
              alt=""
            />
            Дубовая роща
          </div>
          <div class="coordinate">
            <img
              class="icon-margin"
              width="18"
              height="18"
              src="../../assets/imgs/coordinate.png"
              alt=""
            />
            55.064767, 55.064767
          </div>
        </div>
        <div class="km-time">
          <div class="km">
            <img
              class="icon-margin"
              width="18"
              height="16"
              src="../../assets/imgs/calendar.png"
              alt=""
            />
            29.10.2022
          </div>
          <div class="time">
            <img
              class="icon-margin"
              width="18"
              height="18"
              src="../../assets/imgs/clock.png  "
              alt=""
            />
            10:00
          </div>
        </div>

        <div class="card-disc element">
          Lorem ipsum dolor sit amet consectetur. Tempus sit in integer nunc non
          faucibus. Odio in imperdiet sapien in hendrerit ultrices aliquet felis
          in. Pellentesque molestie sit eu sed ac donec rhoncus neque.
          Vestibulum nisi consectetur justo quisque aliquet mauris neque.
          Placerat cursus ut etiam eu est odio. A fusce eget sed neque. Justo
          pretium eu aliquet malesuada libero aliquam. Scelerisque ullamcorper
          enim volutpat lacinia tincidunt ultrices nullam. Quam volutpat ornare
          nam aliquet felis. Elementum elementum sapien consequat phasellus a
          faucibus eu cursus. Ut neque condimentum auctor lobortis consequat.
          Tellus tellus amet arcu in in sem. Nullam quis pulvinar orci euismod
          libero facilisi. Vestibulum nibh felis diam morbi. Volutpat gravida
          ipsum gravida nulla. Hac elementum vestibulum sapien quis faucibus
          donec egestas. Eu elit risus amet ullamcorper habitasse facilisis.
          Aenean sagittis elementum a id diam fermentum vitae elit. Lorem
          vestibulum nec mi non ipsum. Nisl orci aenean sed consectetur et
          interdum. Lacus nullam suspendisse sit morbi hac. Commodo tellus
          ultricies lorem sit vitae fermentum at molestie. Viverra tincidunt
          praesent amet in. Nibh et eget justo dui morbi aenean phasellus cursus
          vulputate. Non id sed sed pharetra neque. Faucibus ultricies iaculis
          in aenean felis dui. Nec rhoncus arcu pretium ac proin enim ultrices
          gravida velit. Fames sed aliquam nunc scelerisque blandit velit
          molestie maecenas in.
        </div>
      </div>
    </section>
    <section class="element-card">
      Объект
      <div class="card review">
        <img
          src="../../assets/imgs/nature.png"
          alt=""
          class="card-child card-img"
        />
        <div class="card-child card-content">
          <div class="card-content-wrapping">
            <div class="card-header">
              <div class="card-info">
                <p class="card-name">Парк 50-летия Октября</p>
                <div class="card-adress">
                  <img
                    src="../../assets/imgs/map.png"
                    alt=""
                    class="icon-margin"
                  />Коломна
                </div>
              </div>
              <button class="btn-circle-icon">
                <img
                  src="../../assets/imgs/circle_favorite_default.png"
                  alt=""
                />
              </button>
            </div>
            <div class="card-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor,
              venenatis, elit enim feugiat natoque enim ullamcorper. Nulla
              condimentum malesuada eget enim amet, mattis turpis. Vel, purus
              consequat, tristique ut diam. Vulputate nam massa suspendisse
              scelerisque. Urna, vitae tellus et, odio varius sit risus vitae
              nunc. Dignissim sed felis nunc volutpat facilisi in non tellus.
              Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit
              volutpat eu nec mauris scelerisque. Senectus accumsan risus proin
              posuere morbi facilisis et.
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
              <div class="rating">
                <img
                  src="../../assets/imgs/circle_trash.png"
                  alt=""
                  class="cirlce-img"
                />
                0.00
              </div>
              <div class="rating">
                <img
                  src="../../assets/imgs/circle_flower.png"
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
    <section class="element-card">
      Точка сортировки
      <div class="card review">
        <img
          src="../../assets/imgs/trash_picture.png"
          alt=""
          class="card-child card-img"
        />
        <div class="card-child card-content review">
          <div class="card-content-wrapping">
            <div class="card-header">
              <div class="card-info">
                <p class="card-name">Name</p>
                <div class="coordinates">
                  <div class="coordinate">
                    <img
                      class="icon-margin"
                      width="11"
                      height="18"
                      src="../../assets/imgs/map.png"
                      alt=""
                    />
                    Location
                  </div>
                  <div class="coordinate">
                    <img
                      class="icon-margin"
                      width="18"
                      height="18"
                      src="../../assets/imgs/places.png"
                      alt=""
                    />
                    <span>00:00 - 00:00</span>
                  </div>
                </div>
              </div>
              <button class="btn-circle-icon">
                <img
                  src="../../assets/imgs/circle_favorite_default.png"
                  alt=""
                />
              </button>
            </div>
            <div class="card-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor,
              venenatis, elit enim feugiat natoque enim ullamcorper. Nulla
              condimentum malesuada eget enim amet, mattis turpis. Vel, purus
              consequat, tristique ut diam. Vulputate nam massa suspendisse
              scelerisque. Urna, vitae tellus et, odio varius sit risus vitae
              nunc. Dignissim sed felis nunc volutpat facilisi in non tellus.
              Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit
              volutpat eu nec mauris scelerisque. Senectus accumsan risus proin
              posuere morbi facilisis et.
            </div>
            <div class="card-rating">
              <div class="rating">
                <img
                  src="../../assets/imgs/bus.png"
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
  </main>
</template>

<script>
export default {
  data() {
    return {
      visibleMore: false,
    };
  },
  methods: {
    newFunc() {
      console.log("hello");
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