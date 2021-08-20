import charactersFilter from '@/store/characters/charactersFilter';
import enemiesFilter from '@/store/enemies/enemiesFilter';
import home from '@/store/home';
import itemsFilter from '@/store/items/itemsFilter';
import adventBattleFilter from '@/store/others/adventBattleFilter';
import questsFilter from '@/store/quests/questsFilter';
import addonFilter from '@/store/skills/addonFilter';
import skillsFilter from '@/store/skills/skillsFilter';
import blazeArtLeveling from '@/store/tools/blazeArtLeveling';
import characterBuilder from '@/store/tools/characterBuilder';
import composeItemFilter from '@/store/tools/composeItemFilter';
import equipmentLeveling from '@/store/tools/equipmentLeveling';
import itemEnhanceQuality from '@/store/tools/itemEnhanceQuality';
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
    skillsFilter,
    addonFilter,
    characterRankingFilter,
    enemyRankingFilter,
    equipmentRankingFilter,
    characterBuilder,
    composeItemFilter,
    itemEnhanceQuality,
    questsFilter,
    adventBattleFilter,
    blazeArtLeveling,
    equipmentLeveling,
  },
  plugins: [new VuexPersistence().plugin],
});
