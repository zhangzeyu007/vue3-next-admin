/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-31 13:43:23
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-07 13:57:56
 * @FilePath: \vue3-next-admin\src\store\modules\user\index.ts
 */

import {
	Store as VuexStore,
	CommitOptions,
	DispatchOptions,
	Module
} from 'vuex'

import { RootState } from '@/store'
import { state } from './state'
import { mutations, Mutations } from './mutations'
import { actions, Actions } from './actions'
import type { UserState } from './state'

export { UserState }

export type UserStore<S = UserState> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>
	& {
		commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
			key: K,
			payload: P,
			options: CommitOptions
		): ReturnType<Mutations[K]>
	} & {
		dispatch<K extends keyof Actions>(
			key: K,
			payload: Parameters<Actions[K]>[1],
			options: DispatchOptions
		): ReturnType<Actions[K]>
	}

export const store: Module<UserState, RootState> = {
	state,
	mutations,
	actions
}
