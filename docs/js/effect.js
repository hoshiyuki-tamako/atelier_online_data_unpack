ELEMENT.locale(ELEMENT.lang.en);

new Vue({
  el: '#app',
  data: {
    // data
    item: null,
    enemy: null,
    chara: null,

    // processed data
    skills: [],
    items: [],
    enemies: [],
    characters: [],

    // lookup table
    skillItemLookup: {},
    skillEnemyLookup: {},
    skillCharacterLookup: {},

    // state
    tableLoading: true,

    page: 1,
    take: 200,

    // filter
    effectTableFilterId: null,
    effectTableFilterName: '',
  },
  methods: {
    getFilteredSkills() {
      return this.skills.filter(p =>
        (!this.effectTableFilterId || p.id === this.effectTableFilterId) &&
        (!this.effectTableFilterName || p.name.toLowerCase().includes(this.effectTableFilterName.toLowerCase()))
      );
    },
    getFilteredPaginationSkills() {
      return this.getFilteredSkills().slice((this.page - 1) * this.take, this.page * this.take);
    },
    getItemsBySkill(skill) {
      return this.skillItemLookup[skill.id];
    },
    getEnemiesBySkill(skill) {
      return this.skillEnemyLookup[skill.id];
    },
    getCharactersBySkill(skill) {
      return this.skillCharacterLookup[skill.id];
    },

    scrollTop() {
      location.hash = '#effect-table';
    },
    //
    async load() {
      const [skill, item, enemy, chara] = await Promise.all([
        fetch('export/skill.json').then(p => p.json()),
        fetch('export/item.json').then(p => p.json()),
        fetch('export/enemy.json').then(p => p.json()),
        fetch('export/chara.json').then(p => p.json()),
      ]);
      this.skill = skill;
      this.item = item;
      this.enemy = enemy;
      this.chara = chara;

      this.item.m_vList.sort((a, b) => a.CATEG - b.CATEG);
      this.items = this.item.m_vList;

      this.enemy.m_vList.sort((a, b) => a.eKind - b.eKind);
      this.enemies = Enumerable.from(enemy.m_vList).orderBy(p => p.eKind).thenBy(p => p.iCategory).toArray();

      this.chara.m_vList.sort((a, b) => a.CATEG - b.CATEG);
      this.characters = this.chara.m_vList;

      this.skillItemLookup = Enumerable.from(this.items)
      .select(p => 
        p.SPC
        .map(i => i.SKILL.map(j => j.DF))
        .flat()
        .map(i => [i, p])
      )
      .selectMany(p => p)
      .groupBy(p => p[0])
      .toObject(
        p => p.key(),
        p => p.select(i => i[1])
        .groupBy(i => i.DF)
        .select(p => p.first())
        .toArray()
      );

      this.skillEnemyLookup = Enumerable.from(this.enemies)
      .select(p => p.sParam.SKILL.map(i => i.DF).map(i => [i, p]))
      .selectMany(p => p)
      .groupBy(p => p[0])
      .toObject(
        p => p.key(),
        p => p.select(i => i[1])
        .groupBy(i => i.DF)
        .select(p => p.first())
        .toArray()
      );

      this.skillCharacterLookup = Enumerable.from(this.characters)
      .select(p => p.SKILL.map(i => i.DF).map(i => [i, p]))
      .selectMany(p => p)
      .groupBy(p => p[0])
      .toObject(
        p => p.key(),
        p => p.select(i => i[1])
        .groupBy(i => i.DF)
        .select(p => p.first())
        .toArray()
      );

      this.skills = this.skill.m_vList.filter(p => p.type === 2);

      this.tableLoading = false;
    },
  },
  mounted() {
    this.load();
  },
});
