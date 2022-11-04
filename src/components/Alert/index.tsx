import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IoCloseCircle } from 'react-icons/io5'
import css from './index.module.css'

type Props = {
    className ?: [
        'error',
        'warn',
        'success',
        'info'
    ][number]
    title ?: React.ReactNode
    icon : React.ReactNode
    describe : React.ReactNode
}

const Alert = ({
    title,
    describe,
    className,
    icon
} : Props) => {
    const [isOpen, setIsOpen] = React.useState(true)
    const [existPortal, setExistPortal] = React.useState<boolean>(false)

    const DOM = () => {
        const portal = document.getElementById('portal') as HTMLDivElement
        setExistPortal(!!portal)
    }

    React.useEffect(() => {
        DOM()
    }, [])

    if(existPortal) {
        return ReactDOM.createPortal(
            <>
                {isOpen && 
                    <div className={css[`container-${className ?? 'success'}`]}>
                        <div className={css['flex']}>
                            <h3>
                                {title}
                            </h3>
                            <IoCloseCircle className={css['close-button']} onClick={() => setIsOpen(false)} />
                        </div>
                        <p className={css['describe']}>
                            {icon} {describe}
                        </p>
                    </div>
                }
            </>,
            document.getElementById('portal') as HTMLDivElement
        )
    } else {
        return <></>
    }
}

export default Alert