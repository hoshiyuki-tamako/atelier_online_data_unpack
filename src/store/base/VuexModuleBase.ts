import { getField, updateField } from 'vuex-map-fields';
import { Mutation, VuexModule } from 'vuex-module-decorators';

export default abstract class VuexModuleBase extends VuexModule {
  public get getField() {
    return getField(this);
  }

  @Mutation
  public updateField(options: { path: string; value: unknown }) {
    return updateField(this, options);
  }
}
