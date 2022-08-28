/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-30 12:59:21
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-28 15:50:07
 * @FilePath: \vue3-next-admin\src\main.ts
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadAllPlugins } from './plugins'

import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'

const app = createApp(App)

loadAllPlugins(app)

app.use(router).mount('#app')
