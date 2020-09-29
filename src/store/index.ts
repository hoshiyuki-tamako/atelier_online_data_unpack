import charactersFilter from '@/store/characters/charactersFilter';
import enemiesFilter from '@/store/enemies/enemiesFilter';
import home from '@/store/home';
import itemsFilter from '@/store/items/itemsFilter';
import skillsFilter from '@/store/skills/skillsFilter';
import characterBuilder from '@/store/tools/characterBuilder';
import composeItemFilter from '@/store/tools/composeItemFilter';
import characterRankingFilter from '@/store/tools/ranking/characterRankingFilter';
import enemyRankingFilter from '@/store/tools/ranking/enemyRankingFilter';
import equipmentRankingFilter from '@/store/tools/ranking/equipmentRankingFilter';
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

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
    skillsFilter,
  },
  plugins: [new VuexPersistence().plugin],
});
