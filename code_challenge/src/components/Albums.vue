<template>
  <div>
    <h1>Albums</h1>
    <div v-for="album in albums" v-bind:key="album.id">
      {{ album }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Albums",
  data() {
    return {
      id: 0,
      albums: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(res => {
        this.albums = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped></style>
