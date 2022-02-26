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
    <div className="bg-blue">
      <Form onSubmit={onSubmit}>
        <Input type='text' name='name' label='Your full given name:' />

        <div className="flex">
          <Input type='text' name='birthDate' label='Date of Birth' />
          <Select name="country" label='Country of residence or citizenship' options={countriesName} />
        </div>

        <Input type='text' name='school' label='What school do you plan to attend?' />

        <TextArea
          name='study'
          label='Please take a moment to describe your intended area of study'
          placeholder='Enter details here'
          row='100'
          column='200'
        />
        <button>Submit</button>
      </Form>

    </div>
  );
}