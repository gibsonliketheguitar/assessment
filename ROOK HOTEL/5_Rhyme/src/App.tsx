import { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';
import Input from "./components/Input";

interface IResult {
  word: string,
  score: number,
  numSyllables: number
}

function App() {
  const [result, setResult] = useState<[IResult] | []>([])
  const [word, setWord] = useState<string>('')
  const [queryWord] = useDebounce(word, 1000)

  useEffect(() => {
    async function fetchData() {
      if (queryWord.length === 0) return
      const q = `?rel_rhy=${queryWord}`
      const res = await fetch(`https://api.datamuse.com/words${q}`)
      const result = await res.json()
      setResult(result)
    }
    fetchData()
  }, [queryWord])

  return (
    <div className="flex flex-col-reverse sm:flex-col bg-gray-500 w-full h-screen items-center justify-center sm:justify-start">
      <div className='flex flex-row flex-wrap justify-even m-10'>
        {result?.map((e: IResult, index: number) => {
          return <Word key={e.word + index} index={index} {...e} />
        })}
      </div>

      <Input name="query" label='search rhymes' width={'sm-24 md:w-96'} word={word} setWord={setWord} />
    </div>
  );
}

interface IWord extends IResult {
  index: number
}

const Word = ({ word, index }: IWord) => {
  const style = index === 0 ? 'text-white text-3xl' : 'text-white-800'
  return (
    <span className={`flex flex-col justify-end ${style} mr-2`}>{word}</span>
  )
}

export default App;
