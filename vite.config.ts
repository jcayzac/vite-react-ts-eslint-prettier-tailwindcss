import eslint from '@rollup/plugin-eslint'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { UserConfig } from 'vite'
import { join } from 'path'
import image from './src/plugins/image'
import source from './src/plugins/source'

export default <UserConfig>{
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [
    image(),
    source(),
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
