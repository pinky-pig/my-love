import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface GlobalState {
  enableTransitionText: string[]
  setEnableTransitionText: (enable: string[]) => void
}

// partialize 过滤属性，存储哪些字段到localStorage
const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      enableTransitionText: [],
      setEnableTransitionText: (enable) =>
        set(() => ({ enableTransitionText: enable })),
    }),
    {
      name: 'enableTransitionText',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ['enableTransitionText'].includes(key),
          ),
        ),
    },
  ),
)

export default useGlobalStore
