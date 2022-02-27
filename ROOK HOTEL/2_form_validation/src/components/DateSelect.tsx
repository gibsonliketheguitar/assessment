import { useState } from "react";
import { default as Icon } from "../assets/icons/DatePickerIcon";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


//TODO[ ] read through this again https://stackoverflow.com/questions/57659459/onblur-for-div-element-in-react
export function DateSelect({ name, label, width = 'w-full', register, ...rest }: any) {
    const [show, setShow] = useState(true)
    const [date, setDate] = useState(new Date());

    function handleFocus() {
        setShow(false)
    }
    function handleBlur() {
        setShow(true)
    }

    return (
        <div className={`flex flex-col ${width}`}>
            <label className="text-white text-md lg:text-lg">{label}</label>
            <div className="
                flex justify-center items-center
                h-9.5 border rounded-sm border-solid border-white"
                tabIndex={0}
                onBlur={() => handleBlur()}
                onFocus={() => handleFocus()}
            >
                <Icon style={`${show ? 'inline' : 'hidden'} transition`} />
                {/**
                  *  Hacky:
                  *  input element is hidden, but value is set by setState
                  *  and the DatePicker library set's the value. 
                  *  Faster than integrating DatePicker library w/ React-hook-form
                  */}
                <input
                    className="hidden"
                    type='text'
                    autoComplete='off'
                    onBlur={() => handleBlur()}
                    value={date}
                    {...register(name)}
                    {...rest}
                />
                <DatePicker
                    className="
                    text-left
                    w-full
                    px-4
                    py-1.5
                    text-white
                    font-normal
                    bg-transparent bg-clip-padding
                    transition-all duration:100 ease-linear
                    ease-in-out
                    m-0
                    focus:text-black focus:bg-white focus:border-yellow focus:outline-none
                    "
                    selected={date} onChange={(value: Date) => setDate(value)}
                    disabled={false}
                    dropdownMode='scroll'
                    yearDropdownItemNumber={10}
                />
            </div>
        </div>
    )
}