import type { RouteRecordRaw } from 'vue-router';

const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      hidden: true,
    },
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    meta: {
      hidden: true,
    },
    component: () => import('@/pages/error/404.vue'),
  },
];

export default baseRoutes;
