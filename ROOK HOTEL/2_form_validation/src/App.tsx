import { useForm } from "react-hook-form";

import { Form } from "./components/Form";
import { Input } from "./components/Input";
import Select from "./components/Select";
import { TextArea } from "./components/TextArea";

export default function App() {
  const { watch } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  }
  const countriesJSON = require('./assets/data/country.json')
  const countriesName = countriesJSON.map((c: any) => c.name)

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="bg-blue w-1/3 min-width-[300px] p-5">
        <Form onSubmit={onSubmit} >
          <Input type='text' name='name' label='Your full given name:' />

          <div className="flex flex-col lg:flex-row items-end space-y-5 lg:space-y-0 space-x-0 lg:space-x-5">
            <Input type='text' name='birthDate' label='Date of Birth' width='w-full lg:w-2/5' />
            <Select name="country" label='Country of residence or citizenship' options={countriesName} width={'w-full lg:w-4/5'} />
          </div>

          <Input type='text' name='school' label='What school do you plan to attend?' />

          <TextArea
            name='study'
            label='Please take a moment to describe your intended area of study'
            placeholder='Enter details here'
            row='10'
            column='20'
          />
          <button>Submit</button>
        </Form>
      </div>
    </div>
  );
}