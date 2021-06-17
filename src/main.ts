import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import globComp from '@/plugins/components';

import '@/styles/index.css';

import router from '@/router';

import App from './App.vue';

const app = createApp(App);

// 组件库
app.use(ElementPlus);

// 注册全局组件
app.use(globComp);

// 注册路由
app.use(router);
app.mount('#app');
