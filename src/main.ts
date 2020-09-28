import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';
import 'reflect-metadata';

import * as GoTop from '@inotom/vue-go-top';
import ElementUi from 'element-ui';
import VTooltip from 'v-tooltip';
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store';


Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';

Vue.use(ElementUi, {
  i18n: (key: string, value: string) => i18n.t(key, value),
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
