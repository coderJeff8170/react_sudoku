/**
 *
 * an array shuffler using the fisher-yates shuffle algorithm
 * **mutates original array
 * @param array an array that you want shuffled
 * returns void
 */
function shuffle(array: any) {
  // let initialArray = array.slice();
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[j], array[i]] = [array[i], array[j]];
  }
  //need deep equality
  //   console.log(initialArray, array);
  //TODO:  write a util function to compare these arrays
  //   if (initialArray === array) {
  //     shuffle(array);
  //   }
}

export default shuffle;
