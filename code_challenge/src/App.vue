<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <!-- <Users v-bind:users="users" /> -->
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/layout/Header.vue";
export default {
  name: "app",
  components: { Header }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background-color: #121212;
}

.btn {
  display: inline-block;
  border: none;
  background: white;
  color: black;
  padding: 7px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 1rem 0rem;
}

.btn-link {
  text-decoration: none;
  color: #aaa;
}
</style>
