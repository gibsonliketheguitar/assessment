export function Input({ type, name, label, width = 'w-full', register, ...rest }: any) {
    return (
        <div className={`flex flex-col ${width}`}>
            <label className="text-white">{label}</label>
            <input
                type={type}
                className=" 
                        form-control
                        block
                        px-3
                        py-1.5
                        text-white
                        font-normal
                        bg-transparent bg-clip-padding
                        border border-solid border-white
                        rounded-sm
                        transition
                        ease-in-out
                        m-0
                        focus:text-black focus:bg-white focus:border-yellow focus:outline-none"
                id="exampleFormControlInput1"
                {...register(name)}
                {...rest}
            />
        </div>
    )
}