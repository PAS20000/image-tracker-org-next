import * as React from 'react'

type Props = {
    children ?: React.ReactNode
}

const Text = ({ children } : Props) => {

    return (
        <p className='text'>
          {children}
        </p>
    )
}

export default Text