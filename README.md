# @fzf404/prettier-config

[![npm](https://img.shields.io/npm/v/@fzf404/prettier-config?color=orange)](https://npmjs.com/package/@fzf404/prettier-config)
[![star](https://img.shields.io/github/stars/fzf404/prettier-config?color=blue)](https://github.com/fzf404/prettier-config)
[![license](https://img.shields.io/npm/l/@fzf404/prettier-config?color=green)](https://github.com/fzf404/prettier-config/LICENSE)
[![language](https://img.shields.io/badge/language-简体中文-purple)](https://github.com/fzf404/prettier-config/blob/main/README.zh-CN.md)

My personal Prettier config

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
// package.json
"prettier": "@fzf404/prettier-config"

// .prettierrc.json
"@fzf404/prettier-config"
```
