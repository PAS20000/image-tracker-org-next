import * as React from 'react'
import { AuthContext } from '..'

const useAuthCTX = () => {
    const {
        isAuth,
        setMember,
        member
    } = React.useContext(AuthContext)

    return {
        isAuth,
        setMember,
        member
    }
}

export default useAuthCTX