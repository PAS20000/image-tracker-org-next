import css from './index.module.css'
import NextLink from "next/link"
import * as React from "react"
import useThemeCTX from "../../contexts/ThemeContext/useThemeCTX"
import useClass from "../../hooks/useClass"
import useMedia from "../../hooks/useMedia"
import Picture from "../Picture"
import { GiExitDoor } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import usePortalCTX from '../../contexts/PortalContext/usePortalCTX'
import useAuthCTX from '../../contexts/AuthContext/useAuthCTX'
import Avatar from '../Avatar'
import { useRouter } from 'next/router'

const NavBar = () => {
    const { GetPictureByNameS3 } = useMedia()
    const { setIsOpen } = usePortalCTX()
    const { pathname } = useRouter()
    const { theme } = useThemeCTX()
    const { isAuth, setMember } = useAuthCTX()
    const Class = useClass({
        name : 'nav',
        theme
    })
    const [location, setLocation] = React.useState<string>('')

    const ClassEachPathName = (path : string) => {
        if (path === pathname) {
            return css['link-selected']
        } else {
            return css['link']
        }
    }

    const useNotification = () => {
        setIsOpen(current =>
            {
                return {
                    ...current,
                    notification : current.notification ? false : true
                }
            }
        )
    }

    const useSignUpModal = () => {
        setIsOpen(current =>
            {
                return {
                    ...current,
                    signUp : current.signUp ? false : true,
                    signIn : false
                }
            }
        )
    }

    const useSignInModal = () => {
        setIsOpen(current =>
            {
                return {
                    ...current,
                    signUp : false,
                    signIn : current.signIn ? false : true
                }
            }
        )
    }

    const href = (path : string) => {
       if(!!location) {
            const url = new URL(location)
            const params = new URLSearchParams(url.search)
            const isExtension = !!params.get('extension')

            if (isExtension) {
                return `${path}?extension=true`
            } else {
                return path
            }
       } else {
         return path
       }
    }

    React.useEffect(() => {
        setLocation(window.location.href)
    }, [])

    return (
        <header>
            <nav className={css[Class]}>
                    <NextLink 
                        href={href('/')} 
                        className={css[ClassEachPathName('/')]}
                    >
                        <Picture
                            alt=''
                            path={GetPictureByNameS3('image-tracker-logo-orichalcum-09-10-2022')}
                            title=''
                            height='50px'
                            width='50px'
                        /> 
                    </NextLink>
                    <div className={css['links']}>
                        <NextLink href={href('/goals/')} className={ClassEachPathName('/goals')}>
                            Goals
                        </NextLink>
                        <NextLink href={href('/signatures/')} className={ClassEachPathName('/signatures')}>
                            Signatures
                        </NextLink>
                        <NextLink href={href('/support/')} className={ClassEachPathName('/support')}>
                            Support
                        </NextLink>
                    </div>
                <>
                    {isAuth ? 
                    <div className={css['avatar-container']}>
                        <div>
                            <span data-count='0' className={css['messages']} onClick={useNotification}>
                                <MdEmail size='22px'/>
                            </span>
                            <span className={css['exit']} onClick={() => {
                                setMember(false)
                            }}>
                                <GiExitDoor />
                            </span>
                        </div>
                        <NextLink href='/profile/'>
                           <Avatar />
                        </NextLink>
                    </div> :
                    <div className={css['action-container']}>
                        <button className={css['sign-in']} onClick={useSignInModal}>
                            Sign in
                        </button>
                        <button className={css['sign-up']} onClick={useSignUpModal}>
                            Sign up
                        </button>
                    </div>
                    }
                </>
            </nav>
        </header>
    )
}

export default NavBar