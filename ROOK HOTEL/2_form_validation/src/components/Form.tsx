import React from 'react'
import { useForm } from 'react-hook-form';

export function Form({ defaultValues, children, onSubmit }: any) {
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
