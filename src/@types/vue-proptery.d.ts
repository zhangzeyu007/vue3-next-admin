/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-09-25 13:35:25
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 13:35:28
 * @FilePath: \vue3-next-admin\src\@types\vue-proptery.d.ts
 */

import { ElMessage } from 'element-plus'
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $message: ElMessage
    }
  }

  declare module 'vue-router' {
    interface RouteMeta {
      roles?: string[]
    }
}
