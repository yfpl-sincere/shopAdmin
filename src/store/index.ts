import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

interface State {
  count: number,
  // text: string
}
// 定义 injection key
const key: InjectionKey<Store<State>> = Symbol('store')
// 创建一个新的 store 实例
const store = createStore<State>({
  state () {
    return {
      count: 666
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
export {
  store,
  key
}
