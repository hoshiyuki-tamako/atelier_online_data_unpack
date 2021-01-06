import { HuntInfo } from '@/models/HuntInfo';
import { plainArrayToClass } from 'class-transformer-for-array';
import msgpack from 'msgpack-lite';
import Vue from 'vue';

export class ApiManager {
  private async call(url: string) {
    return fetch(url);
  }

  public async comHuntSummary() {
    return this.errorHandling(async () => {
      const data = await this.call('aoserver/nat/api/com/hunt/Summary').then((p) => p.arrayBuffer());
      return plainArrayToClass(HuntInfo, msgpack.decode(new Uint8Array(data))[16][0], { isArray: true });
    });
  }

  private async errorHandling<T>(fn: () => Promise<T>) {
    try {
      return await fn();
    } catch (e) {
      console.error(e);
      Vue.prototype.$message.error(e.toString());
      throw e;
    }
  }
}

export const api = new ApiManager();
