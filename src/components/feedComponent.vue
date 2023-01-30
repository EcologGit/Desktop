<template>
  <main class="main">
    <section class="buttons feed">
      <button class="btn-feed active" @click="changeCard">
        <img
          class="icon-btn"
          v-show="visibleCards != 'reports'"
          width="15"
          height="18"
          src="../assets/imgs/reports.png"
          alt="Reports"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'reports'"
          width="15"
          height="18"
          src="../assets/imgs/reports_white.png"
          alt="Reports"
        />
        Отчет
      </button>
      <button class="btn-feed btn-medals" @click="changeCard">
        <img
          class="icon-btn"
          v-show="visibleCards != 'medals'"
          width="15"
          height="18"
          src="../assets/imgs/medals.png"
          alt="Medals"
        />
        <img
          class="icon-btn"
          v-show="visibleCards == 'medals'"
          width="15"
          height="18"
          src="../assets/imgs/medals_white.png"
          alt="Medals"
        />
        Топ-результаты
      </button>
    </section>

    <section class="settings" v-show="visibleCards == 'reports'">
      <div class="dropdown">
        <button
          v-bind:class="{ active: visibleDropdown }"
          class="button-text dropbtn"
          @click="visibleDropdown = !visibleDropdown"
        >
          <img src="../assets/imgs/setting1.png" alt="" />
          Сортировка
        </button>
        <div v-show="visibleDropdown" class="dropdown-content">
          <button class="active" @click="sort" href="#home">ПО АЛФАВИТУ</button>
          <button @click="sort" href="#about">ПО РЕЙТИНГУ</button>
          <button @click="sort" href="#contact">ПО УДАЛЕННОСТИ</button>
          <button @click="sort" href="#contact">ПО ПОПУЛЯРНОСТИ</button>
        </div>
      </div>
      <button class="button-text">
        <img src="../assets/imgs/setting2.png" alt="" />
        Параметры
      </button>
    </section>

    <section v-show="visibleCards == 'reports'" class="cards">
      <div class="card feed">
        <div class="card-header feed">
          <div class="user-date">
            <div class="user-info">
              <img
                src="../assets/imgs/user_photo.png"
                alt="User"
                class="user-photo"
              />
              Николай Ростов
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
              Воскресенск
            </div>
            <div class="coordinate">
              <img
                class="icon-margin"
                width="18"
                height="18"
                src="../assets/imgs/flag_black.png"
                alt=""
              />
              Карьер “Песчаный”
            </div>
          </div>
        </div>
        <div class="card-content feed">
          <div class="card-imgs">
            <img
              class="card-img feed"
              src="../assets/imgs/user_img1.png"
              alt=""
            />
            <img
              class="card-img feed"
              src="../assets/imgs/user_img2.png"
              alt=""
            />
            <img
              class="card-img feed"
              src="../assets/imgs/user_img3.png"
              alt=""
            />
            <img
              class="card-img feed"
              src="../assets/imgs/user_img4.png"
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
            3,6 кг
          </div>
          <div class="rating">
            <img
              src="../assets/imgs/paper_trash_type.png"
              alt=""
              class="rating-icon"
            />
            2,2 кг
          </div>
          <div class="rating">
            <img
              src="../assets/imgs/metal_trash_type.png"
              alt=""
              class="rating-icon"
            />
            15,8 кг
          </div>
        </div>
      </div>
      <div class="card feed">
        <div class="card-header feed">
          <div class="user-date">
            <div class="user-info">
              <img
                src="../assets/imgs/user_photo.png"
                alt="User"
                class="user-photo"
              />
              Николай Ростов
            </div>
            <div class="date-report">01.01.2022 12:43</div>
          </div>
          <div class="coordinates">
            <div class="coordinate feed">
              <img
                class="icon-margin"
                width="11"
                height="18"
                src="../assets/imgs/map.png"
                alt=""
              />
              Воскресенск
            </div>
            <div class="coordinate feed">
              <img
                class="icon-margin"
                width="18"
                height="18"
                src="../assets/imgs/flag_black.png"
                alt=""
              />
              Карьер “Песчаный”
            </div>
          </div>
        </div>
        <div class="card-content feed">
          <div class="card-imgs">
            <img
              class="card-img feed"
              src="../assets/imgs/user_img1.png"
              alt=""
            />
            <img
              class="card-img feed"
              src="../assets/imgs/user_img2.png"
              alt=""
            />
            <img
              class="card-img feed"
              src="../assets/imgs/user_img3.png"
              alt=""
            />
            <img
              class="card-img feed"
              src="../assets/imgs/user_img4.png"
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
            3,6 кг
          </div>
          <div class="rating">
            <img
              src="../assets/imgs/paper_trash_type.png"
              alt=""
              class="rating-icon"
            />
            2,2 кг
          </div>
          <div class="rating">
            <img
              src="../assets/imgs/metal_trash_type.png"
              alt=""
              class="rating-icon"
            />
            15,8 кг
          </div>
        </div>
      </div>
    </section>

    <section
      v-show="visibleCards == 'medals'"
      class="cards"
      style="margin-top: 30px"
    >
      <div class="card feed">
        <div class="card-header feed"></div>
        <div class="card-content feed">
          <div class="card-imgs"></div>
          <div class="card-disc">х#р</div>
          <div class="card-rating">
            <div class="rating">
              <img src="../assets/imgs/bus.png" alt="" class="rating-icon" />
              0.00
            </div>
            <div class="rating">
              <img src="../assets/imgs/trash.png" alt="" class="rating-icon" />
              0.00
            </div>
            <div class="rating">
              <img src="../assets/imgs/flower.png" alt="" class="rating-icon" />
              0.00
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

        if (target.classList.contains("btn-medals")) {
          this.visibleCards = "medals";
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
      console.log(this.visibleDropdown);
    },
  },
};
</script>