/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-08-07 12:33:03
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-21 18:45:38
 * @FilePath: \vue3-next-admin\src\utils\cookies.ts
 */

import Keys from '../constant/key'
import Cookies from 'js-cookie'


export const getToken = ()=> Cookies.get(Keys.tokenKey)

