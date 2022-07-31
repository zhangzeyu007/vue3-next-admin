/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-30 13:45:20
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-07-31 14:03:35
 * @FilePath: \vue3-next-admin\src\router\constantModules\userManager.ts
 */

import { RouteRecordRaw } from 'vue-router'

const UserManagerRouter: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/view/login/Index.vue')
	}
]

export default UserManagerRouter