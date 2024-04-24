# @fzf404/prettier-config

[![npm](https://img.shields.io/npm/v/@fzf404/prettier-config?style=flat&color=f03e3e)](https://npmjs.com/package/@fzf404/prettier-config)
[![star](https://img.shields.io/github/stars/fzf404/prettier-config?style=flat&color=1c7ed6)](https://github.com/fzf404/prettier-config)
[![license](https://img.shields.io/npm/l/@fzf404/prettier-config?style=flat&color=37b24d)](https://github.com/fzf404/prettier-config/blob/main/LICENSE)
[![language](https://img.shields.io/badge/language-简体中文-f76707)](https://github.com/fzf404/prettier-config)

My personal Prettier config ( 我的 Prettier 配置 )

## Configs ( 配置 )

- No semi ( 不使用分号 )
- Use single quotes ( 使用单引号 )
- Ignore space around HTML tags ( 忽略 HTML 标签周围空格 )
- Ignore `pnpm-lock.yaml` file ( 忽略 `pnpm-lock.yaml` 文件 )

## Install ( 安装 )

```bash
# npm
npm i -D @fzf404/prettier-config

# yarn
yarn i -D @fzf404/prettier-config

# pnpm
pnpm i -D @fzf404/prettier-config
```

## Usage ( 使用 )

Edit `package.json` ( 编辑 `package.json` )

```jsonc
{
  "scripts": {
    "format": "prettier --cache --write ."
  },
  "prettier": "@fzf404/prettier-config"
}
```
