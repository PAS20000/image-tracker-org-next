import * as React from 'react'
import useThemeCTX from '../../contexts/ThemeContext/useThemeCTX'
import useClass from '../../hooks/useClass'
import css from './index.module.css'

type Props = {
    children ?: React.ReactNode
    as ?: [
        'h1',
        'h2',
        'h3'
    ][number]
    icon ?: React.ReactNode
}

const Title = ({ 
    as, 
    children, 
    icon 
} : Props) => {
    const { theme } = useThemeCTX()
    const ClassTitle = useClass({
        name : 'title',
        theme
    })

    const ClassDivider = useClass({
        name : 'divider',
        theme
    })
    return (
        <>
            {as === 'h1' || !as &&
                <h1 className={css[ClassTitle]}>
                    {icon} {children}
                    <div className={css[ClassDivider]}/>
                </h1>
            }
            {as === 'h2' &&
                <h2 className={css[`sub-${ClassTitle}`]}>
                    {icon} {children}
                    <div className={css[ClassDivider]}/>
                </h2>
            }
            {as === 'h3' &&
                <h3 className={css['h3']}>
                    {icon} {children}
                </h3>
            }
        </>
    )
}

export default Title