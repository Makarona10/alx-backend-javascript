export default function cleanSet(set, startString) {
  let returnString = '';
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return returnString;
  }
  for (const e of set) {
    if (typeof e === 'string' && e.startsWith(startString)) {
      returnString += e.slice(startString.length).concat('-');
    }
  }
  return returnString.slice(0, -1);
}
