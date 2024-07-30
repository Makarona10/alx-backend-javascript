export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const e of map) {
    if (e[1] === 1) {
      map.set(e[0], 100);
    }
  }
  return map;
}
