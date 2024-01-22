import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import GlobalFetch from 'alova/GlobalFetch'

export const alovaInstance = createAlova({
  baseURL: import.meta.env.VITE_API_URL,
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  responded: response => response.json(),
})
