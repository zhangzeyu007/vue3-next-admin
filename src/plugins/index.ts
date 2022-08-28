/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-08-28 15:43:31
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-28 15:46:41
 * @FilePath: \vue3-next-admin\src\plugins\index.ts
 */

import { createApp } from 'vue'



export function loadAllPlugins(app: ReturnType<typeof createApp>) {
	const files = require.context('.', true, /\.ts$/)
	
	files.keys().forEach(key => {
		if (typeof files(key).default === 'function') {
			if (key !== './index.ts') files(key).default(app)
		}
	})
}