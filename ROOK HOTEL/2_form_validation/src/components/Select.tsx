export default function Select({ name, label, register, options, ...rest }: any) {
    return (
        <div className="flex flex-col">
            <label>label</label>
            <select
                className=" 
                        form-control
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
