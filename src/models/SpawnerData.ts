import { eSpawnerKind } from '@/logic/Enums';
import { Transform } from 'class-transformer';
import { ArrayMember } from 'class-transformer-for-array';

export class SpawnerData {
  @ArrayMember(0)
  @Transform((value) => +value)
  public DF = 0;

  @ArrayMember(1)
  @Transform((value) => +value)
  public spawnerKind = eSpawnerKind.Ignore;

  @ArrayMember(9)
  @Transform((value) => value?.replace(/\<br\\?>|\/\d(\/\d)?$/gi, '\r\n') ?? '')
  public text = '';
}
