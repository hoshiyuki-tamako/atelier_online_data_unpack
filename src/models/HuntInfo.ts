import { Type } from 'class-transformer';
import { ArrayMember } from 'class-transformer-for-array';

import { eConditionType } from '../logic/Enums';

export class FormationInfo {
  @ArrayMember(0)
  public NO = 0;

  @ArrayMember(1)
  public DF = 0;

  @ArrayMember(2)
  public IA = 0;
}

export class HuntRate {
  @ArrayMember(0)
  public SCS = 0;

  @ArrayMember(1)
  public RATE = 0;
}

export class HuntForm {
  @ArrayMember(0)
  public FID = 0;

  @ArrayMember(1, { isArray: true })
  @Type(() => FormationInfo)
  public FRM: FormationInfo[] = [];
}

export class JoinCondition {
  @ArrayMember(0)
  public CNDID = 0;
  @ArrayMember(1)
  public ESS = 0;
  @ArrayMember(2)
  public RATEBNS = 0;
  @ArrayMember(3)
  public TYPE = eConditionType.None;
  @ArrayMember(4)
  public VALS: number[] = [];
  @ArrayMember(5)
  public ACVBNS = 0;
}

export class PresentItemInfo {
  @ArrayMember(0)
  public DF = 0;
  @ArrayMember(1)
  public CNT = 0;
  @ArrayMember(2)
  public QTY = 0;
  @ArrayMember(3)
  public TRT = 0;
}

export class HuntReward {
  @ArrayMember(0, { isArray: true })
  @Type(() => PresentItemInfo)
  public TRS: PresentItemInfo[] = [];

  @ArrayMember(1, { isArray: true })
  @Type(() => PresentItemInfo)
  public ITM: PresentItemInfo[] = [];

  @ArrayMember(2)
  public EXP = 0;

  @ArrayMember(3, { isArray: true })
  @Type(() => DfCntInfo)
  public WTH: DfCntInfo[] = [];
}

export class EventInfo {
  @ArrayMember(0)
  public SALE = 0;
  @ArrayMember(1)
  public EVE = 0;
}

export class DfCntInfo {
  @ArrayMember(0)
  public DF = 0;
  @ArrayMember(1)
  public CNT = 0;
}

export class HuntInfo {
  @ArrayMember(0)
  public AREADF = 0;

  @ArrayMember(1)
  public HUNTID = 0;

  @ArrayMember(2)
  public DTY = 0;

  @ArrayMember(3)
  public NAME = '';

  @ArrayMember(4)
  public ICON = '';

  @ArrayMember(5)
  public TM = 0; // time in second

  @ArrayMember(6)
  @Type(() => DfCntInfo)
  public DEPWTH: DfCntInfo | null = null;

  @ArrayMember(7, { isArray: true })
  @Type(() => DfCntInfo)
  public INSWTH: DfCntInfo[] = [];

  @ArrayMember(8)
  public DESC: string | null = null;

  @ArrayMember(9)
  @Type(() => EventInfo)
  public MRK: EventInfo | null = null;

  @ArrayMember(10, { isArray: true })
  @Type(() => JoinCondition)
  public JCND: JoinCondition[] = [];

  @ArrayMember(11)
  @Type(() => HuntReward)
  public RWD: HuntReward | null = null;

  @ArrayMember(12)
  public STS = 0;

  @ArrayMember(13)
  public LEFTTM = 0;

  @ArrayMember(14)
  public CMPDT: string | null = null;

  @ArrayMember(15)
  @Type(() => HuntForm)
  public HFM: HuntForm | null = null;

  @ArrayMember(16, { isArray: true })
  @Type(() => HuntRate)
  public HRT: HuntRate[] = [];
}
