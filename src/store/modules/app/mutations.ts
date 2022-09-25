/*
 * @Description: app Mutations
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 11:49:00
 */
import { MutationTree } from 'vuex'
import { AppState, DeviceType } from './state'
import { AppMutationTypes } from './mutation-types'
import { setSidebarStatus,  setLanguage, setSize } from '@/utils/cookies'

export type Mutations<S = AppState> = {
  [AppMutationTypes.TOGGLE_DEVICE](state: S, device: DeviceType): void
  [AppMutationTypes.SET_LANGUAGE](state: S, language: string): void
  [AppMutationTypes.SET_SIZE](state: S, size: string): void
  [AppMutationTypes.CLOSE_SIDEBAR](state: S, withoutAnimation: boolean): void
}

export const mutations: MutationTree<AppState> & Mutations = {
  [AppMutationTypes.TOGGLE_DEVICE](state: AppState, device: DeviceType) {
    state.device = device
  },
  [AppMutationTypes.CLOSE_SIDEBAR](state: AppState, withoutAnimation: boolean) {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  },
  [AppMutationTypes.SET_LANGUAGE](state: AppState, language: string) {
    state.language = language
    setLanguage(state.language)
  },
  [AppMutationTypes.SET_SIZE](state: AppState, size: string) {
    state.size = size
    setSize(state.size)
  }
}
