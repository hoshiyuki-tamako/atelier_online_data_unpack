# atelier online data unpack

[https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/](https://hoshiyuki-tamako.github.io/atelier_online_data_unpack/)

## Notes

All files in `./docs/img` `./docs/models` `./docs/export` are NOT license in MIT as those were not belongs to me

### Below files were not auto generated

- `./docs/3d.html`
- `./docs/characterBuilder.html`
- `./docs/composeItem.html`
- `./docs/effect.html`

## Running The Script

### Required

- NodeJs >= 14

```bash
npm i
```

#### Development Build

```bash
npm start
```

#### Production Build

```bash
npm run build
```

### Content Update Check List

- copy JSON from AssetStudio to `./docs/export/*` folder json files
- export Texture2D files to `./docs/img/*`
- export updated models to `./docs/models/*`
