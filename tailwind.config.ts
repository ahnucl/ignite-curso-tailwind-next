import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
    gridTemplateColumns: {
      app: 'minmax(15rem, 20rem) 1fr',
    },
  },
  plugins: [],
}
export default config
