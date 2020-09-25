# atelier online data unpack

[https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/](https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/)

## Notes

All exported files `images` `models` `export json/csv` are NOT license in MIT as those were not belongs to me

For developer, see `./development.md`

## Running The Script

### Required

- NodeJs >= 14

```bash
npm i
```

#### Development

```bash
npm run serve
```

#### Production Build

```bash
npm run build
```

### Content Update Check List

- copy JSON from AssetStudio to `./public/export/*` folder json files
- export Texture2D files to `./public/img/*`
- export updated models to `./public/models/*`
- run `npm run generate` to optimize/generate files needed for the page
