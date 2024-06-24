// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Weather from "../views/Weather.vue";

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/assignment/1",
    name: "Assignment1",
    beforeEnter(to, from, next) {
      window.open("https://kevin-project-cv.netlify.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/2",
    name: "Assignment2",
    beforeEnter(to, from, next) {
      window.open("https://kevin-prakpbk-tgs2.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/3",
    name: "Assignment3",
    beforeEnter(to, from, next) {
      window.open("https://kevin-prak3.netlify.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/4",
    name: "Assignment4",
    beforeEnter(to, from, next) {
      window.open("https://kevinalfariza-prakpbk-tgs4.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/5",
    name: "Assignment5",
    beforeEnter(to, from, next) {
      window.open("https://kevinalfariza-prakpbk-tgs5.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/6",
    name: "Assignment6",
    beforeEnter(to, from, next) {
      window.open("https://kevinalfariza-223510572-prak-pbk-tgs6.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
  {
    path: "/assignment/7",
    name: "Assignment7",
    beforeEnter(to, from, next) {
      window.open("https://kevinalfariza-prakpbk-tgs7.vercel.app/");
      next({ name: "Weather" }); // Kembali ke halaman Weather
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
