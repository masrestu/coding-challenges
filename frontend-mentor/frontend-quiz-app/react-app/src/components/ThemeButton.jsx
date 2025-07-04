import iconSunDark from '/images/icon-sun-dark.svg'
import iconMoonDark from '/images/icon-moon-dark.svg'
import iconSunLight from '/images/icon-sun-light.svg'
import iconMoonLight from '/images/icon-moon-light.svg'
import { memo } from 'react'

function ThemeButton() {
    const toggleDarkMode = () => {
        const isDarkMode = document.getElementById('btnTheme').checked
        if (isDarkMode)
            document.documentElement.classList.add('dark')
        else
            document.documentElement.classList.remove('dark')
    }

    return <div className='btn-theme ms-auto'>
        <picture>
            <img className='size-4 hidden dark:block' src={iconSunLight} alt='' />
            <img className='size-4 block dark:hidden' src={iconSunDark} alt='' />
        </picture>
        <label className='cursor-pointer'>
            <input type='checkbox' name='btnTheme' id='btnTheme' className='hidden' onChange={toggleDarkMode} />
            <div className='toggle'>
                <span className='toggle-thumb'></span>
            </div>
            <span className="sr-only">Toggle Dark Mode</span>
        </label>
        <picture>
            <img className='size-4 hidden dark:block' src={iconMoonLight} alt='' />
            <img className='size-4 block dark:hidden' src={iconMoonDark} alt='' />
        </picture>
    </div>
}

export default memo(ThemeButton)