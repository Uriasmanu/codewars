// function twoHighest(arr) {
//     let maiorValor = 0;
//     return maiorValor = Math.max(...arr)
// }

function twoHighest(arr) {
    const uniqueValues = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueValues.splice(0, 2)
}

console.log(twoHighest([15, 20, 20, 17]))