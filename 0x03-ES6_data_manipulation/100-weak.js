export const weakMap = new WeakMap();
export function queryAPI(obj) {
  if (!weakMap.has(obj)) {
    return (weakMap.set(obj, 1)).get(obj);
  }
  if (weakMap.get(obj) >= 5) {
    throw new Error('Endpoint load is high');
  }
  return (weakMap.set(obj, weakMap.get(obj) + 1)).get(obj);
}
