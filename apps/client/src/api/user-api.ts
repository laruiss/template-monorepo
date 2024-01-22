import { useRequest } from 'alova'

import type { User } from '@dummy/shared'

import { alovaInstance } from './alova-client.js'

export const getMyProfile = () => useRequest(alovaInstance.Get<User>('me'), { immediate: false })
