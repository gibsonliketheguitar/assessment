export function TextArea(props: any) {
    const { type, name, label, placeholder, row, column, register, ...rest } = props
    return (
        <div className="flex flex-col">
            <label className="text-white">{label}</label>
            <textarea
                className=" 
                        form-control
                        placeholder-gray-300
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
                        transition
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