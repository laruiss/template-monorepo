/* eslint-disable  @typescript-eslint/no-explicit-any */
export function isString (value: any): boolean {
  return typeof value === 'string'
}

export function isLongerThan (minLength: number): (value: string) => boolean {
  return value => value.length >= minLength
}

export function containsAtLeastOneOf (chars: string) {
  return (value: string) => chars.split('').some(char => value.includes(char))
}

export const isLongerThan12 = isLongerThan(12)
export const containsSpecialChars = containsAtLeastOneOf('#!@;-:*')

const alphanumBase = 'abcdefghijklmnopqrstuvwyz0123456789'

const alphanum = alphanumBase.repeat(10)

export const getRandomAlphaNum = () => {
  const randomIndex = Math.floor(Math.random() * alphanum.length)
  return alphanum[randomIndex]
}

export const getRandomString = (length: number) => {
  return Array.from({ length })
    .map(getRandomAlphaNum).join('')
}

export const getRandomHtmlId = (prefix = '', suffix = '') => {
  return (prefix ? prefix + '-' : '') + getRandomString(5) + (suffix ? '-' + suffix : '')
}

