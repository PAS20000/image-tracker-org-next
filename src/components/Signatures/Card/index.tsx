import * as React from 'react'
import { FaDiscord, FaHandshake, FaHeart, FaHeartBroken, FaImages, FaInfoCircle, FaSlash } from 'react-icons/fa'
import { IoMdMegaphone } from 'react-icons/io'
import { RiExchangeDollarLine } from 'react-icons/ri'
import useThemeCTX from '../../../contexts/ThemeContext/useThemeCTX'
import Link from '../../Link'
import Picture from '../../Picture'
import css from './index.module.css'

export type CardProps = {
    alt : string
    anchorText : string
    classColor : string
    href : string
    icon : React.ReactNode
    limit : string
    path : {
        desktop : string
        mobile : string
    }
    price : string | number
    title : string
}

const Card = ({
    alt,
    anchorText,
    classColor,
    href,
    icon,
    limit,
    path,
    price,
    title
} : CardProps) => {
    const { theme } = useThemeCTX()
    const [showInfo, setShowInfo] = React.useState(false)

    const Open = (e : React.MouseEvent) => {
        e.preventDefault()
        window.open(href, 'popup', 'location=1, toolbar=1, menubar=1, resizable=1, top=500, left=0, width=600, height=700')
    }

    return (
        <div className={css[`card-container-${theme}-${classColor}`]}>
           <Picture
                alt={alt}
                path={path}
                title={title}
                height='60px'
                width='60px'
           />
           <div className={css['card-info']}>
                <div>
                    <FaImages />&nbsp;
                    <p>{ limit }</p>
                </div>
                <div>
                    <IoMdMegaphone />&nbsp; 
                    <p>{ classColor !== 'red' ? 'Ad-free content' : 'Contains Ads' }</p>
                </div>
                <div>
                    { classColor !== 'purple' ? 
                    <>
                        <FaSlash style={{
                            position : 'absolute',
                            color : 'red'
                        }}/> <FaDiscord />&nbsp;
                        <p>No exclusive support channel</p>
                    </>
                         
                    :
                    <>
                        <FaDiscord />&nbsp;
                        <p>Exclusive support channel</p>
                    </>
                    }
                   
                </div>
                {classColor === 'purple' ?  
                    <div>
                        <FaHeart />&nbsp;
                        <p>Early access</p>
                        <FaInfoCircle 
                            size={16}
                            className={css[`orichalcum-info-${theme}`]}
                            onMouseEnter={() => setShowInfo(true)}
                        />
                        {showInfo &&
                            <p className={css[`info`]} onMouseLeave={() => setShowInfo(false)}>
                                asdajd-032-9432u4- v=cxv -=f 2-k
                            </p>
                        }
                    </div>
                    :
                    <div>
                        <FaHeartBroken />&nbsp;
                        <p>No early access</p>
                    </div>
                }
                <div>
                    <RiExchangeDollarLine />&nbsp;
                   <p>{ classColor === 'red' ? 'Free use' : 'Test for 7 days' }</p>
                </div>
                <div className={css['become-a-member']}>
                    <FaHandshake /> &nbsp;
                   <p>Become a</p>
                </div>
                <Link href={`${href}`} target='_blank' icon={icon} className='about' onClick={e => Open(e)}>
                    {anchorText}
                </Link>
           </div>
            <div className={css[`card-price-${theme}`]}>
                $ {price} {classColor === 'purple' ? '/ year' : '/ month'}
            </div>
        </div>
    )
}

export default Card