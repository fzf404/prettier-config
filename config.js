/** @type {import('prettier').Config} */
export default {
  semi: false, // default: true
  singleQuote: true, // default: false
  trailingComma: 'all', // default: 'es5'
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
  plugins: ['prettier-plugin-css-order', 'prettier-plugin-tailwindcss'], // default: []
}
