import i18n from '@/i18n';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const toolsRotes: Array<RouteConfig> = [
  {
    path: '/tools/characterBuilder',
    name: 'ToolsCharacterBuilder',
    component: () => import(/* webpackChunkName: "ToolsCharacterBuilder" */ '@/views/tools/CharacterBuilder.vue'),
    meta: {
      title: 'キャラクタービルダー',
    },
  },
  {
    path: '/tools/composeItem',
    name: 'ToolsComposeItem',
    component: () => import(/* webpackChunkName: "ToolsComposeItem" */ '@/views/tools/ComposeItem.vue'),
    meta: {
      title: '調合アイテム',
    },
  },
  {
    path: '/tools/itemEnhanceQuality',
    name: 'ToolsItemEnhanceQuality',
    component: () => import(/* webpackChunkName: "ToolsItemEnhanceQuality" */ '@/views/tools/ItemEnhanceQuality.vue'),
    meta: {
      title: '材料強化',
    }
  },
  {
    path: '/tools/equipmentRanking',
    name: 'ToolsEquipmentRanking',
    component: () => import(/* webpackChunkName: "ToolsEquipmentRanking" */ '@/views/tools/EquipmentRanking.vue'),
    meta: {
      title: 'ランキング',
    },
  },
  {
    path: '/tools/characterRanking',
    name: 'ToolsCharacterRanking',
    component: () => import(/* webpackChunkName: "ToolsCharacterRanking" */ '@/views/tools/CharacterRanking.vue'),
    meta: {
      title: 'ランキング',
    },
  },
  {
    path: '/tools/enemyRanking',
    name: 'ToolsEnemyRanking',
    component: () => import(/* webpackChunkName: "ToolsEnemyRanking" */ '@/views/tools/EnemyRanking.vue'),
    meta: {
      title: 'ランキング',
    },
  },
];

const itemsRoutes: Array<RouteConfig> = [
  {
    path: '/items/',
    name: 'Items',
    component: () => import(/* webpackChunkName: "Items" */ '@/views/items/Items.vue'),
    meta: {
      title: 'アイテム',
    },
  },
  {
    path: '/items/item',
    name: 'ItemsItem',
    component: () => import(/* webpackChunkName: "ItemsItem" */ '@/views/items/Item.vue'),
    meta: {
      title: 'アイテム',
    },
  },
  {
    path: '/items/UnusedItems',
    name: 'ItemsUnusedItems',
    component: () => import(/* webpackChunkName: "ItemsUnusedItems" */ '@/views/items/UnusedItems.vue'),
    meta: {
      title: '未使用アイテム',
    },
  },
];

const charactersRoutes: Array<RouteConfig> = [
  {
    path: '/characters/',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "Characters" */ '@/views/characters/Characters.vue'),
    meta: {
      title: 'キャラクター',
    },
  },
  {
    path: '/characters/character',
    name: 'CharactersCharacter',
    component: () => import(/* webpackChunkName: "CharactersCharacter" */ '@/views/characters/Character.vue'),
    meta: {
      title: 'キャラクター',
    },
  },
  {
    path: '/characters/otherCharacters',
    name: 'CharactersOtherCharacters',
    component: () => import(/* webpackChunkName: "CharactersOtherCharacters" */ '@/views/characters/OtherCharacters.vue'),
    meta: {
      title: '他のキャラクター',
    },
  },
];

const enemiesRoutes: Array<RouteConfig> = [
  {
    path: '/enemies/',
    name: 'Enemies',
    component: () => import(/* webpackChunkName: "Enemies" */ '@/views/enemies/Enemies.vue'),
    meta: {
      title: '敵',
    },
  },
  {
    path: '/enemies/enemy',
    name: 'EnemiesEnemy',
    component: () => import(/* webpackChunkName: "EnemiesEnemy" */ '@/views/enemies/Enemy.vue'),
    meta: {
      title: '敵',
    },
  },
];

