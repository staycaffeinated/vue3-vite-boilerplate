import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteFonts from 'vite-plugin-fonts' 

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
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


  ]
})
