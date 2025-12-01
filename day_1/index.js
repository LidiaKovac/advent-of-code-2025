import { readFile } from "../utils/index.js"

const instr = readFile(import.meta.dirname)

// const instr = `L68
// L30
// R48
// L5
// R60
// L55
// L1
// L99
// R14
// L82`

const generateDial = () => {
    const dial = []
    for (let i = 0; i < 100; i++) {
        dial.push(i)
    }
    return dial
}



const generateInstructionList = (str) => str.trim().split("\n")

// [0,1,2,3,4] => 8 

const main = () => {
    const dial = generateDial()
    const input = generateInstructionList(instr)
    let password = 0
    let pos = 50
    for (const instr of input) {
        const isLeft = instr.startsWith("L")
        const num = parseInt(instr.substring(1))
        if (isLeft) {
            pos = (pos - num + 100) % 100
        } else {
            pos = (pos + num) % 100;

        }
       
        if (dial.at(pos) == 0) {
            password++
        }
    }
    return password
}

console.log(main())