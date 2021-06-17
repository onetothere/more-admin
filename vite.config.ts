import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig((config: ConfigEnv): UserConfig => {
  const { command, mode } = config;
  console.log('config: ', config);
  console.log('mode: ', mode);
  console.log('command: ', command);

  const root = process.cwd();

  // const env = loadEnv(mode, root)
  // console.log('env: ', env);
  return {
    root,
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`;
            },
          },
          {
            libraryName: 'element-plus',
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`;
            },
            resolveComponent: (name) => {
              return `element-plus/lib/${name}`;
            },
          },
        ],
      }),
    ],
    // 1. 如果使用的是ant-design 系列的 需要配置这个
    // 2. 确保less安装在依赖 `yarn add less -D`
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types'),
      },
    },
  };
});
