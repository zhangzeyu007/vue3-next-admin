/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-07-31 13:49:33
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-07 13:28:28
 * @FilePath: \vue3-next-admin\src\store\modules\user\mutations.ts
 */

import { MutationTree } from 'vuex'
import { UserState } from './state'
import { UserMutationTypes } from './mutation-types'


export type Mutations<S = UserState> = {
	[UserMutationTypes.SET_TOKEN](state: S, token: string): void
}

export const mutations: MutationTree<UserState> & Mutations = {
	[UserMutationTypes.SET_TOKEN](state: UserState, token: string) {
		state.token = token;
	}
}