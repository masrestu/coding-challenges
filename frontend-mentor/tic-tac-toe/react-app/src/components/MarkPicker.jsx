export default function MarkPicker({ currentMark, onChange }) {
    return <>
        <h1 className="pb-1.5 text-xs">Pick Player 1's mark</h1>
        <div className="mark-selector flex p-2 bg-neutral-900 rounded-2xl">
            {
                ["x", "o"].map(value => (
                    <label htmlFor={`${value}-mark`} className="h-13.5 w-1/2 has-checked:bg-neutral-100 rounded-10 flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition" key={`${value}-mark`}>
                        <input type="radio" name="player-1-mark" id={`${value}-mark`} defaultChecked={currentMark === value} className="peer sr-only" onChange={onChange} value={value} />
                        <svg className="size-8 fill-neutral-100 peer-checked:fill-neutral-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        {
                            value === "x" ?
                            <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="inherit" fillRule="evenodd" /> :
                            <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="inherit" />
                        }
                        </svg>
                    </label>
                ))
            }
        </div>
        <h2 className="text-body">Remember : X goes first</h2>
    </>
}