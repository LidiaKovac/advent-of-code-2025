import { readFile, stringToMatrix } from "../utils/index.js"

// const input = `
// 123 328  51 64
//  45 64  387 23
//   6 98  215 314
// *   +   *   +  
// `

const input = readFile(import.meta.dirname)

const m = stringToMatrix(input.replaceAll("  ", " "), " ")
const ops = []

let op = []

// console.log(op)


while (m[0].length > 0) {
    // op = m.map(r => r[0])
    // op =
    console.log(m)
    ops.push(m.map(r => r.shift()))
}

console.log(ops[0], ops[ops.length - 1])
let res = 0
for (const op of ops) {
    const c = op[op.length - 1]
    const nums = op.slice(0, -1)
    if (c === "*") {
        res += nums.reduce((a, b) => a * b, 1)
    } else {
        res += nums.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    }
    // res += (eval(nums.join(c)))
}

console.log(res)
console.log(Number.MAX_SAFE_INTEGER)