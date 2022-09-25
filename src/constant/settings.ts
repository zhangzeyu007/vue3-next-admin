/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-09-25 19:37:13
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-09-25 19:37:14
 * @FilePath: \vue3-next-admin\src\constant\settings.ts
 */
/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-08 10:28:32
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-07 08:40:47
 */

export enum Language{
     En='en',
     Zh='zh-cn',
}

export enum Environment{
    Development = 'development',
    Production = 'production'
}

export enum RouterSource{
    Frontend = 'frontend',
    Backend = 'backend'
}

export enum RouterMode{
    Hash = 'hash',
    HISTORY = 'history'
}

export enum TokenStorageName{
    LocalStorage = 'localStorage',
    SessionStorage = 'sessionStorage',
    Cookie = 'cookie'
}
