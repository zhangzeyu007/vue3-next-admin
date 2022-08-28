/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-31 13:33:09
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-28 20:45:14
 * @FilePath: \vue3-next-admin\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex'
import { store as app, AppStore, AppState } from '@/store/modules/app'

export interface RootState {
	app: AppState
}

export type Store = AppStore<Pick<RootState, 'app'>>

const debug = process.env.NODE_ENV !== 'production'

const plugins = debug ? [createLogger({})] : []


export const store = createStore({
	plugins,
	modules: {
		app,
	}
})

export function useStore(): Store {
	return store as Store
}