import * as React from 'react'
import AuthProvider from './AuthContext'
import PortalProvider from './PortalContext'
import ThemeProvider from './ThemeContext'

type Props = {
    children ?: React.ReactNode
}

const GlobalProvider = ({ children } : Props) => {

    return (
        <AuthProvider>
            <ThemeProvider>
                <PortalProvider>
                    {children}
                </PortalProvider>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default GlobalProvider