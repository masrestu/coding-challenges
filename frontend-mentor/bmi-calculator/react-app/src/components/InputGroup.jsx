export default function InputGroup({ label, measurementUnit, currentUnit, onChange, getRef }) {
    return <div className="input-group grid gap-y-2">
        <span className="text-preset-7 capitalize">{label}</span>
        <div className={`flex gap-4 md:gap-6 ${currentUnit}`}>
            {
                measurementUnit[currentUnit][label].map(unit => (
                    <label
                        className={`labelled-input hover:border-blue-500 w-full cursor-pointer p-5.75 flex items-center border border-gray-500 rounded-xl justify-between text-preset-4 group-[.metric]:lg:py-3.75 focus-within:border-blue-500`}
                        key={`${label}-in-${unit}`
                        }>
                        <span className="sr-only">{`${label}-in-${unit}`.replaceAll("-", " ")}</span>
                        <input
                            type="text"
                            id={`${label}-in-${unit}`}
                            className="focus:outline-none cursor-pointer w-full text-blue-900 placeholder:text-gray-500"
                            placeholder="0"
                            ref={getRef(unit)}
                            tabIndex={0}
                            onChange={onChange}
                        />
                        <span className="text-blue-500 text-preset-4">{unit}</span>
                    </label>
                ))
            }
        </div>
    </div>
}