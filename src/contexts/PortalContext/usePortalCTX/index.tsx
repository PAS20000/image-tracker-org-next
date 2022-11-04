import * as React from 'react'
import { PortalContext } from '..'

const usePortalCTX = () => {
    const {
        isOpen,
        setIsOpen,
        CloseAll,
    } = React.useContext(PortalContext)

    return {
        isOpen,
        setIsOpen,
        CloseAll
    }
}

export default usePortalCTX