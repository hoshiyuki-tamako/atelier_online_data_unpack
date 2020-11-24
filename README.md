# atelier online data unpack

[https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/](https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/)

## Notes

All exported files `images` `models` are NOT license in MIT as those were not belongs to me

For developer see `./development.md`

## Running The Script

### Required

- NodeJs >= 14

```bash
npm i
```

### Development

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

### Production Build

Currently project were using github actions, does not required to manually build on commit

```bash
npm run build
```

## Content Update Steps

- Download latest `APK` and `assets`
- using `AssetStudio` >= 0.15 load folders that include both un-zipped APK, and assets
- use Il2CppDumper to dump DLL for Enums/others if needed

1. export MonoBehaviour Container `assets/assetbundles/master/**/*` to `./public/export/*`
2. export MonoBehaviour Container `assets/assetbundles/adv/*` to `./public/export/adv/*`
3. export TextAsset Name filter `SpawnList` to `./public/export/SpawnList/TextAsset/*`
4. export all Texture2D to `./source/Texture2D/*`
5. export all models fbx version 7.5 binary with folder to `./source/models/**/*`
6. export all models fbx version 7.5 ascii to `./source/modelsMeta/**/*`
7. update other images/models/Enums/lookup if any
8. delete `./public/models/roots/**/*`
9. run `npm run process`
