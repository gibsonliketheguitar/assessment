export default function Select({ name, label, register, options, width = 'w-full', ...rest }: any) {
    console.log(rest)
    return (
        <div className={`flex flex-col ${width}`}>
            <label className="text-white">{label}</label>
            <select
                className=" 
                        block
                        w-full
                        h-9.5
                        px-3
                        py-1
                        text-white
                        font-normal
                        bg-transparent bg-clip-padding
                        border border-solid border-white
                        rounded-sm
                        transition
                        ease-in-out
                        m-0
                        focus:text-black focus:bg-white focus:border-yellow focus:outline-none"
                {...register(name)} {...rest}>
                {options.map((value: any) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
}
