/*
 * @Description: app state
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-28 18:08:38
 */
import {  getSize } from '@/utils/cookies'
import { getLocale } from '@/locales'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface AppState {
  device: DeviceType
  language: string
  size: string
}

export const state: AppState = {
  device: DeviceType.Desktop,
  language: getLocale(),
  size: getSize() || 'medium'
}
