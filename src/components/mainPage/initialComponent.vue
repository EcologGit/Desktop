<template>
  <main class="main initial">
    <img src="../../assets/imgs/initial_img.png" alt="" />
    <router-link to="/profile/signup">
      <button class="single-button initial">
        <img
          height="18"
          width="18"
          icon-btn
          src="../../assets/imgs/signUp_white.png"
          alt=""
        />
        Регистрация
      </button>
    </router-link>

    <button class="button-text more" @click="visibleMore = !visibleMore">
      <img
        height="11"
        width="18"
        src="../../assets/imgs/more_icon.png"
        alt=""
      />
      Подробнее
    </button>
    <section v-show="visibleMore" class="section more">
      <div class="about us">
        <img src="../../assets/imgs/aboutUs_ims.png" alt="" />
        <div class="about-text">
          О нас
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            et venenatis auctor eget scelerisque ac rhoncus. Porttitor turpis
            sed libero elit faucibus quam. Hac tortor purus, netus nunc, aenean.
            Hac urna mauris, euismod placerat sodales volutpat. Aliquet enim
            convallis ipsum orci et elementum rhoncus, mauris nibh. Pellentesque
            gravida id vitae arcu. Blandit sit fermentum lorem tincidunt
            ultrices amet viverra. Mauris eget in nec elit in. Enim sed eget
            pellentesque non dapibus in mattis. Nisl amet porttitor gravida
            pellentesque mi praesent suspendisse porta. In lorem ornare nisi,
            non ac sagittis, viverra diam. Auctor in convallis in viverra.
          </p>
        </div>
      </div>
      <div class="about project">
        <div class="about-text project">
          О проекте
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            et venenatis auctor eget scelerisque ac rhoncus. Porttitor turpis
            sed libero elit faucibus quam. Hac tortor purus, netus nunc, aenean.
            Hac urna mauris, euismod placerat sodales volutpat. Aliquet enim
            convallis ipsum orci et elementum rhoncus, mauris nibh. Pellentesque
            gravida id vitae arcu. Blandit sit fermentum lorem tincidunt
            ultrices amet viverra. Mauris eget in nec elit in. Enim sed eget
            pellentesque non dapibus in mattis. Nisl amet porttitor gravida
            pellentesque mi praesent suspendisse porta. In lorem ornare nisi,
            non ac sagittis, viverra diam. Auctor in convallis in viverra.
          </p>
        </div>
        <img src="../../assets/imgs/aboutProject_img.png" alt="" />
      </div>
      <div class="about ecotourism">
        <img src="../../assets/imgs/aboutEcotourism_img.png" alt="" />
        <div class="about-text">
          Об экотуризме
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
            et venenatis auctor eget scelerisque ac rhoncus. Porttitor turpis
            sed libero elit faucibus quam. Hac tortor purus, netus nunc, aenean.
            Hac urna mauris, euismod placerat sodales volutpat. Aliquet enim
            convallis ipsum orci et elementum rhoncus, mauris nibh. Pellentesque
            gravida id vitae arcu. Blandit sit fermentum lorem tincidunt
            ultrices amet viverra. Mauris eget in nec elit in. Enim sed eget
            pellentesque non dapibus in mattis. Nisl amet porttitor gravida
            pellentesque mi praesent suspendisse porta. In lorem ornare nisi,
            non ac sagittis, viverra diam. Auctor in convallis in viverra.
          </p>
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