import type { RouteRecordRaw } from 'vue-router';

const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    name: 'Admin',

    component: () => import('@/pages/admin/index.vue'),
  },
];

export default adminRoutes;
