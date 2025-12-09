import { cleanString, readFile } from "../utils/index.js"

// const input = `
// 3-5
// 10-14
// 16-20
// 12-18

// 1
// 5
// 8
// 11
// 17
// 32
// `


const input = readFile(import.meta.dirname)


const [rangesAsString, ingredientsString] = cleanString(input).split("\n\n")

// console.log("ranges: ", rangesAsString, "\ningredients: ", ingredientsString)

const ingredients = ingredientsString.split("\n").map(i => parseInt(i))
// console.log(ingredients)

const ranges = rangesAsString.split("\n").map(r => r.split("-").map(i => parseInt(i)))
// console.log(ranges)
const freshSet = []
let fresh = 0
// for (const ingredient of ingredients) {

//     for (const range of ranges) {
//         if (ingredient >= range[0] && ingredient <= range[1]) {
//             fresh++
//             break
//         }
//     }
// }
let count = 0
for (const [start, end] of ranges) {
    count++
    console.log("Range", start, end, count, "/", ranges.length)
    for (let i = start; i <= end; i++) {
        if (freshSet.includes(i)) continue
        freshSet.push(i)
    }
}


console.log(freshSet.length)