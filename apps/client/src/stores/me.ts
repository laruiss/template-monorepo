import { defineStore } from 'pinia'
import type { SendHandler } from 'alova'

import type { User } from '@dummy/shared'

import { getMyProfile } from '@/api'

export const useMeStore = defineStore<'me', {
  loading: globalThis.ComputedRef<boolean>
  error: globalThis.ComputedRef<Error | undefined>
  me: globalThis.ComputedRef<User>
  getMe: SendHandler<User>
}>('me', () => {
  const { loading, data: me, error, send: getMe } = getMyProfile()
  return {
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    me: computed(() => me.value),
    getMe,
  }
})
