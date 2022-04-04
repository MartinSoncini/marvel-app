import Vue from "vue";
import VueRouter from "vue-router";
import CharactersView from "../views/CharactersView.vue";
import ComicsView from "../views/ComicsView.vue";
import SeriesView from "../views/SeriesView.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/characters",
    name: "Characters",
    component: CharactersView,
  },
  {
    path: "/comics",
    name: "Comics",
    component: ComicsView,
  },
  {
    path: "/series",
    name: "Series",
    component: SeriesView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
