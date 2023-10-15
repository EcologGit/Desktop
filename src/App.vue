<template>
  <header-component title="Аура" />
  <router-view></router-view>
  <footer-component />
</template>

<script>
import { ref } from "vue";
import { baseApi } from "./components/shared/api/base/BaseApi.js"
import { url } from '@/main'


let authenticated = ref(false);
let authenticatedToken = ref("");
export default {
  name: "App",

  data() {
    return {
      dataPlaceList: [],
      id: this.authenticate(),
    };
  },
  provide() {
    return {
      isAuthenticated: authenticated,
      tokenAuthenticated: authenticatedToken,
      sortName: "Сортировка",
      placeList: this.dataPlaceList,
      userId: this.id,
    };
  },

  components: {},
  methods: {
    getAuthenticated() {},
    authenticate() {
      baseApi.post(`${url}/users/api/browser_refresh/`).then(response => {
        this.id = response.data.id;
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
