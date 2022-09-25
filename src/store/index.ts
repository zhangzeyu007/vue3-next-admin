/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-31 13:33:09
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 14:00:51
 * @FilePath: \vue3-next-admin\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex'
import { store as app, AppStore, AppState } from '@/store/modules/app'
import { store as settings, SettingStore, SettingsState } from '@/store/modules/settings'
import { store as tagViews, TagsStore, TagsViewState } from '@/store/modules/tagsview'
import { store as permission, PermissionStore, PermissionState } from '@/store/modules/permission'

export interface RootState {
	app: AppState,
	settings: SettingsState,
	tagViews: TagsViewState, 
	permission: PermissionState
}

export type Store = AppStore<Pick<RootState, 'app'>> & SettingStore<Pick<RootState, 'settings'>> & TagsStore<Pick<RootState, 'tagViews'>> & PermissionStore<Pick<RootState, 'permission'>>

const debug = process.env.NODE_ENV !== 'production'

const plugins = debug ? [createLogger({})] : []


export const store = createStore({
	plugins,
	modules: {
		app,
		settings,
		tagViews,
		permission
	}
})

export function useStore(): Store {
	return store as Store
}