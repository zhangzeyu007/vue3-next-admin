/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-08-28 15:38:51
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-28 16:58:22
 * @FilePath: \vue3-next-admin\src\plugins\i18n.ts
 */
import i18n from '@/locales'

export default function loadComponent(app:any) {
	app.use(i18n)
}