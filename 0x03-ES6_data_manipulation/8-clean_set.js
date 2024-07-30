export default function cleanSet(set, startString) {
  let returnString = '';
  for (const e of set) {
    if (e.startsWith(startString)) {
      returnString += e.slice(startString.length).concat(' ');
    }
  }
  return returnString.slice(0, -1);
}
