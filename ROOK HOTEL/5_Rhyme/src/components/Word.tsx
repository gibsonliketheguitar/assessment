import { IResult } from "../App"

export interface IWord extends IResult {
    index: number
}

export default function Word({ word, index }: IWord) {
    const style = index === 0 ? 'text-white text-3xl' : 'text-white-800'
    return (
        <span className={`flex flex-col justify-end ${style} mr-2`}>{word}</span>
    )
}