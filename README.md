# @fzf404/prettier-config

[![npm](https://img.shields.io/npm/v/@fzf404/prettier-config?color=f03e3e)](https://npmjs.com/package/@fzf404/prettier-config)
[![star](https://img.shields.io/github/stars/fzf404/prettier-config?color=1c7ed6)](https://github.com/fzf404/prettier-config)
[![license](https://img.shields.io/npm/l/@fzf404/prettier-config?color=37b24d)](https://github.com/fzf404/prettier-config/blob/main/LICENSE)
[![language](https://img.shields.io/badge/language-简体中文-f76707)](https://github.com/fzf404/prettier-config)

My personal Prettier config ( 我的 Prettier 配置 )

## Features ( 特性 )

- No semi ( 不使用分号 )
- Use single quotes ( 使用单引号 )
- Newline until 120 characters ( 换行限制 120 字符 )
- Ignore space around HTML tags ( 忽略 HTML 标签周围空格 )
- Single attribute per line with Vue ( Vue 每个属性占用单独行 )
- Ignore `pnpm-lock.yaml` file ( 忽略 `pnpm-lock.yaml` 文件 )

## Usage ( 使用 )

1. Install `prettier` and `@fzf404/prettier-config` ( 安装 `prettier` 和 `@fzf404/prettier-config` )

```bash
npm i -D prettier @fzf404/prettier-config
```

1. Add config to `package.json` or `.prettierrc.json` ( 添加配置到 `package.json` 或 `.prettierrc.json` )

```jsonc
// package.json
"prettier": "@fzf404/prettier-config"

// .prettierrc.json
"@fzf404/prettier-config"
```

3. Edit `package.json` scripts ( 编辑 `package.json` 脚本 )

```jsonc
// package.json
"scripts": {
  "format": "prettier --cache --write ."
}
```
