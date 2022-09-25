/*
 * @Description: app state
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 11:50:53
 */
import {  getSidebarStatus, getSize } from '@/utils/cookies'
import { getLocale } from '@/locales'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface AppState {
  device: DeviceType
  language: string
  size: string,
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
}

export const state: AppState = {
  device: DeviceType.Desktop,
  sidebar: {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  },
  language: getLocale(),
  size: getSize() || 'medium'
}
