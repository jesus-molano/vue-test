import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 4
  },
  actions: {
    increment(value = 1) {
      this.counter += value;
    }
  }
})
