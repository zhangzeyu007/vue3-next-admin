/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-30 13:10:13
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-12 14:41:31
 * @FilePath: \vue3-next-admin\src\router\index.ts
 */


import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const constantFiles = require.context('./constantModules', true, /\.ts$/)

let constantModules: Array<RouteRecordRaw> = []

constantFiles.keys().forEach((key) => {
	if (key === './index.ts') return
	constantModules = constantModules.concat(constantFiles(key).default)
})

const asyncFiles = require.context('./permissionModules', true, /\.ts$/)
let permissionModules: Array<RouteRecordRaw> = []
asyncFiles.keys().forEach((key) => {
	if (key === './index.ts') return
	permissionModules = permissionModules.concat(asyncFiles(key).default)
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


export const asyncRoutes: Array<RouteRecordRaw> = [
	...permissionModules
]

const router = createRouter({
	history: createWebHashHistory(),
	routes:constantRoutes
})

export function resetRouter() {
	const newRouter = router;
	(router as any).matcher = (newRouter as any).matcher 
}


export default router