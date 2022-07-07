/**
 * compares two arrays (of any dimension) and returns true if equal, otherwise false
 * @param arr1 first array to be compared
 * @param arr2 second array to be compared
 * @returns boolean
 */
function compareArrays(arr1: any[], arr2: any[]): boolean {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2; //odd!
  if (arr1.length !== arr2.length) return false;
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (!compareArrays(arr1[i], arr2[i])) return false;
  }
  return true;
}

export default compareArrays;
