/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-09-25 12:42:13
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 12:47:09
 * @FilePath: \vue3-next-admin\src\store\modules\tagsview\state.ts
 */

import { RouteLocationNormalized } from 'vue-router'

export interface TagView extends Partial<RouteLocationNormalized> {
  title?: string
}

export interface TagsViewState {
  visitedViews: TagView[]
  cachedViews: (string | undefined)[]
}

export const state: TagsViewState = {
  visitedViews: [],
  cachedViews: []
}
