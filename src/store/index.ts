/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-31 13:33:09
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 12:20:44
 * @FilePath: \vue3-next-admin\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex'
import { store as app, AppStore, AppState } from '@/store/modules/app'
import { store as settings, SettingStore, SettingsState } from '@/store/modules/settings'

export interface RootState {
	app: AppState,
	settings: SettingsState
}

export type Store = AppStore<Pick<RootState, 'app'>> & SettingStore<Pick<RootState, 'settings'>>

const debug = process.env.NODE_ENV !== 'production'

const plugins = debug ? [createLogger({})] : []


export const store = createStore({
	plugins,
	modules: {
		app,
		settings
	}
})

export function useStore(): Store {
	return store as Store
}