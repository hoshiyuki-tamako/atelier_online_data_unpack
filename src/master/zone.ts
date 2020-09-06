export interface Zone {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  List:         List[];
}

export interface List {
  id:             number;
  name:           string;
  effectlist:     number[];
  effect:         Effect;
  strongZonelist: number[];
  weakZonelist:   number[];
}

export enum Effect {
  EffectParticleFXFilterAqua = "Effect/Particle/FX_FilterAqua",
  EffectParticleFXFilterEarth = "Effect/Particle/FX_FilterEarth",
  EffectParticleFXFilterFire = "Effect/Particle/FX_FilterFire",
  EffectParticleFXFilterWind = "Effect/Particle/FX_FilterWind",
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}
