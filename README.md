# @fzf404/prettier-config

[![npm](https://img.shields.io/npm/v/@fzf404/prettier-config)](https://npmjs.com/package/@fzf404/prettier-config)
[![npm](https://img.shields.io/npm/l/@fzf404/prettier-config)](https://npmjs.com/package/@fzf404/prettier-config)
[![npm](https://img.shields.io/bundlephobia/min/@fzf404/prettier-config)](https://npmjs.com/package/@fzf404/prettier-config)
[![npm](https://img.shields.io/npm/dm/@fzf404/prettier-config)](https://npmjs.com/package/@fzf404/prettier-config)

My personal Prettier config -> [简体中文](README.zh-CN.md)

## Features

- No semi
- Use single quotes
- Replace space with tab
- Newline until 120 characters
- Ignore space around HTML tags
- Single attribute per line with Vue
- Ingore format the `pnpm-lock.yaml` file

## Install

```bash
npm i -D prettier @fzf404/prettier-config
```

## Usage

Edit `package.json` or `.prettierrc.json`

```jsonc
{
	// ...
	"prettier": "@fzf404/prettier-config"
}
```

```json
"@fzf404/prettier-config"
```
