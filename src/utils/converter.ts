import { toCamelCase, toSnakeCase } from '@std/text'

const applyCaseToObj = (obj: any, toCaseFunction: Function) => {
  return Object.fromEntries(
    Object.entries(obj)
      .map(entry => [toCaseFunction(entry[0]), entry[1]])
  )
}

const objToCamelCase = (obj: any) => applyCaseToObj(obj, toCamelCase)
const objToSnakeCase = (obj: any) => applyCaseToObj(obj, toSnakeCase)

export { objToCamelCase, objToSnakeCase }
