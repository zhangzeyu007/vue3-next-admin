/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-31 13:48:54
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-07 13:46:57
 * @FilePath: \vue3-next-admin\src\store\modules\user\actions.ts
 */
import { ActionTree, ActionContext } from "vuex";
import { Mutations } from './mutations'
import { UserActionTypes } from './action-types'
import { RootState, useStore } from '@/store'
import { state, UserState } from './state'

type AugmentedActionContext = {
	commit<K extends keyof Mutations>({ commit }: AugmentedActionContext, userInfo: { username: string, password: string }): void
} & Omit<ActionContext<UserState, RootState>, 'commit'>

export interface Actions {
	[UserActionTypes.ACTION_LOGIN](
		{ commit }: AugmentedActionContext,
		userInfo: { username: string, password: string }
	): void
}


export const actions: ActionTree<UserState, RootState> & Actions = {





	
}