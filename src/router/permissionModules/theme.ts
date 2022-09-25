/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-09-12 14:40:08
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 10:34:21
 * @FilePath: \vue3-next-admin\src\router\permissionModules\theme.ts
 */

import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const ThemeRouter: Array<RouteRecordRaw> = [
  {
    path: '/theme',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "theme" */ '@/view/theme/Index.vue'),
        name: 'Theme',
        meta: {
          title: 'theme',
          icon: '#iconhuanfu'
        }
      }
    ]
  }
]


export default ThemeRouter
