import * as React from 'react'
import css from './index.module.css'
import NextImage from 'next/image'

const Loading = () => {

    return (
        <div>
            <NextImage 
                src='https://imagetracker.org/media/desktop/image-tracker-logo-orichalcum-09-10-2022.webp'
                alt='image-tracker-logo-orichalcum-09-10-2022.webp'
                sizes='100vw'
                className={css['logo']}
            />
        </div>
    )
}

export default Loading