export default function cleanSet(set, startString) {
  const returnString = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const e of set) {
    if (typeof e === 'string' && e.startsWith(startString)) {
      returnString.push(e.slice(startString.length));
    }
  }
  return returnString.join('-');
}
