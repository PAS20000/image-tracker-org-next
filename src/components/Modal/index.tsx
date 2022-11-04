import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactIoI from 'react-icons/io5'
import usePortalCTX from '../../contexts/PortalContext/usePortalCTX'
import css from './index.module.css'

type Props = {
    className ?: string
    children ?: React.ReactNode
    title ?: React.ReactNode
    targetClose : [
        'share',
        'notification',
        'signUp',
        'signIn'
    ][number]
}

const Modal = ({
    children,
    targetClose,
    title,
    className
} : Props) => {
    const [existPortal, setExistPortal] = React.useState<boolean>(false)
    const { CloseAll, setIsOpen } = usePortalCTX()

    const DOM = () => {
        const portal = document.getElementById('portal') as HTMLDivElement
        setExistPortal(!!portal)
    }

    const CloseUnique = () => {
        setIsOpen(current => {
            return {
                ...current,
                [targetClose] : false
            }
        })
    }

    React.useEffect(() => {
        DOM()
    }, [])

    if(existPortal) {
        return ReactDOM.createPortal(
            <>
                <div className={className ?? css['container-modal-head']}>
                    <div className={css['modal-title-flex']}>
                        {title &&
                            <h2>{title}</h2> 
                        }
                        <button onClick={CloseUnique} className={css['modal-close']}>
                            <ReactIoI.IoCloseCircle />
                        </button>
                    </div>
                    {children}
                </div>
                <div className={css['container-modal-background']} onClick={CloseAll}/>
            </>,
            document.getElementById('portal') as HTMLDivElement
        )
    } else {
        return <></>
    }
}

export default Modal