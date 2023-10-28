<template>
  <main class="main initial">
    <div class="main-img">
      <img src="../../assets/imgs/initial_img.png" alt="" />
      <div class="img-title">Управляй Аурой своих путешествий</div>
      <div class="img-text">Приведи в порядок свою планету</div>
    </div>
    <router-link to="/profile/signup">
      <button class="single-button initial">
        <img
          class="icon-margin"
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
            Мы – молодая команда неравнодушных к окружающему миру
            единомышленников. Каждый из нас пытается сделать этот мир немного
            лучше. В AuraSolutions мы объединили свои силы для того, чтобы
            создавать современные технологические продукты, которые будут
            находить отклик в каждом осознанном человеке. В нашей работе мы
            открыты для сотрудничества и обсуждения вопросов, Вы всегда сможете
            связаться с нами. Мы всегда готовы к диалогу и с нетерпением ждем
            Ваших идей.
          </p>
        </div>
      </div>
      <div class="about project">
        <div class="about-text project">
          О проекте
          <p>
            Проект «Аура» представляет собой первый некоммерческий агрегатор
            объектов экологической направленности, включающих в себя
            туристические маршруты, объекты, события и точки сортировки мусора.
            В текущей момент Вы можете участвовать в уборке представленных на
            сервисе объектов и оставлять отчеты о своих успехах, а также
            делиться о них со своими друзьями. В ближайшее время наш функционал
            расширится, и Вы сможете бронировать объекты, связанные с
            экологическим туризмом, а также добавлять их самостоятельно,
            организовывать на них мероприятия и участвовать в них.
            Присоединяйтесь и улучшайте свою Ауру!
          </p>
        </div>
        <img src="../../assets/imgs/aboutProject_img.png" alt="" />
      </div>
      <div class="about ecotourism">
        <img src="../../assets/imgs/aboutEcotourism_img.png" alt="" />
        <div class="about-text">
          Об экотуризме
          <p>
            Экотуризм в России предоставляет непередаваемые возможности для
            путешественников, желающих насладиться красотой природы и
            экологически чистыми уголками нашей страны. Данный вид отдыха
            позволяет не только прикоснуться к природе, но и сохранить её
            богатство природы для будущих поколений, парки, заповедники,
            экологические отели и туристические маршруты являются точками
            соприкосновения с ней. Мы хотим внести в это взаимодействие принцип
            «Приведи в порядок свою планету», чтобы отдых на свежем воздухе нес
            пользу не только людям, но и окружающему их миру. Присоединяйтесь к
            нам вместе с «Аурой»!
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  inject: ["isAuthenticated"],

  data() {
    return {
      visibleMore: false,
    };
  },
  methods: {},
  computed: {
    calcNotes() {
      return this.notes.length * 5;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length === 5) {
        this.notes = [];
      }
    },
  },
};
</script>