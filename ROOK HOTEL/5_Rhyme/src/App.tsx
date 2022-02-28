
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useDebounce } from 'use-debounce';
import Input from "./components/Input";
import WordList from "./components/WordList";
import useFetchRhyme from "./hook/useFetchRhyme";

function App() {
  const [word, setWord] = useState<string>('')
  const [queryWord] = useDebounce(word, 500)
  const { data, isLoading, isError } = useFetchRhyme(queryWord)

  return (
    <div className="flex flex-col-reverse sm:flex-col bg-gray-500 w-full h-screen items-center justify-center">
      <WordList data={data} loading={isLoading} error={isError} />
      <Input name="query" label='search rhymes' width={'sm-24 md:w-96'} word={word} setWord={setWord} />
    </div>
  );
}

export default App;
