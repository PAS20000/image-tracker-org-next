import * as React from 'react'
import * as ReactIFA from 'react-icons/fa'
import css from './index.module.css'

type Props = {
    onChange : () => void
}

const Toggle = ({ 
    onChange
} : Props) => {

    return (
        <div className={css['toggle-container']}>
            <label className={css['switch']}>
                <span className={css['icons']}>
                    <ReactIFA.FaMoon />
                    <ReactIFA.FaSun />
                </span>
                <input type='checkbox' onChange={() => onChange()} />
                <span className={css['slider']} />
            </label> 
        </div>
    )
}

export default Toggle