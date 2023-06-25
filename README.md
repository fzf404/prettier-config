# @fzf404/prettier-config

My personal prettier config

[简体中文](README.zh-CN.md)

## Features

- No semi
- Use single quotes
- Newline until 120 characters
- Ignore space around HTML tags
- Single attribute per line with Vue
- Ingore format the `pnpm-lock.yaml` file

## Install

```bash
npm i -D prettier @fzf404/prettier-config
```

## Uasge

Delete your Prettier config and edit `package.json`

```jsonc
{
  // ...
  "prettier": "@fzf404/prettier-config"
}
```
