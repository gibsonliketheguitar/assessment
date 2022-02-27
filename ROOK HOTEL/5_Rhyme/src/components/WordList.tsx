import { IResult } from "../App"
import Word from "./Word";

interface IWordList {
    data?: [IResult] | []
}

export default function WordList({ data }: IWordList) {
    return (
        <div className='flex flex-row flex-wrap justify-center m-10'>
            {data?.map((e: IResult, index: number) => {
                return <Word key={e.word + index} index={index} {...e} />
            })}
        </div>
    )
}