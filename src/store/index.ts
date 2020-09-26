import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import charactersFilter from './characters/charactersFilter';
import enemiesFilter from './enemies/enemiesFilter';
import home from './home';
import itemsFilter from './items/itemsFilter';
import characterBuilder from './tools/characterBuilder';
import composeItemFilter from './tools/composeItemFilter';
import characterRankingFilter from './tools/ranking/characterRankingFilter';
import enemyRankingFilter from './tools/ranking/enemyRankingFilter';
import equipmentRankingFilter from './tools/ranking/equipmentRankingFilter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    charactersFilter,
    enemiesFilter,
    itemsFilter,
    composeItemFilter,
    characterRankingFilter,
    enemyRankingFilter,
    equipmentRankingFilter,
    characterBuilder,
  },
  plugins: [new VuexPersistence().plugin]
});
