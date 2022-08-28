/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-16 15:49:20
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-08-28 18:13:24
 */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { getSize,setLanguage, setSize } from '@/utils/cookies'
import { getLocale } from '@/locales'
import { store } from '@/store'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface AppState {
  device: DeviceType
  language: string
  size: string
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements AppState {
  public device = DeviceType.Desktop
  public language = getLocale()
  public size = getSize() || 'medium'

  @Action
  public ToggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device)
  }

  @Action
  public SetLanguage(language: string) {
    this.SET_LANGUAGE(language)
  }

  @Action
  public SetSize(size: string) {
    this.SET_SIZE(size)
  }
}

export const AppModule = getModule(App)
