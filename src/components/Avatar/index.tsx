import Picture from "../Picture"
import css from './index.module.css'
import * as React from 'react'

type Path = {
    desktop ?: string
    mobile ?: string
}

interface Props extends Path, React.HTMLAttributes<HTMLSpanElement> {
    w ?: string
    h ?: string
}

const Avatar = ({ h, w, desktop, mobile, onClick } : Props) => {
    return (
        <span className={css['avatar']} onClick={onClick}>
            <Picture
                alt='avatar'
                path={
                    {
                        desktop : desktop ?? '/default-avatar.png',
                        mobile : mobile ?? '/default-avatar.png'
                    }
                }
                title='avatar'
                height={h ?? '50px'}
                width={w ?? '50px'}           
            /> 
        </span>
    )
}

export default Avatar