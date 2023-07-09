const { getPackageInfoSync } = require('local-pkg')

const isPrettier2 = getPackageInfoSync('prettier').version.startsWith('2')

/** @type {import('prettier').Config} */
module.exports = {
  semi: false, // default: true
  printWidth: 120, // default: 80
  singleQuote: true, // default: false
  htmlWhitespaceSensitivity: 'ignore', // default: 'css'
  plugins: isPrettier2 ? ['prettier-plugin-tailwindcss'] : [], // default: []
  overrides: [
    {
      files: '*.vue',
      options: {
        singleAttributePerLine: true, // default: false
      },
    },
    {
      files: 'pnpm-lock.yaml',
      options: {
        requirePragma: true, // default: false
      },
    },
  ],
}
