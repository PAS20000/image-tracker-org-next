import * as React from 'react'
import * as ReactIGi from 'react-icons/gi'
import { MdImageSearch } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import useMedia from '../../hooks/useMedia'
import Card, { CardProps } from './Card'
import Title from '../Title'
import css from './index.module.css'

const Signatures = () => {
    const { GetPictureByNameS3 } = useMedia()
    const props = [
        {
            alt : 'Image Tracker logo signature orichalcum',
            title : 'Image Tracker logo signature orichalcum',
            path : GetPictureByNameS3('image-tracker-logo-orichalcum-09-10-2022'),
            icon : <FaHeart />,
            href : 'https://buy.stripe.com/6oEeUY6jI3Nv7o4cMN',
            anchorText : 'Orichalcum Member',
            classColor : 'purple',
            price : 179.99,
            limit : 'Unlimited Images / website'
        },
        {
            alt : 'Image Tracker logo signature diamond',
            title : 'Image Tracker logo signature diamond',
            path : GetPictureByNameS3('image-tracker-logo-diamond-09-10-2022'),
            icon : <ReactIGi.GiDiamondHard />,
            href : 'https://buy.stripe.com/dR6148dMa0Bj6k06os',
            anchorText : 'Diamond Member',
            classColor : 'blue',
            price : 14.99,
            limit : 'Unlimited Images / website'
        },
        {
            alt : 'Image Tracker logo signature platinum',
            title : 'Image Tracker logo signature platinum',
            path : GetPictureByNameS3('image-tracker-logo-platinum-09-10-2022'),
            icon : <ReactIGi.GiGoldBar />,
            href : 'https://buy.stripe.com/5kAcMQazY5VDaAgcMR',
            anchorText : 'Platinum Member',
            classColor : 'green',
            price : 9.99,
            limit : 'Limit of 700 images / website'
        },
        {
            alt : 'Image Tracker logo signature gold',
            title : 'Image Tracker logo signature gold',
            path : GetPictureByNameS3('image-tracker-logo-gold-09-10-2022'),
            icon : <ReactIGi.GiMetalBar />,
            href : 'https://buy.stripe.com/14kcMQ5fE83LbEkfZ4',
            anchorText : 'Golden Member',
            classColor : 'yellow',
            price : 7.99,
            limit : 'Limit of 400 images / website'
        },
        {
            alt : 'Image Tracker logo signature free',
            title : 'Image Tracker logo signature free',
            path : GetPictureByNameS3('image-tracker-logo-free-09-10-2022'),
            icon : <MdImageSearch />,
            href : 'https://chrome.google.com/webstore/detail/image-tracker/iepiihembcjdlhlncojlkmflncgehpdk?hl=en',
            anchorText : 'Free Member',
            classColor : 'red',
            price : '0.00',
            limit : 'Limit of 200 images / website'
        },
    ] as CardProps[]

    return (
        <section className={css['container-signatures']}>
            <Title as='h2'>
                Signatures
            </Title>
            <article className={css['cards-flex']}>
                {props.map(({ alt, anchorText, classColor, href, icon, limit, path, price, title }, index) => 
                    <Card
                        key={index} 
                        alt={alt}
                        anchorText={anchorText}
                        classColor={classColor}
                        href={href}
                        icon={icon}
                        limit={limit}
                        path={path}
                        price={price}
                        title={title}
                    />
                )}
            </article>
        </section>
    )
}

export default Signatures