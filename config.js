/** @type {import('prettier').Config} */
export default {
  semi: false, // default: true
  singleQuote: true, // default: false
  htmlWhitespaceSensitivity: 'ignore', // default: 'css'
  overrides: [
    {
      files: 'pnpm-lock.yaml',
      options: {
        requirePragma: true, // default: false
      },
    },
  ],
  plugins: [
    'prettier-plugin-css-order',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^\\w',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/',
    '',
    '^@/',
    '',
    '^[./]',
  ],
}
