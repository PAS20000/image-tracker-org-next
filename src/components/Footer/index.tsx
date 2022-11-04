import * as React from 'react'
import useThemeCTX from '../../contexts/ThemeContext/useThemeCTX'
import useClass from '../../hooks/useClass'
import useMedia from '../../hooks/useMedia'
import Link from '../Link'
import Picture from '../Picture'
import { FaCopyright } from 'react-icons/fa'
import css from './index.module.css'

const Footer = () => {
    const { GetPictureByNameS3 } = useMedia()
    const { theme } = useThemeCTX()
    const Class = useClass({
        name : 'footer',
        theme
    })
    
    return (
        <footer className={css[Class]}>
            <Picture
                alt='image tracker logo'
                title='image tracker logo'
                path={GetPictureByNameS3('image-tracker-logo-orichalcum-09-10-2022')}
                width='50px'
                height='50px'
            />
            <h3>
               Image Tracker, All rights reserved 09/05/2022  <FaCopyright />
            </h3>
            <div className={css['footer-links']}>
                <Link href='https://chrome.google.com/webstore/detail/image-tracker/iepiihembcjdlhlncojlkmflncgehpdk?hl=en' target='_blank' isExternal>
                   Download
                </Link>
                <Link href='https://www.patreon.com/Image_Tracker' target='_blank' isExternal>
                    Patreon
                </Link>
                <Link href='https://discord.gg/2kyjbbjBwe' target='_blank' isExternal>
                    Discord server
                </Link>
                <Link href='https://www.youtube.com/channel/UCnl60Xy3I5Z1pwFvyf14FIQ' target='_blank' isExternal>
                    Youtube
                </Link>
                <Link href='https://www.instagram.com/imagetrackerofficial' target='_blank' isExternal>
                    Instagram
                </Link>
                <Link href='https://www.tiktok.com/@image_tracker' target='_blank' isExternal>
                    Tik tok
                </Link>
            </div>
        </footer>
    )
}

export default Footer