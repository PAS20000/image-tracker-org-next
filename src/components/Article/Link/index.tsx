import * as React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import css from './index.module.css'

type Props = {
    href : string
    text : string
    noFollow ?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = ({
  href,
  text,
  noFollow,
  onClick
} : Props) => {

    return (
       <a 
        href={href} 
        target='blank' 
        className={css['external']}  
        rel={noFollow ? 'nofollow' : 'dofollow'} 
        onClick={onClick}
       >
        {text} <FaExternalLinkAlt />
       </a>
    )
}

export default Link