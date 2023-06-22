<template>
  <header-component title="Аура" />
  <router-view></router-view>
  <footer-component />
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      dataPlaceList: [],
    };
  },
  provide() {
    return {
      sortName: "Сортировка",
      placeList: this.dataPlaceList,
    };
  },

  components: {},
  methods: {
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
