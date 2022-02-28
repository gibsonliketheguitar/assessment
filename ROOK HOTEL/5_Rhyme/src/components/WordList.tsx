import { Skeleton } from "@mui/material";
import { IResult } from "../hook/useFetchRhyme";
import Word from "./Word";

interface IWordList {
    data?: any,
    loading: boolean,
    error: boolean
}

export default function WordList({ data, loading, error }: IWordList) {
    if (loading) return <Skeleton variant="rectangular" width={360} height={118} />
    if (error) return <div> Fail to load words that Rhyme</div>
    return (
        <div className='flex flex-row flex-wrap justify-center m-10'>
            {data?.map((e: IResult, index: number) => {
                return <Word key={e.word + index} index={index} {...e} />
            })}
        </div>
    )
}