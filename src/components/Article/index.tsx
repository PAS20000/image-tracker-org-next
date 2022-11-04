import * as React from 'react'
import css from './index.module.css'
import Container from "../Container"
import Text from "../Text"
import Title from "../Title"
import ShareButton from "./ShareButton"

type Props = {
    children ?: React.ReactNode
    title : string
    icon ?: React.ReactNode
    custom ?: React.ReactNode
}

const Article = ({
    children,
    title,
    icon,
    custom
} : Props) => {
    return (
        <Container as='article' className={css['article']}>
            <Title as='h2' icon={icon}>
                {title} <ShareButton />
            </Title>
            {custom ? 
                custom 
                :
                <Text>
                    {children}
                </Text>
            }
        </Container>
    )
}

export default Article