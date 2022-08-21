/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-30 12:59:21
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-21 20:51:09
 * @FilePath: \vue3-next-admin\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// console.log(router);

import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'

createApp(App).use(router).mount('#app')
