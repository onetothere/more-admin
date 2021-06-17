import type { RouteRecordRaw } from 'vue-router';

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      layout: 'home',
    },
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/graph',
    name: 'Graph',
    component: () => import('@/pages/graph/index.vue'),
  },

  {
    path: '/table',
    name: 'Table',
    component: () => import('@/pages/table/index.vue'),
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import('@/pages/canvas/index.vue'),
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('@/pages/movie/index.vue'),
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('@/pages/button/index.vue'),
  },
];

export default homeRoutes;
