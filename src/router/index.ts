/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-30 13:10:13
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-21 18:35:31
 * @FilePath: \vue3-next-admin\src\router\index.ts
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/Index.vue'

const constantFiles = require.context('./constantModules', true, /\.ts$/)

let constantModules: Array<RouteRecordRaw> = []
constantFiles.keys().forEach((key) => {
	console.log(constantFiles(key))
	if (key === './index.ts') return
	constantModules = constantModules.concat(constantFiles(key).default)
})

export const constantRoutes: Array<RouteRecordRaw> = [
	{
		path: '/redirect',
		component: Layout,
		meta: { hidden: true },
		children: [
			{
				path: '/redirect/:path(.*)',
				component: () => import('@/view/redirect/Index.vue')
			}
		]
	},
	...constantModules
]


const router = createRouter({
	history: createWebHashHistory(),
	routes:constantRoutes
})

export function resetRouter() {
	const newRouter = router;
	(router as any).matcher = (newRouter as any).matcher // reset router
}


export default router