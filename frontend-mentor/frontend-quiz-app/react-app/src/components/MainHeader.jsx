export default function MainHeader() {
    return <>
        <h1 className='title-container grid place-items-start gap-2'>
            <span className='sm-text-preset-2-light'>
                Welcome to the
            </span>
            <span className='sm-text-preset-2-medium'>
                Frontend Quiz!
            </span>
        </h1>
        <span className='description'>
            Pick a subject to get started.
        </span>
    </>
}