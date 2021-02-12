import eslint from '@rollup/plugin-eslint'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { UserConfig } from 'vite'
import { join } from 'path'

const config: UserConfig = {
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [
    { ...eslint({ include: 'src/**/*.+(js|jsx|ts|tsx)' }), enforce: 'pre' },
    reactRefresh(),
  ],
  resolve: {
    alias: {
      '~': join(__dirname, 'src'),
      '~/public': join(__dirname, 'public'),
    },
  },
}

export default config
