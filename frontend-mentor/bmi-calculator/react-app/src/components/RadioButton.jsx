export default function RadioButton({id, value, name, isChecked, onChange }) {
    return <label htmlFor={id} className="radio-group cursor-pointer flex items-center gap-4 text-blue-900 font-semibold group focus:outline-none">
                    <input type="radio" name={name} id={id} value={value} className="peer sr-only" onChange={onChange} checked={isChecked} />
                    <span className="size-7.5 border border-gray-500 rounded-full peer-checked:after:content-[''] peer-checked:after:size-3.5 peer-checked:after:bg-blue-500 peer-checked:after:rounded-full peer-checked:grid peer-checked:place-items-center peer-checked:bg-blue-100 peer-checked:border-blue-100 group-hover:border-blue-500 group-focus:border-blue-500"></span>
                    <span className="capitalize">{value}</span>
                </label>
}