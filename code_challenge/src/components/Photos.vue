<template>
  <div class="container">
    <h1>Photos</h1>
    <div class="photos-container">
      <div v-for="photo in userPhotos" v-bind:key="photo.id">
        <!-- vbind is used in place of interpolation -->
        <img v-bind:src="photo.thumbnailUrl" />
      </div>
    </div>
    <router-link :to="`/user/${this.id}`" class="btn-link">
      <button class="btn">
        Back
      </button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Photos",
  data() {
    return {
      id: Number(this.$route.params.id),
      albumId: Number(this.$route.params.albumId),
      photos: []
    };
  },
  computed: {
    userPhotos: function() {
      return this.photos.filter(photo => photo.albumId === this.albumId);
    }
  },
  methods: {},
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        this.photos = res.data;
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
h1 {
  letter-spacing: 1.5px;
  font-size: 2.5rem;
  color: #fff;
}
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
