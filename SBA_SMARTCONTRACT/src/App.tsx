
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState<string>('123')

  function setRandNumber() {
    const randNum = Math.random()
    setValue(randNum + '')
  }

  return (
    <div className="flex flex-col bg-gray-500 w-full h-screen items-center justify-center">
      <div className="flex flex-col-reverse items-center sm:flex-row sm:justify-start sm:space-x-4">
        <Button title={'Get Balance'} style="mt-4 sm:mt-0" onClick={() => setRandNumber()} />
        <Input name="result" width={'sm-24 md:w-96'} value={value} />
      </div>
    </div>
  );
}

export default App;
