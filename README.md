# atelier online data unpack

[https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/](https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/)

## Notes

All exported files `images` `models` are NOT license in MIT as those were not belongs to me

For developer, see `./development.md`

## Running The Script

### Required

- NodeJs >= 14

```bash
npm i
```

#### Development

```bash
npm start
```

#### Production Build

```bash
npm run generate
npm run build
```

## Content Update Steps

1. export all Texture2D to `./source/Texture2D/*`
2. export all fbx models with folder to `./source/models/**/*`
3. export all fbx ascii to `./source/modelsMeta/*`
4. copy JSON from AssetStudio to `./public/export/*`
5. update other images/models if needed
6. run `npm run generate`
