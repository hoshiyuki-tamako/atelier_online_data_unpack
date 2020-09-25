import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
export default class extends VuexModule {
  public showSideBar = true;

  @Mutation
  public setShowSideBar(showSideBar: boolean) {
    this.showSideBar = showSideBar;
  }
}
