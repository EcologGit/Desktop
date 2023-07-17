<template>
  <header-component title="Аура" />
  <router-view></router-view>
  <footer-component />
</template>

<script>
import { ref } from "vue";

let authenticated = ref(false);
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
      sortName: "Сортировка",
      placeList: this.dataPlaceList,
    };
  },

  components: {},
  methods: {
    getAuthenticated() {},
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
