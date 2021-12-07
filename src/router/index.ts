import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "no-sidebar" },
    component: () => import('/@/pages/Index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/@/pages/About.vue'),
  }
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

