import { eConditionType } from '../logic/Enums';

export class FormationInfo {
  public static fromMessagePack(msg: unknown[] | null) {
    if (msg == null) {
      return null;
    }

    const o = new FormationInfo();
    o.NO = +msg[0];
    o.DF = +msg[1];
    o.IA = +msg[2];
    return o;
  }
  public NO = 0;
  public DF = 0;
  public IA = 0;
}

export class HuntRate
{
  public static fromMessagePack(msg: unknown[] | null) {
    if (msg == null) {
      return null;
    }

    const o = new HuntRate();
    o.SCS = +msg[0];
    o.RATE = +msg[1];
    return o;
  }

  public SCS = 0;
  public RATE = 0;
}

export class HuntForm {
  public static fromMessagePack(msg: unknown[] | null) {
    if (msg == null) {
      return null;
    }

    const o = new HuntForm();
    o.FID = +msg[0];
    o.FRM = (msg[1] as unknown[][]).map(FormationInfo.fromMessagePack);
    return o;
  }

  public FID = 0;
  public FRM = [] as FormationInfo[];
}

export class JoinCondition {
  public static fromMessagePack(msg: unknown[] | null) {
    if (msg == null) {
      return null;
    }

    const o = new JoinCondition();
    o.CNDID = +msg[0];
    o.ESS = +msg[1];
    o.RATEBNS = +msg[2];
    o.TYPE = +msg[3];
    o.VALS = msg[4] as number[];
    o.ACVBNS = +msg[5];
    return o;
  }

  public CNDID = 0;
  public ESS = 0;
  public RATEBNS = 0;
  public TYPE = eConditionType.None;
  public VALS = [] as number[];
  public ACVBNS = 0;
}

export class PresentItemInfo {
  public static fromMessagePack(msg: unknown[] | null) {
    if (msg == null) {
      return null;
    }

    const o = new PresentItemInfo();
    o.DF = +msg[0];
    o.CNT = +msg[1];
    o.QTY = +msg[2];
    o.TRT = +msg[3];
    return o;
  }

  public DF = 0;
  public CNT = 0;
  public QTY = 0;
  public TRT = 0;
}

export class HuntReward {
  public static fromMessagePack(msg: unknown[] | null) {
    if (msg == null) {
      return null;
    }

    const o = new HuntReward();
    o.TRS = (msg[0] as unknown[][]).map(PresentItemInfo.fromMessagePack);
    o.ITM = (msg[1] as unknown[][]).map(PresentItemInfo.fromMessagePack);
    o.EXP = +msg[2];
    o.WTH = (msg[3] as unknown[][]).map(DfCntInfo.fromMessagePack);
    return o;
  }

  public TRS = [] as PresentItemInfo[];
  public ITM = [] as PresentItemInfo[];
  public EXP = 0;
  public WTH = [] as DfCntInfo[];
}


export class EventInfo {
  public static fromMessagePack(msg: unknown[] | null) {
    if (msg == null) {
      return null;
    }

    const o = new EventInfo();
    o.SALE = +msg[0];
    o.EVE = +msg[1];
    return o;
  }

  public SALE = 0;
  public EVE = 0;
}

export class DfCntInfo {
  public static fromMessagePack(msg: unknown[] | null) {
    if (msg == null) {
      return null;
    }

    const o = new DfCntInfo();
    o.DF = +msg[0];
    o.CNT = +msg[1];
    return o;
  }

  public DF = 0;

  public CNT = 0;
}

export class HuntInfo {
  public static fromMessagePack(msg: unknown[] | null) {
    if (msg == null) {
      return null;
    }

    const o = new HuntInfo();
    o.AREADF = +msg[0];
    o.HUNTID = +msg[1];
    o.DTY = +msg[2];
    o.NAME = msg[3] as string;
    o.ICON = msg[4] as string;
    o.TM = +msg[5];
    o.DEPWTH = DfCntInfo.fromMessagePack(msg[6] as unknown[]);
    o.INSWTH = (msg[7] as unknown[][]).map(DfCntInfo.fromMessagePack);
    o.DESC = msg[8] as string | null;
    o.MRK = EventInfo.fromMessagePack(msg[9] as unknown[]);
    o.JCND = (msg[10] as unknown[][]).map(JoinCondition.fromMessagePack);
    o.RWD = HuntReward.fromMessagePack(msg[11] as unknown[]);
    o.STS = +msg[12];
    o.LEFTTM = +msg[13];
    o.CMPDT = msg[14] as string | null;
    o.HFM = HuntForm.fromMessagePack(msg[15] as unknown[]);
    o.HRT = (msg[16] as unknown[][]).map(HuntRate.fromMessagePack);
    return o;
  }

  public AREADF = 0;
  public HUNTID = 0;
  public DTY = 0;
  public NAME = '';
  public ICON = '';
  public TM = 0; // time in second
  public DEPWTH: DfCntInfo | null = null;
  public INSWTH = [] as DfCntInfo[];
  public DESC: string | null = null;
  public MRK: EventInfo | null = null;
  public JCND = [] as JoinCondition[];
  public RWD: HuntReward | null = null;
  public STS = 0;
  public LEFTTM = 0;
  public CMPDT: string | null = null;
  public HFM: HuntForm | null = null;
  public HRT = [] as HuntRate[];
}
