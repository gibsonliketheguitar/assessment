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
                    //Having a div means that it most likely will contain a styling container
                    //get it's child and create React Elements
                    if (child.type === 'div') {
                        const divChildren = React.Children.map(child.props.children, child => {
                            //TODO [] use extract method to improve readability
                            return React.createElement(child.type, {
                                ...child.props,
                                register: methods.register,
                                key: child.props.name
                            })
                        })
                        result = React.createElement(
                            'div',
                            child.props,
                            divChildren,
                        )
                    }
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