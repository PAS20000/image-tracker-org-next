import * as React from 'react'
import * as ReactIFA from 'react-icons/fa'
import css from './index.module.css'
import usePortalCTX from '../../../contexts/PortalContext/usePortalCTX'
import useThemeCTX from '../../../contexts/ThemeContext/useThemeCTX'

const ShareButton = () => {
    const { theme } = useThemeCTX()
    const { setIsOpen } = usePortalCTX()

    const open = () => {
        setIsOpen(current => current.share ? 
            { 
                share : false 
            } : { 
                share : true 
            }
        )
    }

    return (
        <>
            <button type='button' className={css[`share-button-${theme}`]} onClick={open}>
                    Share 
                    <ReactIFA.FaInstagram />
                    <ReactIFA.FaTwitter />
                    <ReactIFA.FaWhatsapp />
            </button>
        </>
    )
}

export default ShareButton