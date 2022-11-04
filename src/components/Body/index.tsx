import * as React from 'react'
import useThemeCTX from '../../contexts/ThemeContext/useThemeCTX'
import useClass from '../../hooks/useClass'
import css from './index.module.css'

type Props = {
    children? : React.ReactNode
}

const Body = ({ children } : Props) => {
    const { theme } = useThemeCTX()
    const className = useClass({
        name : 'body',
        theme
    })
    return (
        <body className={css[className]}>
            {children}
        </body>
    )
}

export default Body