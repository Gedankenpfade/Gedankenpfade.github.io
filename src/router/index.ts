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
import ChildOfGlassBookshelf from '../pages/ChildOfGlassBookshelf.vue'
import EditBook from '../pages/EditBook.vue';

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
    path: '/child-of-glass',
    name: 'Child of Glass',
    component: ChildOfGlassBookshelf,
  },
  {
    path: '/:category/:title',
    name: 'Inhaltsverzeichnis',
    component: Book,
  }, 
  {
    path: '/:category/:title/:chapter',
    name: 'Kapitel',
    component: Chapter
  },
  {
    path: '/authorspace',
    name: 'Autorenuebersicht',
    component: AuthorSpace,
  },
  {
    path: '/authorspace/edit-:title',
    name: 'Buch bearbeiten',
    component: EditBook,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
