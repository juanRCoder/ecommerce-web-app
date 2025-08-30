export const removeEmptyProperties = <T extends object>(obj: T): Partial<T> =>
  Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== "" && v !== undefined)
  ) as Partial<T>
