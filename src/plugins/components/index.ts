import { App } from 'vue';
// import AntComponents from './antDesignVue';
// import ElementPlusComponents from './elementPlus';

const comps = Object.assign([]);

export default {
  install: (app: App, options = {}) => {
    comps.forEach((comp: any) => {
      app.component(comp.name || comp.displayName, comp);
    });
  },
};
