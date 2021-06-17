import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import homeRoutes from './home';
import AdminRoutes from './admin';
import baseRoutes from './base';

const LayoutRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeLayout',
    component: () => import('@/layout/home/index.vue'),
    redirect: '/admin',
    children: homeRoutes,
  },
  ...AdminRoutes,
  ...baseRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes: LayoutRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
