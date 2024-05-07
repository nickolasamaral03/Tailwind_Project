import {MoonIcon} from '@heroicons/react/24/solid';
import {SunIcon} from '@heroicons/react/24/solid'
import { useEffect } from 'react';

const ToggleTheme = () => {
    const SystemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const PageClasses = document.documentElement.classList

    useEffect(() => {
        !SystemPreference && PageClasses.add('dark')
    })

    const toggle = () => {
        document.documentElement.classList.toggle('dark')
    }

    return (
        <div className="hidden sm:block">
            <MoonIcon className='h-7 text-blue-200 cursor-pointer block dark:hidden' onClick={toggle}/>
            <SunIcon className='h-7 text-yellow-400 cursor-pointer hidden dark:block' onClick={toggle}/>
            {/* block: aparece
                hidden: esconde
            */}
        </div>
    )
}

export default ToggleTheme