import * as React from 'react'
import usePortalCTX from '../../contexts/PortalContext/usePortalCTX'
import NotificationModal from './NotificationModal'
import ShareModal from './ShareModal'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

const Portal = () => {
    const { isOpen } = usePortalCTX()

    return (
        <>
            <div id='portal' />
            {isOpen.share && 
                <ShareModal />
            }
            {isOpen.notification &&
                <NotificationModal />
            }
            {isOpen.signUp &&
                <SignUpModal />
            }
            {isOpen.signIn &&
                <SignInModal />
            }
        </>
    )
}

export default Portal