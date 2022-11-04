import NextImage from 'next/image'

type Props = {
    alt : string
    title : string
    path : {
        desktop : string
        mobile : string
    }
    width ?: string
    height ?: string
}

const Picture = ({
    path,
    title,
    alt,
    height,
    width
} : Props) => {

    return (
        <picture>
            <source srcSet={path.mobile} media='(max-width : 800px)' type='image/webp'/>
            <source srcSet={path.desktop} media='(min-width : 801px)' type='image/webp'/>
            <NextImage 
                src={path.mobile} 
                alt={alt} 
                title={title}
                placeholder='blur'
                blurDataURL={path.mobile}
                width={50}
                height={50}
                style={{
                  width: width ?? 'auto',
                  height: height ?? 'auto',
                }}
            />
        </picture>
    )
}

export default Picture