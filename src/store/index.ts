/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-31 13:33:09
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-07 13:43:45
 * @FilePath: \vue3-next-admin\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex'
import { store as user, UserStore, UserState } from '@/store/modules/user'


export interface RootState {
	user: UserState
}

export type Store = UserStore<Pick<RootState, 'user'>>

const debug = process.env.NODE_ENV !== 'production'

const plugins = debug ? [createLogger({})] : []


export const store = createStore({
	plugins,
	modules: {
		user
	}
})

export function useStore(): Store {
	return store as Store
}