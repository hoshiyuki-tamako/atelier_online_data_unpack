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

1. Export all Texture2D to `./source/Texture2D/*`
2. Export all fbx models with folder to `./source/models/**/*`
3. copy JSON from AssetStudio to `./public/export/*`
4. update other images/models if needed
5. run `npm run generate`
