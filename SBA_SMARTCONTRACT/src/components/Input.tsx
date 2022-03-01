export default function Input({
    type,
    name,
    label,
    width = 'w-full',
    height = 'h-full',
    value,
    setValue
}: any) {
    const hasLabel = label?.length === 0 ? 'hidden' : ''
    return (
        <div className={`flex flex-col ${height} ${width} justify-center`}>
            <label className={`text-white text-md lg:text-lg ${hasLabel}`}>{label}</label>
            <input
                type={type}
                id={name}
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
                        focus:rounded-md
                        focus:text-black focus:bg-white focus:border-yellow focus:outline-none
                        transition-all duration-100 ease-linear
                        "
                autoComplete="off"
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
            />
        </div>
    )
}