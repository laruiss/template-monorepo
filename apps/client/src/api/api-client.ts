import { Zodios } from '@zodios/core'
import { z } from 'zod'

const apiBaseURL = import.meta.env.VITE_API_URL as string

export const apiClient = new Zodios(
  import.meta.env.VITE_API_URL as string, // API base url
  // API definition
  [
    {
      method: 'get',
      path: `${apiBaseURL}/users/:id`, // auto detect :id and ask for it in apiClient get params
      alias: 'getUser', // optional alias to call this endpoint with it
      description: 'Get a user',
      response: z.object({
        id: z.number(),
        username: z.string().min(2).max(50),
        email: z.string().email(),
        createdAt: z.date(),
        updatedAt: z.date(),
      }),
    },
  ],
)
