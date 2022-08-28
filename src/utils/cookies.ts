/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-08-07 12:33:03
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-28 17:16:47
 * @FilePath: \vue3-next-admin\src\utils\cookies.ts
 */

import Keys from '../constant/key'
import Cookies from 'js-cookie'


export const getToken = ()=> Cookies.get(Keys.tokenKey)
export const getLanguage = () => Cookies.get(Keys.languageKey)
export const setLanguage = (language: string) => Cookies.set(Keys.languageKey, language)
export const getSize = () => Cookies.get(Keys.sizeKey)
export const setSize = (size: string) => Cookies.set(Keys.sizeKey, size)
export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(Keys.sidebarStatusKey, sidebarStatus)