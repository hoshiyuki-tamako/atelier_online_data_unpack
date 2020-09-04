# atelier online data unpack

see `./result` for generated result of the data unpack info

- アイテム / 裝備 / 料理 => item.txt
- キャラクター => chara.txt
- skill / 效果 => skill.txt
- 異常状態 => effect.txt
- 敵 => enemy.txt
- 称号 => degree.txt
- クェスト => quest.txt

## Memo

### Blaze art

- LV 1 -> 100 EXP
- LV 2 -> 400 EXP
- LV 3 -> 1200 EXP
- LV 4 -> 3600 EXP
- LV 5 -> 0 EXP

### Other Memo

今他の不明 SKILL tags: SDA LDA QTH DDG SADD (status add?)

```txt
ステータスの公式: floor ((m - b)/r) * level + b
R = レベル值
M = R レベルのステータス最大值
B = ステータス初始值
level = アイテムのレベル

CATEG 16 = 料理
CATEG 13 = 爆彈?
```

## Running The Script

Require manually copy data from AssetStudio JSON preview to `./raw` folder

### Required

- NodeJs >= 14
- Files From AssetStudio
