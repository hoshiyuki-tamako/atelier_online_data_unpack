# API

raw response body encode `Message Pack`

All example were parsed to object. for raw format use other tools to inspect

## com/hunt/Summary

response

```ts
// get response body index 16, first row
let data = parse(body[16][0] as unknown[]);

// for more info see ./src/models/HuntInfo.ts
data = [
  {
    "AREADF": 0,
    "HUNTID": 301, // ID of hunt
    "DTY": 5,
    "NAME": "【深遠の山道】料理材料の探索",
    "ICON": "none",
    "TM": 18000, // time in second
    "DEPWTH": { // cost to start hunt
      "DF": 2, // relationship to wealth.DF
      "CNT": 1200 // amount
    },
    "INSWTH": [ // instant return cost
      {
        "DF": 1, // relationship to wealth.DF
        "CNT": 600 // 1 WTH per CNT second, 18000 TM / 600 CNT = require 30 WTH
      },
      {
        "DF": 55,
        "CNT": 18000
      }
    ],
    "DESC": null,
    "MRK": {
      "SALE": 0,
      "EVE": 0
    },
    "JCND": [ // join condition
      {
        "CNDID": 1, // sort order
        "ESS": 1, // is this condition required
        "RATEBNS": 1000, // rate of bonus
        "TYPE": 4, // eConditionType
        "VALS": [ // see next section for more info
          50,
          3
        ],
        "ACVBNS": 0
      },
      {
        "CNDID": 2,
        "ESS": 0,
        "RATEBNS": 3000,
        "TYPE": 4,
        "VALS": [
          60,
          1
        ],
        "ACVBNS": 0
      },
      {
        "CNDID": 3,
        "ESS": 0,
        "RATEBNS": 3000,
        "TYPE": 3,
        "VALS": [
          5002,
          30
        ],
        "ACVBNS": 0
      },
      {
        "CNDID": 4,
        "ESS": 0,
        "RATEBNS": 3000,
        "TYPE": 2,
        "VALS": [
          4
        ],
        "ACVBNS": 0
      }
    ],
    "RWD": { // reward
      "TRS": [
        {
          "DF": 10950010, // item.DF
          "CNT": 1, // count
          "QTY": 80, // quality
          "TRT": 102107 // skill.id (強化効果)
        },
        {
          "DF": 10950010,
          "CNT": 1,
          "QTY": 80,
          "TRT": 102108
        },
        {
          "DF": 10950010,
          "CNT": 1,
          "QTY": 80,
          "TRT": 102109
        },
        {
          "DF": 10950010,
          "CNT": 1,
          "QTY": 80,
          "TRT": 102110
        },
        {
          "DF": 10950010,
          "CNT": 1,
          "QTY": 80,
          "TRT": 102111
        },
        {
          "DF": 40030089,
          "CNT": 1,
          "QTY": 60,
          "TRT": 0
        },
        {
          "DF": 50010002,
          "CNT": 1,
          "QTY": 80,
          "TRT": 0
        },
        {
          "DF": 50010003,
          "CNT": 1,
          "QTY": 80,
          "TRT": 0
        },
        {
          "DF": 55010002,
          "CNT": 1,
          "QTY": 80,
          "TRT": 0
        },
        {
          "DF": 55010003,
          "CNT": 1,
          "QTY": 80,
          "TRT": 0
        }
      ],
      "ITM": [
        {
          "DF": 10900001,
          "CNT": 1,
          "QTY": 80,
          "TRT": 100103
        },
        {
          "DF": 10900001,
          "CNT": 1,
          "QTY": 80,
          "TRT": 100104
        },
        {
          "DF": 10900001,
          "CNT": 1,
          "QTY": 70,
          "TRT": 100105
        },
        {
          "DF": 10130001,
          "CNT": 1,
          "QTY": 80,
          "TRT": 100103
        },
        {
          "DF": 10130001,
          "CNT": 1,
          "QTY": 80,
          "TRT": 100104
        },
        {
          "DF": 10130001,
          "CNT": 1,
          "QTY": 70,
          "TRT": 100105
        },
        {
          "DF": 10220006,
          "CNT": 1,
          "QTY": 80,
          "TRT": 100103
        },
        {
          "DF": 10220006,
          "CNT": 1,
          "QTY": 80,
          "TRT": 100104
        },
        {
          "DF": 10220006,
          "CNT": 1,
          "QTY": 70,
          "TRT": 100105
        }
      ],
      "EXP": 500, // EXP for each character
      "WTH": [ // reward WTH
        {
          "DF": 2, // relationship to wealth
          "CNT": 2400 // amount
        }
      ]
    },
    "STS": 0,
    "LEFTTM": 0,
    "CMPDT": null,
    "HFM": null,
    "HRT": [
      {
        "SCS": 1,
        "RATE": 0
      },
      {
        "SCS": 2,
        "RATE": 0
      },
      {
        "SCS": 3,
        "RATE": 0
      }
    ]
  }
];
```

### eConditionType.TotalLv

```ts
{
  "CNDID": 1,
  "ESS": 1,
  "RATEBNS": 1000,
  "TYPE": 1,
  "VALS": [
    320, // total level
  ],
  "ACVBNS": 0
}
```

### eConditionType.CharaCnt

```ts
{
  "CNDID": 1,
  "ESS": 1,
  "RATEBNS": 1000,
  "TYPE": 2,
  "VALS": [
    50, // total level
  ],
  "ACVBNS": 0
}
```

### eConditionType.TargetChara

```ts
{
  "CNDID": 1,
  "ESS": 1,
  "RATEBNS": 1000,
  "TYPE": 3,
  "VALS": [
    5002, // relationship to chara.DF
    30 // min required level
  ],
  "ACVBNS": 0
}
```

### eConditionType.MinLv

```ts
{
  "CNDID": 1,
  "ESS": 1,
  "RATEBNS": 1000,
  "TYPE": 5,
  "VALS": [
    60, // min level
    1 // character amount
  ],
  "ACVBNS": 0
}
```
