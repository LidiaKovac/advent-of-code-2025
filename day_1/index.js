import { cleanAndSplitInput, readFile } from "../utils/index.js"

// const instr = readFile(import.meta.dirname)

const instr = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`
const generateDial = () => {
    const dial = []
    for (let i = 0; i < 100; i++) {
        dial.push(i)
    }
    return dial
}

// [0,1,2,3,4] => 8

const main = () => {
    const dial = generateDial()
    const input = cleanAndSplitInput(instr)
    let password = 0
    let pos = 50
    for (const instr of input) {

        const isLeft = instr.startsWith("L")
        const num = parseInt(instr.substring(1))

        let wraps = 0
        let to0 = 0
        if (isLeft) {
            to0 = pos === 0 ? 0 : pos
            if (num >= to0 && pos !== 0) {
                wraps = 1 + Math.floor((num - to0) / 100)
            }
            pos = (pos - num + 100) % 100
        } else {
            to0 = pos === 0 ? 100 : 100 - pos
            if (num >= to0 && pos !== 0) {
                wraps = 1 + Math.floor((num - to0) / 100)
            }
            pos = (pos + num) % 100
        }
        if (pos === 0 && wraps === 0) {
            wraps = 1
        }
        password += wraps
    }
    return password
}

console.log(main())
