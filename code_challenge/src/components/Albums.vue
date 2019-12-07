<template>
  <div class="container">
    <h1>ALBUMS</h1>
    <div
      v-for="album in userAlbums"
      v-bind:key="album.id"
      class="album-container"
    >
      <p class="album-title">{{ album.title }}</p>
      <router-link
        :to="`/user/${album.userId}/photos/${album.id}`"
        class="photos-link"
      >
        View Photos
      </router-link>
    </div>
    <router-link to="/" class="btn-link">
      <button class="btn">
        Back
      </button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Albums",
  data() {
    return {
      //This id started as a string. Took me an hour to figure this out...
      id: Number(this.$route.params.id),
      albums: []
    };
  },
  computed: {
    userAlbums: function() {
      return this.albums.filter(album => album.userId === this.id);
    }
  },
  methods: {
    back() {
      this.$props.history.push("/");
    }
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(res => {
        this.albums = res.data;
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
.album-container {
  display: flex;
  align-items: center;
  border: 1px solid #2a2a2a;
  justify-content: space-between;
  padding: 0.8rem;
  margin: 0.5rem;
  width: 50%;
  border-radius: 5px;
}
.album-title {
  color: #aaa;
}
.photos-link {
  text-decoration: none;
  color: #3fa6ff;
}
.photos-link:hover {
  color: #2d97f3;
}
</style>
