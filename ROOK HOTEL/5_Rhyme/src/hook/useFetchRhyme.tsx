import useSWR from "swr"
async function fetcher<JSON = any>(input: any, init?: any): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()


}

export interface IResult {
  word: string,
  score: number,
  numSyllables: number
}

export default function useFetchRhyme(word: string) {
  const { data, error } = useSWR(`https://api.datamuse.com/words?rel_rhy=${word}`, fetcher)
  if (word.length === 0) {
    return {
      data: [],
      isLoading: false,
      isError: false
    }
  }
  return {
    data: data,
    isLoading: !data && !error,
    isError: error
  }
}
