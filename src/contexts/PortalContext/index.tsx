import * as React from 'react';

type ProviderProps = {
    children ?: React.ReactNode
}

interface OpenState {
    share : boolean,
    notification : boolean
    signUp : boolean
    signIn : boolean
}

type PropsCTX = {
    setIsOpen : React.Dispatch<React.SetStateAction<OpenState>>
    isOpen : OpenState
    CloseAll : () => void
}

export const PortalContext = React.createContext<PropsCTX>({
    setIsOpen : () => {},
    isOpen : {
        share : false,
        notification : false,
        signUp : false,
        signIn : false
    },
    CloseAll : () => {}
})

const PortalProvider = ({ children } : ProviderProps) => {
    const [isOpen, setIsOpen] = React.useState<OpenState>({
        share : false,
        notification : false,
        signUp : false,
        signIn : false
    })

    const CloseAll = () => {
        setIsOpen({
            share : false,
            notification : false,
            signUp : false,
            signIn : false
        })
    }

    return (
        <PortalContext.Provider value={{ setIsOpen, isOpen, CloseAll }}>
            {children}
        </PortalContext.Provider>
    )
}

export default PortalProvider