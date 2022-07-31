/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-30 12:59:21
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-07-31 13:58:52
 * @FilePath: \vue3-next-admin\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  resolve: { // vue3 使用别名设置
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
  },
  plugins: [vue()]
}))
