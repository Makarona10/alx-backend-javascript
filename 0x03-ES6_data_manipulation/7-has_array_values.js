export default function hasValuesFromArray(set, arr) {
  let allExist = true;
  for (const e of new Set(arr)) {
    if (!set.has(e)) {
      allExist = false;
    }
  }
  return allExist;
}
