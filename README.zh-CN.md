# @fzf404/prettier-config

[![npm](https://img.shields.io/npm/v/@fzf404/prettier-config)](https://npmjs.com/package/@fzf404/prettier-config)
[![npm](https://img.shields.io/npm/l/@fzf404/prettier-config)](https://npmjs.com/package/@fzf404/prettier-config)
[![npm](https://img.shields.io/bundlephobia/min/@fzf404/prettier-config)](https://npmjs.com/package/@fzf404/prettier-config)
[![npm](https://img.shields.io/npm/dm/@fzf404/prettier-config)](https://npmjs.com/package/@fzf404/prettier-config)

我的 Prettier 配置 -> [English](README.md)

## 特性

- 不使用分号
- 换行限制 120 字符
- 使用单引号替代双引号
- 缩进使用 Tab 替代空格
- Vue 文件属性占用单独行
- 忽略 HTML 标签周围的空格
- 忽略 `pnpm-lock.yaml` 文件

## 安装

```bash
npm i -D prettier @fzf404/prettier-config
```

## 使用

删除你的 Prettier 配置，然后编辑 `package.json`

```jsonc
{
  // ...
  "prettier": "@fzf404/prettier-config"
}
```
