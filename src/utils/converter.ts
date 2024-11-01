import { toCamelCase } from '@std/text'

const objToCamelCase = (obj: any) => {
  return Object.fromEntries(
    Object.entries(obj)
      .map(entry => [toCamelCase(entry[0]), entry[1]])
  )
}

export { objToCamelCase }
