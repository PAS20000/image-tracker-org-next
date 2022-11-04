import * as React from 'react'

const useMedia = () => {
    const domain = 'https://imagetracker.org'
    
    const GetPictureByNameS3 = (name : string) => {

        return {
            desktop : `${domain}/media/desktop/${name}.webp`,
            mobile : `${domain}/media/mobile/${name}.webp`,
        }
    }

    return {
        GetPictureByNameS3
    }
}

export default useMedia