# atelier online data unpack

[https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/](https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/)

## Notes

All exported files `images` `models` `audios` are NOT license in MIT

For developer see `./development.md`

### Darkmode

due to element-ui / element-theme-dark cannot be toggle easily, currently using conditional link element to load css when darkmode

### Naming

due to ad-blocker, some of the files has rename to fit the needs such as removing `adv` from wording

## Running The Script

### Development

#### Development Requirement

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
- using `AssetStudio` >= 0.15 load folders that include both un-zipped APK, and assets
- (optional) use Il2CppDumper to dump DLL for Enums/others

1. export type `MonoBehaviour` Container `assets/assetbundles/master/**/*` to `./public/export/*`
2. export type `MonoBehaviour` Container `assets/assetbundles/adv/*` to `./public/export/adv/*`
3. export type `TextAsset` Name filter `SpawnList` to `./public/export/SpawnList/TextAsset/*`
4. export type `Texture2D` to `./source/Texture2D/*`
5. export models fbx version 7.5 binary with folder to `./source/models/**/*`
6. export models fbx version 7.5 ascii to `./source/modelsMeta/**/*`
7. export type `AudioClip` filter by `adv` to `./source/voice/AudioClip/*`
8. export type `AudioClip` filter by `music` to `./source/music/AudioClip/*`
9. (optional) update other images/models/Enums/lookup if any
10. delete `./public/models/roots/**/*` `./public/models/dungeons/**/*` `./public/models/fieldDungeons/**/*` `./public/models/gimmicks/**/*` `./public/models/throwables/**/*`
11. run command at root directory of this project `npm run process`
