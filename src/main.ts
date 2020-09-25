import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';
import 'reflect-metadata';

import ElementUI from 'element-ui';
import VTooltip from 'v-tooltip';
import Vue from 'vue';

import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store';
import VueScrollTo from 'vue-scrollto';
import * as GoTop from '@inotom/vue-go-top';

Vue.config.productionTip = false;

Vue.use(ElementUI, {
  i18n: (key: any, value: any) => i18n.t(key, value)
});
Vue.use(VTooltip);
Vue.use(VueScrollTo);
Vue.use(GoTop);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
