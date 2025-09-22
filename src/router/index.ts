// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue'; // Beispiel-View
import QueerBookshelf from '../pages/QueerBookshelf.vue';
import FanfictionBookshelf from '../pages/FanfictionBookshelf.vue';
import AutismBookshelf from '../pages/AutismBookshelf.vue';
import AuthorSpace from '../pages/AuthorSpace.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },
  {
    path: '/queer',
    name: 'Queer',
    component: QueerBookshelf,
  },
  {
    path: '/fanfiction',
    name: 'Fanfiction',
    component: FanfictionBookshelf,
  },
  {
    path: '/autismus',
    name: 'Autismus (er)leben',
    component: AutismBookshelf,
  },
  {
    path: '/authorspace',
    name: 'Autorenuebersicht',
    component: AuthorSpace,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
