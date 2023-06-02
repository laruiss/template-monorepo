import { describe, expect, it } from 'vitest'
import { isLongerThan } from './string-utils'

describe('String utils', () => {
  describe('isLongerThan', () => {
    it('should return true', () => {
      const expected = true
      const actual = isLongerThan(12)('abcdefghijklmnopqrstuvwxyz')

      expect(actual).toBe(expected)
    })
  })
})
