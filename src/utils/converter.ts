import { toCamelCase, toSnakeCase } from '@std/text'

const applyCaseToObj = (obj: any, toCaseFunction: Function) => {
  return Object.fromEntries(
    Object.entries(obj)
      .map(entry => [toCaseFunction(entry[0]), entry[1]])
  )
}

const objToCamelCase = (obj: any) => applyCaseToObj(Object.assign({}, obj), toCamelCase)
const arrayToSnakeCase = (array: Array<any>) => Object.assign([], array).map(obj => applyCaseToObj(obj, toSnakeCase))

export { objToCamelCase, arrayToSnakeCase }
