import * as React from 'react'
import { ThemeContext } from '..'

const useThemeCTX = () => {
    const { 
        theme, 
        changeTheme,
        setTheme
    } = React.useContext(ThemeContext)

    return {
        theme,
        changeTheme,
        setTheme
    }
}

export default useThemeCTX