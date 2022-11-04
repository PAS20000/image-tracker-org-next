import * as React from 'react'

type Props = {
    component ?: string
    name : string
    theme : [
        'dark',
        'light'
    ][number]
}

const useClass = ({
    component,
    name,
    theme
} : Props) => {
   
    return `${name}-${theme}`
}

export default useClass