export default function Select({ name, label, register, options, width = 'w-full', ...rest }: any) {
    return (
        <div className={`flex flex-col ${width}`}>
            <label className="text-white text-md lg:text-lg">{label}</label>
            <select
                defaultValue={'Canada'}
                className=" 
                        block
                        w-full
                        h-10
                        px-3
                        py-1
                        text-white
                        font-normal
                        bg-transparent bg-clip-padding
                        border border-solid border-white
                        rounded-sm
                        transition-all duration:300 ease-linear
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
