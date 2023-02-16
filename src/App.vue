<template>
  <header-component title="Правильный путь" />
  <router-view></router-view>
  <footer-component />
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      dataPlaceList: this.fetchDataPlaceAPI(),
    };
  },
  provide() {
    return {
      sortName: "John23  Doe",
      placeList: this.dataPlaceList,
    };
  },
  components: {},
  methods: {
    countTaskOpen(id) {
      const index = this.notes.find((task) => task.id === id);
      index.wasTaskRead++;
    },
    fetchDataPlaceAPI() {
      let arr = [
        {
          id: 1,
          namePlace: "Парк 500-летия Октября",
          town: "Коломна",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, venenatis, elit enim feugiat natoque enim ullamcorper. Nulla condimentum malesuada eget enim amet, mattis turpis. Vel, purus consequat, tristique ut diam. Vulputate nam massa suspendisse scelerisque. Urna, vitae tellus et, odio varius sit risus vitae nunc. Dignissim sed felis nunc volutpat facilisi in non tellus. Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit volutpat eu nec mauris scelerisque. Senectus accumsan risus proin posuere morbi facilisis et.",
          imgUrl: "http://192.168.1.38:8080/img/nature.88f74de7.png",

          bus: 0.01,
          trash: 0.02,
          flowers: 0.003,
          rating: 1,
        },
        {
          id: 2,
          namePlace: "Парк 60-летия Октября",
          town: "Коломна",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, venenatis, elit enim feugiat natoque enim ullamcorper. Nulla condimentum malesuada eget enim amet, mattis turpis. Vel, purus consequat, tristique ut diam. Vulputate nam massa suspendisse scelerisque. Urna, vitae tellus et, odio varius sit risus vitae nunc. Dignissim sed felis nunc volutpat facilisi in non tellus. Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit volutpat eu nec mauris scelerisque. Senectus accumsan risus proin posuere morbi facilisis et.",
          imgUrl: "http://192.168.1.38:8080/img/nature.88f74de7.png",
          bus: 0.01,
          trash: 0.02,
          flowers: 0.003,
          rating: 2,
        },
      ];
      fetch(`url`).then((res) => {
        if (res.status === 200 || res.status === 201) {
          res.json().then((json) => console.log(json));
        } else {
          console.log(res.status);
          console.log(arr);
          return arr;
        }
      });
      return arr;
    },
  },
  computed: {},
  watch: {
    fetchDataPlaceAPI() {
      let arr = [
        {
          id: 1,
          namePlace: "Парк 500-летия Октября",
          town: "Коломна",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, venenatis, elit enim feugiat natoque enim ullamcorper. Nulla condimentum malesuada eget enim amet, mattis turpis. Vel, purus consequat, tristique ut diam. Vulputate nam massa suspendisse scelerisque. Urna, vitae tellus et, odio varius sit risus vitae nunc. Dignissim sed felis nunc volutpat facilisi in non tellus. Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit volutpat eu nec mauris scelerisque. Senectus accumsan risus proin posuere morbi facilisis et.",
          imgUrl: "http://192.168.1.38:8080/img/nature.88f74de7.png",

          bus: 0.01,
          trash: 0.02,
          flowers: 0.003,
          rating: 1,
        },
        {
          id: 2,
          namePlace: "Парк 60-летия Октября",
          town: "Коломна",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, venenatis, elit enim feugiat natoque enim ullamcorper. Nulla condimentum malesuada eget enim amet, mattis turpis. Vel, purus consequat, tristique ut diam. Vulputate nam massa suspendisse scelerisque. Urna, vitae tellus et, odio varius sit risus vitae nunc. Dignissim sed felis nunc volutpat facilisi in non tellus. Neque, ultrices at nibh risus auctor lectus nisi. Lacus hendrerit volutpat eu nec mauris scelerisque. Senectus accumsan risus proin posuere morbi facilisis et.",
          imgUrl: "http://192.168.1.38:8080/img/nature.88f74de7.png",
          bus: 0.01,
          trash: 0.02,
          flowers: 0.003,
          rating: 2,
        },
      ];
      return (this.dataPlaceList = arr);
    },
  },
};
</script>

<style>
@import "@/css/style.css";
</style>
