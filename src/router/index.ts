// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue'; // Beispiel-View
import QueerBookshelf from '../pages/QueerBookshelf.vue';
import FanfictionBookshelf from '../pages/FanfictionBookshelf.vue';
import AutismBookshelf from '../pages/AutismBookshelf.vue';
import AuthorSpace from '../pages/AuthorSpace.vue';
import Book from '../pages/Book.vue';
import Chapter from '../pages/Chapter.vue'
import RandomBookshelf from '../pages/RandomBookshelf.vue';

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
    path: '/andere',
    name: 'Andere Werke',
    component: RandomBookshelf,
  },
  {
    path: '/:title',
    name: 'Inhaltsverzeichnis',
    component: Book,
  }, 
  {
    path: '/:title/:chapter',
    name: 'Kapitel',
    component: Chapter
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