const skillsRoutes: Array<RouteConfig> = [
  {
    path: '/skills/',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "Skills" */ '@/views/skills/Skills.vue'),
    meta: {
      title: 'スキル',
    },
  },
  {
    path: '/skills/Effect',
    name: 'SkillsEffect',
    redirect: {
      name: 'Skills',
      query: {
        skillKind: '3',
      },
    },
  },
  {
    path: '/skills/addon',
    name: 'SkillsAddon',
    component: () => import(/* webpackChunkName: "SkillsAddon" */ '@/views/skills/Addon.vue'),
    meta: {
      title: '強化効果',
    },
  },
  {
    path: '/skills/abnormalEffect',
    name: 'SkillsAbnormalEffect',
    component: () => import(/* webpackChunkName: "SkillsAbnormalEffect" */ '@/views/skills/AbnormalEffect.vue'),
    meta: {
      title: '異常状態',
    },
  },
];

const areasRoutes: Array<RouteConfig> = [
  {
    path: '/areas/',
    name: 'Areas',
    component: () => import(/* webpackChunkName: "Areas" */ '@/views/areas/Areas.vue'),
    meta: {
      title: '区域',
    },
  },
  {
    path: '/areas/area',
    name: 'AreasArea',
    component: () => import(/* webpackChunkName: "AreasArea" */ '@/views/areas/Area.vue'),
    meta: {
      title: '区域',
    },
  },
  {
    path: '/areas/dungeons',
    name: 'AreasDungeons',
    component: () => import(/* webpackChunkName: "AreasDungeons" */ '@/views/areas/Dungeons.vue'),
    meta: {
      title: 'ダンジョン',
    },
  },
];

const infoRoutes: Array<RouteConfig> = [
  {
    path: '/info/zone',
    name: 'InfoZone',
    component: () => import(/* webpackChunkName: "InfoZone" */ '@/views/info/Zone.vue'),
    meta: {
      title: 'ゾーン',
    },
  },
  {
    path: '/info/wealth',
    name: 'InfoWealth',
    component: () => import(/* webpackChunkName: "InfoWealth" */ '@/views/info/Wealth.vue'),
    meta: {
      title: '大事なもの',
    },
  },
  {
    path: '/info/degree',
    name: 'InfoDegree',
    component: () => import(/* webpackChunkName: "InfoDegree" */ '@/views/info/Degree.vue'),
    meta: {
      title: '称号',
    },
  },
  {
    path: '/info/quest',
    name: 'InfoQuest',
    component: () => import(/* webpackChunkName: "InfoQuest" */ '@/views/info/Quest.vue'),
    meta: {
      title: 'クェスト',
    },
  },
  {
    path: '/info/dialog',
    name: 'InfoDialog',
    component: () => import(/* webpackChunkName: "InfoDialog" */ '@/views/info/Dialog.vue'),
    meta: {
      title: 'ダイアログ',
    },
  },
];

const othersRoutes: Array<RouteConfig> = [
  {
    path: '/others/calculate',
    name: 'OthersCalculate',
    component: () => import(/* webpackChunkName: "OthersCalculate" */ '@/views/others/Calculate.vue'),
    meta: {
      title: '計算/公式',
    },
  },
  {
    path: '/others/adventBattle',
    name: 'OthersAdventBattle',
    component: () => import(/* webpackChunkName: "OthersAdventBattle" */ '@/views/others/AdventBattle.vue'),
    meta: {
      title: '降臨バタル',
    },
  },
  {
    path: '/others/tips',
    name: 'OthersTips',
    component: () => import(/* webpackChunkName: "OthersTips" */ '@/views/others/Tips.vue'),
    meta: {
      title: 'Tips',
    },
  },
  {
    path: '/others/treasureText',
    name: 'OthersTreasureText',
    component: () => import(/* webpackChunkName: "OthersTreasureText" */ '@/views/others/TreasureText.vue'),
    meta: {
      title: '宝文字',
    },
  },
  {
    path: '/others/chat',
    name: 'OthersChat',
    component: () => import(/* webpackChunkName: "OthersChat" */ '@/views/others/Chat.vue'),
    meta: {
      title: 'チャット資料',
    },
  },
];

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    meta: {
      title: 'アトリエオンライン資料庫',
    },
  },
  ...toolsRotes,
  ...itemsRoutes,
  ...charactersRoutes,
  ...enemiesRoutes,
  ...skillsRoutes,
  ...infoRoutes,
  ...areasRoutes,
  ...othersRoutes,
];

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {
      x: 0,
      y: 0,
    };
  },
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta?.title ?? '';
  if (title) {
    document.title = i18n.t(title).toString();
  }
  next();
});

export default router;
