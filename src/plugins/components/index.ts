import { App } from 'vue';
// import AntComponents from './antDesignVue';
import ElementPlusComponents from './elementPlus';

const comps = Object.assign([], ElementPlusComponents);

export default {
  install: (app: App, options = {}) => {
    console.log('app: ', app);
    comps.forEach((comp: any) => {
      app.component(comp.name || comp.displayName, comp);
    });
  },
};
