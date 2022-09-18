/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-08-28 16:58:20
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-18 13:18:49
 * @FilePath: \vue3-next-admin\src\plugins\element.ts
 */

import {
  ElButton,
  ElSelect,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElPopover,
  ElMessage,
  ElForm,
  ElFormItem,
  ElLoading,
  ElInput,
  ElTooltip,
  ElDialog,
  ElScrollbar,
  ElMenu,
  ElMenuItem
} from 'element-plus'

/**
 *  系统的全局设置size，全部加载方便设置。
 *  如需按需加载:
 *  1.放开注释
 *  2.引入babel-plugin-component库
 *  3.放开babel.config 注释
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from '@/locales'
import { useStore } from '@/store'


export default function loadComponent(app: any) {
  app.use(ElementPlus, { size: useStore().state.app.size, i18n: i18n.global.t })
  // app.use(ElButton)
  // app.use(ElSelect)
  // app.use(ElBreadcrumb)
  // app.use(ElBreadcrumbItem)
  // app.use(ElIcon)
  // app.use(ElDropdown)
  // app.use(ElDropdownMenu)
  // app.use(ElDropdownItem)
  // app.use(ElPopover)
  // app.use(ElForm)
  // app.use(ElFormItem)
  // app.use(ElLoading)
  // app.use(ElInput)
  // app.use(ElTooltip)
  // app.use(ElDialog)
  // app.use(ElScrollbar)
  // app.use(ElMenu)
  // app.use(ElSubmenu)
  // app.use(ElMenuItem)
  // app.config.globalProperties.$message = ElMessage
}
