import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Users from "./components/Users.vue";
import Albums from "./components/Albums.vue";
import Photos from "./components/Photos.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: Users },
    { path: "/user/:id", component: Albums },
    { path: "/user/:id/photos/:albumId", name: "photos", component: Photos }
  ],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
