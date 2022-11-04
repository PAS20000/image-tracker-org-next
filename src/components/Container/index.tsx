import * as React from "react"
import useThemeCTX from "../../contexts/ThemeContext/useThemeCTX"
import useClass from "../../hooks/useClass"
import css from './index.module.css'

type Props = {
    children ?: React.ReactNode
    className ?: string
    as ?: [
        'div',
        'article',
        'section'
    ][number]
}

const Container = ({ children, className, as } : Props) => {
    const { theme } = useThemeCTX()
    const Class = useClass({
        name : 'container',
        theme
    })
    
    return(
        <>
            {as === 'div' || !as && 
                <div className={`${css[Class]} ${className ?? ''}`}>
                    {children}
                </div>
            }
            {as === 'article' && 
                <article className={`${css[Class]} ${className ?? ''}`}>
                    {children}
                </article>
            }
            {as === 'section' && 
                <section className={`${css[Class]} ${className ?? ''}`}>
                    {children}
                </section>
            }
        </>
    )
}

export default Container