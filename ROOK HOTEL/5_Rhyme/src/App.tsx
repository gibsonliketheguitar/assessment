
import { useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';
import Input from "./components/Input";
import WordList from "./components/WordList";

export interface IResult {
  word: string,
  score: number,
  numSyllables: number
}

function App() {
  const [result, setResult] = useState<[IResult] | []>([])
  const [word, setWord] = useState<string | null>(null)
  const [queryWord] = useDebounce(word, 1000)


  useEffect(() => {
    async function fetchData() {
      if (!queryWord) {
        setWord(null)
        setResult([])
        return
      }
      const q = `?rel_rhy=${queryWord}`
      const res = await fetch(`https://api.datamuse.com/words${q}`)
      const result = await res.json()
      setResult(result)
    }
    fetchData()
  }, [queryWord])

  useEffect(() => {
    function resetInput() {

    }
    resetInput()
  }, [queryWord])

  return (
    <div className="flex flex-col-reverse sm:flex-col bg-gray-500 w-full h-screen items-center justify-center">
      <WordList data={result} />
      <Input name="query" label='search rhymes' width={'sm-24 md:w-96'} word={word} setWord={setWord} />
    </div>
  );
}

export default App;
