/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-09-25 12:15:20
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 12:15:21
 * @FilePath: \vue3-next-admin\src\config\Index.ts
 */
// 默认配置
import { netConfig, settingConfig, themeConfig } from './default'

import customConfig from './customConfig'

// 导出配置（自定义配置优先级高）
export default Object.assign({}, netConfig, settingConfig, themeConfig, customConfig)