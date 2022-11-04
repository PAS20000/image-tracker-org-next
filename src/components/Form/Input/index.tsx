import css from './index.module.css'
import * as React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label : string
    icon ?: React.ReactNode
    register ?: any,
    errorMessage ?: string
}

const Input = (props : Props) => {
    const [passwordIsShow, setPasswordIsShow] = React.useState(false)
    const divRef = React.useRef<HTMLDivElement>(null)
    const ShowPassword = () => {
        const current = divRef.current

        if (current) {
            const input = current.getElementsByTagName('input')[0]

            if (input.type === 'password') {
                input.type = 'text'
                setPasswordIsShow(true)
            } else {
                input.type = 'password'
                setPasswordIsShow(false)
            } 
        }
       
    }

    return (
        <div 
            className={css[`container-${props.disabled ? 'disabled': 'active'}`]}
            title={props.disabled ? 
                'this field is not required'
                :
                ''
            }
        >
            <label htmlFor={props.label} onClick={ShowPassword}>
               {props.type === 'password' ? 
               <>
                    {passwordIsShow ? 
                        <FaEye className={css['show-password']} />
                        :
                        <FaEyeSlash className={css['show-password']} />
                    }
               </> : 
                    props.icon
               }
               <div className={css['label-content']}>
                {props.label}
               </div>
            </label>
            {props.type === 'password' ?
                <div ref={divRef} className={css['input-container']}>
                    <input 
                            { ...
                                {
                                    ...props,
                                    label : undefined, 
                                    icon : undefined, 
                                    errorMessage : undefined
                                }
                            }
                            {...props.register}
                    />
                    {props.errorMessage &&
                        <div role='alert' className={css['error-container']} title={props.errorMessage}>
                            <IoIosWarning 
                                className={css['error-icon']} 
                                onClick={() => alert(props.errorMessage)}
                            />
                        </div>
                    }
                </div>
                :
                <div className={css['input-container']}>
                    <input  { ...
                        {
                            ...props, 
                            label : undefined, 
                            icon : undefined, 
                            errorMessage : undefined
                        }
                    }
                        {...props.register}
                    />
                    {props.errorMessage &&
                        <div role='alert' className={css['error-container']} title={props.errorMessage}>
                            <IoIosWarning 
                                className={css['error-icon']} 
                                onClick={() => alert(props.errorMessage)}
                            />
                        </div>
                    }
                </div>
            }
            
        </div>
    )
}

export default Input