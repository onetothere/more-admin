import type { RouteRecordRaw } from 'vue-router';

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/pages/error/404.vue'),
  },
];

export default baseRoutes;
