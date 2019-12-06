<template>
  <div>
    <h1>USERS</h1>
    <div v-bind:key="user.id" v-for="user in users">
      {{ user.name }}
      <router-link to="/user/:id">View Albums</router-link>
      <!-- <button @click="getAlbums">View albums</button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        (this.users = res.data), console.log(res.data);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped></style>
