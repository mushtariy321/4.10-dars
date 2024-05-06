// let str = ['Behruz', 'Dilbek', 'Diyora', 'Amirbek', 'Uyqudegi malika'];
// let result2
// let res
// let result
// let i = 0;

// for (let i of str) {
//     let result = i.split('')
//     let res = result.reverse()
//     result2.push(res.join(''))
// }
// console.log(result2);

let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
console.log(letterSearch);
let words = [];
let wordn = [];

for (let word of letterSearch) {
    if (word.includes('n')) {
        words.push(word);
    } else {
        wordn.push(word);
    }
}

console.log(`n harfi ishtirok etgan so'zlar: ${words}`);
console.log(`n harfi ishtirok etmagan so'zlar: ${wordn}`);