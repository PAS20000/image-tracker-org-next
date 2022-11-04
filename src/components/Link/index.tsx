import * as React from 'react'
import NextLink from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import useThemeCTX from '../../contexts/ThemeContext/useThemeCTX'
import useClass from '../../hooks/useClass'
import css from './index.module.css'

type Props = {
    children ?: React.ReactNode
    href : string
    target ?: string
    title ?: string
    className ?: string
    icon ?: React.ReactNode
    isExternal ?: boolean
    noFollow ?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = ({
    href,
    children,
    target,
    title,
    className,
    icon,
    isExternal,
    noFollow,
    onClick,
    download
} : Props) => {
    const { theme } = useThemeCTX()
    const Class = useClass({
        name : 'link',
        theme
    })
    
    if (target === '_blank') {
        return (
            <a href={href} target={target} title={title} onClick={onClick}
                download={download}
                className={css[`${Class}-${className}`]} rel={noFollow ? 'nofollow' : 'dofollow'}>
                {icon ? 
                    <span className={css['link-icon']}>
                        {icon}
                        &nbsp;
                        {children}
                    </span>
                    : 
                    isExternal &&
                    <span className={css['link-icon']}>
                        {children} <FaExternalLinkAlt />
                    </span> 
                }
            </a>
        )
    } else {
        return (
            <NextLink href={href} target={target} title={title} 
                className={css[`${Class}-${className}`]} rel={noFollow ? 'nofollow' : 'dofollow'}>
                {icon ? 
                    <span className={css['link-icon']}>
                        {icon}
                        &nbsp;
                        {children}
                    </span>
                    : 
                    isExternal &&
                    <span className={css['link-icon']}>
                        {children} <FaExternalLinkAlt />
                    </span> 
                }
            </NextLink>
        )
    }
}

export default Link