import NextImage from 'next/image'
import css from './index.module.css'
import * as React from 'react'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    w ?: number
    h ?: number
}

const Avatar = ({ h, w, onClick } : Props) => {
    return (
        <span className={css['avatar']} onClick={onClick}>
            <NextImage
                alt='avatar'
                src='/default-avatar.png'
                title='avatar'
                height={h ?? 50}
                width={w ?? 50}
                sizes='100vw'        
            /> 
        </span>
    )
}

export default Avatar