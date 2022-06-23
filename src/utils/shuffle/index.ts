
/**
 * 
 * an array shuffler using the fisher-yates shuffle algorithm
 * **mutates original array
 * @param array an array that you want shuffled
 */
function shuffle(array: any) {
    for(let i = array.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[j], array[i]] = [array[i], array[j]]
    }
}

export default shuffle;