import * as React from 'react';

type ProviderProps = {
    children ?: React.ReactNode
}

type PropsCTX = {
    isAuth ?: boolean
    setMember : React.Dispatch<React.SetStateAction<{}>>
    member : {}
}

export const AuthContext = React.createContext<PropsCTX>({
    setMember : () => {},
    member : {}
})

const AuthProvider = ({ children } : ProviderProps) => {
    const [member, setMember] = React.useState({})
    const isAuth = !!member

    React.useEffect(() => {
       
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setMember,
            member
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider