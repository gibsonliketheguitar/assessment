import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  }

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    <Form onSubmit={onSubmit}>
      <Input name='name' />
      <Input name='birthDate' />
      <Input name='country' />
      <Input name='school' />
      <Input name='study' />
      <button>Submit</button>
    </Form>
  );
}

const Input = (props: any) => {
  const { register, name, ...rest } = props
  return (
    <div className="flex flex-col">
      <label>{name}</label>
      <input {...register(name)} {...rest} />
    </div>
  )
}

function Select({ register, options, name, ...rest }: any) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value: any) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

function Form({ defaultValues, children, onSubmit }: any) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <div className="flex flex-col items-center bg-blue-200">
      <form onSubmit={handleSubmit(onSubmit)}>
        {React.Children.map(children, child => {
          let result = child
          if (child.props.name) {
            result = React.createElement(child.type, {
              ...child.props,
              register: methods.register,
              key: child.props.name
            })
          }
          return result
        })}
      </form>
    </div>
  );
}