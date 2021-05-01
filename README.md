# atelier online data unpack

[https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/](https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/)

## Notes

All exported files `images` `models` `audios` are NOT license in MIT

For game related data developer see `./docs/development.md`

For game server API see `./docs/api.md`

### Darkmode

due to element-ui / element-theme-dark cannot be toggle easily, currently using conditional link element to load css when darkmode

### Naming

due to ad-blocker, some of the files has rename to fit the needs such as removing `adv` from wording

## Running The Script

### Development

#### Development Requirement

Suggest to have 16GB or more ram, a fast nvme ssd due to large amount of audio/assets files when using vue-cli

- NodeJs >= 14

```bash
npm i
```

```bash
npm start
```

#### Update Packages

Please find the packages in npm before running below commands

```bash
ncu -u
typesync
npm i
```

### Production

make sure to modify `vue.config.js` publicPath depends on which server to deploy. for docker modify as below

```js
module.exports = {
// ...
  publicPath: '/',
//...
}
```

### Production Build

Currently project were using github actions, does not required to manually build on commit

```bash
npm run build
```

#### Production Docker Deployment Requirement

- ubuntu server >= 20.04
- docker >= 3
- docker-compose >= 3

Currently project were using github pages, does not required to deploy

1. Modify `vue.config.js` publicPath as as above shown
2. modify `docker-compose.yml` file if needed
3. run below command at this project root directory

```bash
docker-compose up --build -d
```

## Content Update Steps

- Download latest `APK` and `assets`
- use `AssetStudio` >= 0.15 load folders that include both un-zipped APK, and assets
- (optional) use `mitmproxy` to extract API messagepack
- (optional) use `Il2CppDumper` to dump DLL for Enums/others

1. (optional) export type `MonoBehaviour` Container `assets/assetbundles/master/**/*` to `./source/jp/master/MonoBehaviour/*.json`
2. (optional) export type `MonoBehaviour` Container `assets/assetbundles/adv/*` to `./source/jp/adv/MonoBehaviour/*.json`
3. (optional) export type `TextAsset` Name filter `SpawnList` to `./source/jp/spawnList/TextAsset/*.txt`
4. (optional) export type `Texture2D` to `./source/Texture2D/*.png`
5. (optional) export models fbx version 7.5 binary with folder to `./source/models/**/*`
6. (optional) export models fbx version 7.5 ascii to `./source/modelsMeta/**/*`
7. (optional) export type `AudioClip` filter by `vo` to `./source/voice/AudioClip/*.wav` and delete `M11_Volcano.wav`
8. (optional) export type `AudioClip` filter by `music` to `./source/music/AudioClip/*.wav`
9. (optional) extract `Enum` from ILSpy if any to `./src/logic/Enums.ts`
10. (optional) update `./src/logic/Lookup.ts` if any updates on `Enum`
11. (optional) extract API result with url path as folder to `./source/jp/aoserver/**/*`
12. (optional) update other images/models if any
13. run command at root directory of this project `npm run process`

### For other region

server ids `jp` `tw` `en`

- make sure replace `{serverId}` to one of the server ids value

1. (optional) export type `MonoBehaviour` Container `assets/assetbundles/master/**/*` to `./source/{serverId}/master/MonoBehaviour/*.json`
2. (optional) export type `MonoBehaviour` Container `assets/assetbundles/adv/*` to `./source/{serverId}/adv/MonoBehaviour/*.json`
3. (optional) export type `TextAsset` Name filter `SpawnList` to `./source/{serverId}/spawnList/TextAsset/*.txt`
4. (optional) export type `Texture2D` to `./source/{serverId}/Texture2D/*.png`
5. (optional) export models fbx version 7.5 binary with folder to `./source/{serverId}/models/**/*`
6. (optional) export models fbx version 7.5 ascii to `./source/{serverId}/modelsMeta/**/*`
7. (optional) export type `AudioClip` filter by `vo` to `./source/{serverId}/voice/AudioClip/*.wav` and delete `M11_Volcano.wav`
8. (optional) export type `AudioClip` filter by `music` to `./source/{serverId}/music/AudioClip/*.wav`
9. (optional) extract `Enum` from ILSpy if any to `./src/logic/Enums.ts`
10. (optional) update `./src/logic/Lookup.ts` if any updates on `Enum`
11. (optional) extract API result with url path as folder to `./source/{serverId}/aoserver/**/*`
12. (optional) update other images/models if any
13. run command at root directory of this project `npm run process`
