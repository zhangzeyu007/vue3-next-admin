/*
 * @Description: 
 * @Author: 张泽雨
 * @Date: 2022-08-28 15:17:37
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-28 15:18:39
 * @FilePath: \vue3-next-admin\src\utils\validate.ts
 */

export const isValidUsername = (str:string) =>['admin', 'editor', ].indexOf(str.trim())>=0