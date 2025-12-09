import {readFileSync} from "fs"
import { join } from "path"
export const readFile = (dirname) => {
    return readFileSync(join(dirname, "./input.txt"), "utf-8")
}

export const cleanString = str => str.replace(/^\n/, "").replace(/\n\z/, "").trim()

export const cleanAndSplitInput = str => cleanString(str).split("\n")

export const stringToMatrix = (m, s = "") => cleanAndSplitInput(m).map(el => el.trim().split(s).filter(Boolean))