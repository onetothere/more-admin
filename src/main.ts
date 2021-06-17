import { createApp } from 'vue';
import globComp from '@/plugins/components';
// 组件库

import '@/styles/index.css';

// axios
import axios from '@/plugins/axios';

console.log('axios: ', axios);

import router from '@/router';

import App from './App.vue';

const app = createApp(App);

// 注册全局组件
app.use(globComp);

// 注册路由
app.use(router);
app.mount('#app');
