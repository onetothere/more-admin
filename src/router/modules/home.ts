import components from '@/plugins/components/elementPlus';
import type { RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/layout/public/index.vue');

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      layout: 'home',
      title: '首页',
      icon: 'el-icon-view',
    },
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/graph',
    name: 'Graph',
    meta: {
      title: '图表',
      icon: 'el-icon-tickets',
    },
    redirect: '/graph/line',
    component: Layout,
    children: [
      {
        path: '/graph/line',
        name: 'GraphLine',
        meta: {
          title: '折线图表',
        },
        component: () => import('@/pages/graph/line-graph/index.vue'),
        children: [
          {
            path: '/graph/line/column',
            name: 'GraphLine',
            meta: {
              title: '柱状图',
            },
            component: () => import('@/pages/graph/column-graph/index.vue'),
            children: [
              {
                path: '/graph/line/column/map',
                name: 'GraphLine',
                meta: {
                  title: '地图',
                },
                component: () => import('@/pages/graph/map-graph/index.vue'),
              },
            ],
          },
        ],
      },
      {
        path: '/graph/pipe',
        name: 'GraphPipe',
        meta: {
          title: '饼图表',
        },
        component: () => import('@/pages/graph/pipe-graph/index.vue'),
      },
    ],
  },

  {
    path: '/table',
    name: 'Table',
    meta: {
      title: '表格',
      icon: 'el-icon-mobile',
    },
    component: () => import('@/pages/table/index.vue'),
  },
  {
    path: '/canvas',
    name: 'Canvas',
    meta: {
      title: 'Canvas',
      icon: 'el-icon-scissors',
    },
    component: () => import('@/pages/canvas/index.vue'),
  },
  {
    path: '/movie',
    name: 'Movie',
    meta: {
      title: 'Movie',
      icon: 'el-icon-reading',
    },
    component: () => import('@/pages/movie/index.vue'),
  },
  {
    path: '/button',
    name: 'Button',
    meta: {
      title: '按钮',
      icon: 'el-icon-data-line',
    },
    component: () => import('@/pages/button/index.vue'),
  },
  {
    path: '/function',
    name: 'Function',
    meta: {
      title: '功能',
      icon: 'el-icon-data-line',
    },
    component: Layout,
    children: [
      {
        path: '/function/icon',
        name: 'Icon',
        meta: {
          title: '图标',
          icon: 'el-icon-data-line',
        },
        component: () => import('@/pages/function/icon/index.vue'),
      },
    ],
  },
];

export default homeRoutes;
