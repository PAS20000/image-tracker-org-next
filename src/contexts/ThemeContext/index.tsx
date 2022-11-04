import * as React from 'react';

type ProviderProps = {
    children ?: React.ReactNode
}

type PropsCTX = {
    theme : 'dark' | 'light'
    changeTheme : () => void
    setTheme : React.Dispatch<React.SetStateAction<'dark' | 'light'>>
}

export const ThemeContext = React.createContext<PropsCTX>({
    changeTheme : () => {},
    theme : 'dark',
    setTheme : () => {
        console.log('??')
    }
})

const ThemeProvider = ({ children } : ProviderProps) => {
    const [theme, setTheme] = React.useState<'dark' | 'light'>('dark')

    const changeTheme = () => {
        if(theme === 'dark') {
            setTheme('light')
            localStorage.setItem('ImageTrackerTheme', 'light')
        }
        if(theme === 'light') {
            setTheme('dark')
            localStorage.setItem('ImageTrackerTheme', 'dark')
        }
    }

    React.useEffect(() => {
        if (localStorage.ImageTrackerTheme) {
            setTheme(localStorage.ImageTrackerTheme)
        }
    }, [])

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme,
            setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider