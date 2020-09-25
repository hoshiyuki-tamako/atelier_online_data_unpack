import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
export default class extends VuexModule {
  public eKind = 0;

  public sort = 1;

  @Mutation
  public setEKind(eKind: number) {
    this.eKind = eKind;
  }

  @Mutation
  public setSort(sort: number) {
    this.sort = sort;
  }
}
