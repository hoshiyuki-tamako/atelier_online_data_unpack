import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';
import 'reflect-metadata';
import 'vue-select/dist/vue-select.css';

import * as GoTop from '@inotom/vue-go-top';
import ElementUI from 'element-ui';
import VTooltip from 'v-tooltip';
import Vue from 'vue';
import { ModelFbx } from 'vue-3d-model';
import VueScrollTo from 'vue-scrollto';
import vSelect from 'vue-select';

import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  i18n: (key: any, value: any) => i18n.t(key, value)
});
Vue.use(VTooltip);
Vue.use(VueScrollTo);
Vue.use(GoTop);

Vue.component('v-select', vSelect);
Vue.component('model-fbx', ModelFbx);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
