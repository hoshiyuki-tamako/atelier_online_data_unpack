export interface AbnormalState {
  m_GameObject: MGameObject;
  m_Enabled:    number;
  m_Script:     MGameObject;
  m_Name:       string;
  m_vList:      MVList[];
}

export interface MGameObject {
  m_FileID: number;
  m_PathID: number;
}

export interface MVList {
  id:               number;
  name:             string;
  turn:             number;
  effectlist:       number[];
  strongStatelist:  number[];
  weakStatelist:    number[];
  naturalheal:      number;
  icon:             string;
  telop:            string;
  skillLow:         number;
  skillHigh:        number;
  stateList:        number[];
  effectListJ:      any[];
  familyStateListJ: any[];
  stateListJ:       any[];
}
