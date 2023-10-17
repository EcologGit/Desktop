<template>
  <header-component title="Аура" />
  <router-view></router-view>
  <footer-component />
</template>

<script>
import { ref } from "vue";
import { baseApi } from "./components/shared/api/base/BaseApi.js"


let authenticated = ref(false);
let authenticatedToken = ref("");
let id = ref(null)
export default {
  name: "App",

  data() {
    return {
      dataPlaceList: [],
    };
  },
  provide() {
    return {
      isAuthenticated: authenticated,
      tokenAuthenticated: authenticatedToken,
      sortName: "Сортировка",
      placeList: this.dataPlaceList,
      userId: id,
    };
  },

  components: {},
  methods: {
    getAuthenticated() {},
    authenticate() {
      baseApi.post(`/users/api/browser_refresh/`).then(response => {
        id.value = response.data.id;
      })
    },
    countTaskOpen(id) {
      const index = this.notes.find((task) => task.id === id);
      index.wasTaskRead++;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style>
@import "@/css/style.css";
</style>
