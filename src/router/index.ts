import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import baseRoutes from './base';

const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? mod : [mod];
  routeModuleList.push(...modList);
});
console.log('routeModuleList: ', routeModuleList);

export const LayoutRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeLayout',
    meta: {
      hidden: true,
    },
    component: () => import('@/layout/home/index.vue'),
    redirect: '/admin',
  },
  ...routeModuleList,
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
