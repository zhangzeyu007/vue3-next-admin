/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-08-07 14:48:32
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-14 16:00:45
 * @FilePath: \vue3-next-admin\src\utils\https.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface AxiosResponseProps {
	code?: number;
	status?: number;
	data?: any;
	datas?: any;
	msg?: string | null;
}

export interface ResponseType {
	[key: string]: any
}

class HttpRequest {
	private readonly baseURL: string;
	private readonly withCredentials: boolean;
	private readonly timeout: number;
	constructor() {
		this.baseURL = '' // api 地址
		this.withCredentials = true;
		this.timeout = 1000 * 60;
	}

	// 初始化 get 请求
	getInitConfig(): AxiosRequestConfig {
		return {
			baseURL: this.baseURL,
			withCredentials: this.withCredentials,
			timeout: this.timeout
		}
	}

	interceptors(instance: AxiosInstance) {
		let requestList: Array<any> = [];
		const setLoadingToFalse = (response: ResponseType) => {
			requestList.filter(item => item.url === response.config.url && item.method == response.config.method).forEach(item => (item.isLoading = false))
			// 所有请求都加载完才让加载提示消失
			// if (requestList.every(item => !item.isLoading)) store.commit("changeIsLoading", false);
		}
		instance.interceptors.response.use(
			response => {
				setLoadingToFalse(response)
				return response.data
			},
			error => {
				if (error.response.status === 301) {
					// store.commit("changeLoginModalVisible", true);
				}
				setLoadingToFalse(error)
				return Promise.reject(error.response?.data)
			}
		)
	}
	requset(): AxiosInstance {
		const instance = axios.create(this.getInitConfig());
		this.interceptors(instance)
		return instance
	}
}

const http = new HttpRequest();

export default http.requset();