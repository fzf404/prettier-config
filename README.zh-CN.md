# @fzf404/prettier-config

[![npm](https://img.shields.io/npm/v/@fzf404/prettier-config?color=orange)](https://npmjs.com/package/@fzf404/prettier-config)
[![star](https://img.shields.io/github/stars/fzf404/prettier-config?color=blue)](https://github.com/fzf404/prettier-config)
[![license](https://img.shields.io/npm/l/@fzf404/prettier-config?color=green)](https://github.com/fzf404/prettier-config/LICENSE)
[![language](https://img.shields.io/badge/language-English-purple)](https://github.com/fzf404/prettier-config/blob/main/README.md)

我的 Prettier 配置

## 特性

- 不使用分号
- 换行限制 120 字符
- 使用单引号替代双引号
- Vue 文件属性占用单独行
- 忽略 HTML 标签周围的空格
- 忽略 `pnpm-lock.yaml` 文件

## 安装

```bash
npm i -D prettier @fzf404/prettier-config
```

## 使用

编辑 `package.json` 或 `.prettierrc.json`

```jsonc
// package.json
"prettier": "@fzf404/prettier-config"

// .prettierrc.json
"@fzf404/prettier-config"
```
