import { useForm } from "react-hook-form";
import { DateSelect } from "./components/DateSelect";

import { Form } from "./components/Form";
import { Input } from "./components/Input";
import Select from "./components/Select";
import { TextArea } from "./components/TextArea";

export default function App() {
  const { watch } = useForm();
  const onSubmit = (data: any) => {
    setTimeout(() => {
      alert(JSON.stringify(data, null, 4));
    }, 0)
  }
  const countriesJSON = require('./assets/data/country.json')
  const countriesName = countriesJSON.map((c: any) => c.name)

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="bg-blue w-1/3 min-w-250 p-5">
        <Form onSubmit={onSubmit} >
          <Input type='text' name='name' label='Your full given name:' />

          <div className="flex flex-col lg:flex-row items-end space-y-5 lg:space-y-0 space-x-0 lg:space-x-5">
            <DateSelect type='text' name='birthDate' label='Date of Birth' width='w-full lg:w-2/6' />
            <Select name="country" label='Country of residence or citizenship' options={countriesName} width={'w-full lg:w-4/6'} />
          </div>

          <Input type='text' name='school' label='What school do you plan to attend?' />
          <TextArea
            name='study'
            label='Please take a moment to describe your intended area of study'
            placeholder='Enter details here'
            row='10'
            column='20'
          />
          <button className="h-12 w-40 bg-transparent border border-solid border-white rounded-md hover:bg-white transition">Submit</button>
        </Form>
      </div>
    </div>
  );
}