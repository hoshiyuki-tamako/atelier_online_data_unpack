import { HuntInfo } from '@/models/HuntInfo';
import msgpack from 'msgpack-lite';

export class ApiManager {
  public async comHuntSummary() {
    const data = await fetch('aoserver/nat/api/com/hunt/Summary').then((p) => p.arrayBuffer());
    const raw = msgpack.decode(new Uint8Array(data))?.[16]?.[0] || [];
    return raw.map(HuntInfo.fromMessagePack);
  }
}

export const api = new ApiManager();
