/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-31 13:49:44
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-07 12:49:55
 * @FilePath: \vue3-next-admin\src\store\modules\user\state.ts
 */
import { getToken } from '@/utils/cookies'



export interface UserState {
	token: string
	name: string
	avatar: string
	introduction: string
	roles: string[]
	email: string
}

export const state: UserState = {
	token: getToken() || '',
	name: '',
	introduction: '',
	roles: [],
	email: ""
}