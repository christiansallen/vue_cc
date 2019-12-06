import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Users from "./components/Users.vue";
import Albums from "./components/Albums.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: Users },
    { path: "/user/:id", component: Albums }
  ],
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
