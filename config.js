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
  plugins: ['prettier-plugin-css-order', 'prettier-plugin-tailwindcss'], // default: []
}
