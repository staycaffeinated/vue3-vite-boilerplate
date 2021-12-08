import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteFonts from 'vite-plugin-fonts'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, './src'),
    },
  },

  plugins: [
      vue(),

      // https://github.com/stafyniaksacha/vite-plugin-fonts#readme
      ViteFonts({
        google: {
          families: [ 'Open Sans', 'Montserrat', 'Fira Sans' ],
        }
      }),

      // https://github.com/intlify/vite-plugin-vue-i18n
      VueI18n({
          include: [ path.resolve(__dirname, './locales/**' )],
      }),
  ],

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "/@/styles/index.scss";`
      }
    }
  }

})
