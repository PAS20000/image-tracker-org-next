import * as React from "react"
import css from './index.module.css'

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
    children ?: React.ReactNode
    title ?: string
    onSubmit : () => Promise<void>
    submitText : string
    id : string
}

const Form = ({ children, title, onSubmit, submitText, id } : Props) => {
    
    return (
        <form className={css['container']} onSubmit={onSubmit} id={id}>
            <h3 className={css['title']}>
                {title}
            </h3>
            {children}
            <button className={css['submit']} type='submit'>
                {submitText}
            </button>
        </form>
    )
}

export default Form