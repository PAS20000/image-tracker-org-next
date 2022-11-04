import * as React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import css from './index.module.css'

type Props = {
    children ?: React.ReactNode
}


const Carousel = ({ children } : Props) => {
    const $carousel = React.useRef<HTMLDivElement>(null)
    const [Children, setChildren] = React.useState(React.Children.toArray(children))

    const Right = () => {
        const carousel = $carousel?.current
        if (carousel) {
            setChildren(current => {
                return current.concat([children].slice(0, 3))
            })
            setTimeout(() => {
                carousel.scrollLeft += carousel.offsetWidth
            }, 50);
        }
    }
    
    const Left = () => {
        const carousel = $carousel?.current
        if (carousel) {
            carousel.scrollLeft -= carousel.offsetWidth
        }
    }

    return (
        <div className={css['carousel']} ref={$carousel}>
            {Children}
            <div className={css[`carousel-controls-${'dark'}`]}>
                <button onClick={Left}>
                    <FaArrowLeft /> 
                </button>
                <button onClick={Right}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Carousel