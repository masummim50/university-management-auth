export const pick = <T extends object, k extends keyof T>(
  queryObject: T,
  keys: k[]
): Partial<T> => {
  const filterObject: Partial<T> = {}
  for (const key of keys) {
    if (queryObject && Object.hasOwnProperty.call(queryObject, key)) {
      filterObject[key] = queryObject[key]
    }
  }
  return filterObject
}
