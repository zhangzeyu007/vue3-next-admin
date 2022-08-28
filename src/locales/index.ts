/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-18 15:23:57
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-28 15:51:37
 */
import { createI18n } from 'vue-i18n' // import from runtime only
import { getLanguage } from '@/utils/cookies'

import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'

// User defined lang
import enLocale from './en'
import zhLocale from './zh-cn'

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  'zh-cn': {
    ...zhLocale,
    ...elementZhLocale
  }
}

export const getLocale = () => {
  const cookieLanguage = getLanguage()
  if (cookieLanguage) {
    return cookieLanguage
  }
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  // Default language is english
  return 'zh'
}

const i18n = createI18n({
  legacy:false,
  locale: getLocale(),
  messages: messages
})

export default i18n