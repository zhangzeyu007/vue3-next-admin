/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-31 13:33:09
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 19:57:20
 * @FilePath: \vue3-next-admin\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex'
import { store as app, AppStore, AppState } from '@/store/modules/app'
import { store as settings, SettingStore, SettingsState } from '@/store/modules/settings'
import { store as tagViews, TagsStore, TagsViewState } from '@/store/modules/tagsview'
import { store as permission, PermissionStore, PermissionState } from '@/store/modules/permission'
import { store as user, UserStore, UserState } from '@/store/modules/user'
export interface RootState {
	app: AppState,
	settings: SettingsState,
	tagViews: TagsViewState, 
	permission: PermissionState
	user: UserState
}

export type Store = AppStore<Pick<RootState, 'app'>> & SettingStore<Pick<RootState, 'settings'>>
	& TagsStore<Pick<RootState, 'tagViews'>> & PermissionStore<Pick<RootState, 'permission'>> & UserStore<Pick<RootState, 'user'>>

const debug = process.env.NODE_ENV !== 'production'

const plugins = debug ? [createLogger({})] : []


export const store = createStore({
	plugins,
	modules: {
		app,
		settings,
		tagViews,
		permission,
		user,
	}
})

export function useStore(): Store {
	return store as Store
}