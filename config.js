/** @type {import('prettier').Config} */
module.exports = {
  semi: false, // default: true
  singleQuote: true, // default: false
  htmlWhitespaceSensitivity: 'ignore', // default: 'css'
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
