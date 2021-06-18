import type { RouteRecordRaw } from 'vue-router';

const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      hidden: true,
    },
    component: () => import('@/pages/admin/index.vue'),
  },
];

export default adminRoutes;
