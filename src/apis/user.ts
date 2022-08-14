/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-08-07 14:04:42
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-14 15:58:08
 * @FilePath: \vue3-next-admin\src\apis\user.ts
 */
import axiosInstance, { AxiosResponseProps } from '@/utils/https'


export const getList = (params:any) => {
	return axiosInstance.get('/comm/api', { params: params || {} })
}