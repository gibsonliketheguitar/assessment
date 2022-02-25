export default function Select({ name, label, register, options, ...rest }: any) {
    return (
        <div className="flex flex-col">
            <label>label</label>
            <select {...register(name)} {...rest}>
                {options.map((value: any) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
}
