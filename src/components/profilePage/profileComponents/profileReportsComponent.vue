<template>
  <section class="cards">
    <div class="card profile">
      <div class="card-header profile">
        <div class="user-date">
          <div class="user-info">
            <img
              src="../../../assets/imgs/default_user_photo_small.png"
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
              src="../../../assets/imgs/map.png"
              alt=""
            />
            Город
          </div>
          <div class="coordinate">
            <img
              class="icon-margin"
              width="18"
              height="18"
              src="../../../assets/imgs/places.png"
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
            src="../../../assets/imgs/default_activity.png"
            alt=""
          />
          <img
            class="card-img profile"
            src="../../../assets/imgs/default_activity.png"
            alt=""
          />
          <img
            class="card-img profile"
            src="../../../assets/imgs/default_activity.png"
            alt=""
          />
          <img
            class="card-img profile"
            src="../../../assets/imgs/default_activity.png"
            alt=""
          />
        </div>
        <div class="card-desc">
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
      <div class="card-rating">
        <div class="rating">
          <img
            src="../../../assets/imgs/plastic_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
        <div class="rating">
          <img
            src="../../../assets/imgs/glass_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
        <div class="rating">
          <img
            src="../../../assets/imgs/batteries_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
        <div class="rating">
          <img
            src="../../../assets/imgs/light_bulbs_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
        <div class="rating">
          <img
            src="../../../assets/imgs/paper_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
        <div class="rating">
          <img
            src="../../../assets/imgs/metal_trash_type.png"
            alt=""
            class="cirlce-img"
          />
          0,0 кг
        </div>
      </div>
      <div class="post-action">
        <a href="#" class="a-action-post">
          <img
            class="a-img"
            width="16"
            height="18"
            src="../../../assets/imgs/publish.png"
            alt="Иконка Обзор"
          />Опубликовать</a
        >
        <a href="#" class="a-action-post">
          <img
            class="a-img"
            width="18"
            height="18"
            src="../../../assets/imgs/edit.png"
            alt="Иконка Обзор"
          />Редактировать</a
        >
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