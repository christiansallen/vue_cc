<template>
  <div class="container">
    <h1>USERS</h1>
    <div v-bind:key="user.id" v-for="user in users" class="user-container">
      <p class="name">{{ user.name }}</p>
      <router-link :to="`/user/${user.id}`" class="album-link">
        View Albums
      </router-link>
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

<style scoped>
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  letter-spacing: 1.5px;
  font-size: 2.5rem;
  color: #fff;
}
.album-link {
  text-decoration: none;
  color: #3fa6ff;
}
.album-link:hover {
  color: #2d97f3;
}
.user-container {
  display: flex;
  align-items: center;
  border: 1px solid #2a2a2a;
  justify-content: space-between;
  padding: 0.8rem;
  margin: 0.5rem;
  width: 50%;
  border-radius: 5px;
}

.name {
  color: #aaa;
}
</style>
