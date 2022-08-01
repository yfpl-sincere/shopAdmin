import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      eslintPlugin({
          // 配置项
          cache:false, // 禁用 eslint 缓存
          fix:true,
      }),
      vueJsx({
          // options are passed on to @vue/babel-plugin-jsx
      })
  ],
    resolve: {
      alias: {
          "@": path.join(__dirname,'src'), // 别名 ： 绝对路径
      }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: '$injectedColor: orange;'
                additionalData:'@import "@/styles/variables.scss";'
            },
            styl: {
                additionalData: `$injectedColor ?= orange`
            }
        }
    }

})
