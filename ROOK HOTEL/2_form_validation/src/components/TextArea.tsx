export function TextArea({ type, name, label, placeholder, width = 'w-full', row, column, register, ...rest }: any) {
    return (
        <div className={`flex flex-col ${width}`}>
            <label className="text-white text-md lg:text-lg">{label}</label>
            <textarea
                className=" 
                        form-control
                        placeholder-gray-300
                        placeholder-text-slate-400
                        placeholder-italic
                        block
                        w-full
                        px-3
                        py-1.5
                        text-white
                        font-normal
                        bg-transparent bg-clip-padding
                        border border-solid border-white
                        rounded-sm
                        transition-all duration:300 ease-linear
                        ease-in-out
                        m-0
                        focus:text-black focus:bg-white focus:border-yellow focus:outline-none"
                placeholder={placeholder}
                rows={row}
                cols={column}
                {...register(name)}
                {...rest}
            />
        </div>
    )
}